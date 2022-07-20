import TButton from '@/components/TButton.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'TButton',
  component: TButton,
  argTypes: {},
} as Meta<typeof TButton>;

const Template: StoryFn<typeof TButton> = args => ({
  components: { TButton },
  setup: () => args,
  template: '<t-button v-bind="args">Click me</t-button>'
})

export const Default = Template.bind({});
Default.args = { bold: false }
