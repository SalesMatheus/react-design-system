import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode,
}
export interface TextInputIconProps {
  children: ReactNode,
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className={clsx(
      'flex items-center h-12 gap-3 py-4 px-3 rounded w-full bg-gray-800 focus-within:ring-2 ring-gray-400',
    )}>
      {props.children}
    </div>
  )
}

function TextInputIcon(props: TextInputIconProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {props.children}
    </Slot>
  )
}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input className="bg-transparent outline-none flex-1 text-gray-100 text-xs placeholder:text-gray-400"
    {...props}
    />
  );
}

TextInputRoot.displayName = 'TextInput.Root';
TextInputIcon.displayName = 'TextInput.Icon';
TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}
