import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Hello World!',
  },
} as Meta<TextProps>

export const Deafult: StoryObj = {}
