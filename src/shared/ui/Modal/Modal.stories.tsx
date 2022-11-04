import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Modal } from "./Modal";

export default {
	title: "shared/Modal",
	component: Modal,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	isOpen: true,
	children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut elementum ipsum. Curabitur a blandit nisi. Nam ut arcu mollis, auctor magna blandit, blandit sapien. Mauris vestibulum lorem nunc, eu volutpat turpis dictum vitae.",
};

export const Dark = Template.bind({});
Dark.args = {
	isOpen: true,
	children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut elementum ipsum. Curabitur a blandit nisi. Nam ut arcu mollis, auctor magna blandit, blandit sapien. Mauris vestibulum lorem nunc, eu volutpat turpis dictum vitae.",
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
