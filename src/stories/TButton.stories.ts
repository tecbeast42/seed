import TButton from '@/components/TButton.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'TButton',
  component: TButton,
  argTypes: {},
} as Meta<typeof TButton>;

export const Default: StoryFn<typeof TButton> = () => ({
  components: { TButton },
  template: '<t-button>Click me</t-button>'
})
