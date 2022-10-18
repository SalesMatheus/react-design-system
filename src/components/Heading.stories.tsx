import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Hello World!',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<HeadingProps>

export const Deafult: StoryObj<HeadingProps> = {}

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Hello World!</h1>
    )
  },
  argTypes: {
    children: {
      table: {
          disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}
