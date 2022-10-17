import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Hello World!',
  },
} as Meta<TextProps>

export const Deafult: StoryObj<TextProps> = {}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Hello World!</p>
    )
  }
}
