import type { Meta, StoryObj } from '@storybook/svelte';
import NavBar from '$lib/components/NavBar.svelte';

const meta = {
  title: 'Static/NavBar',
  component: NavBar,
  argTypes: {},
} satisfies Meta<NavBar>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {},
};
