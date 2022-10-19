import { InputHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode,
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className={clsx(
      'flex items-center gap-3 py-4 px-3 rounded w-full bg-gray-800 focus-within:ring-2 ring-gray-400',
    )}>
      {props.children}
    </div>
  )
}

function TextInputIcon() {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input className="bg-transparent outline-none flex-1 text-gray-100 text-xs placeholder:text-gray-400"
    {...props}
    />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}
