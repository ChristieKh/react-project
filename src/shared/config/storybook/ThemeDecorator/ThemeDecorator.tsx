import "app/styles/index.scss";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
import { Story } from "@storybook/react";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
	return(
		<ThemeProvider initialTheme={theme}>
			<div className={`app ${theme}`}>
				<StoryComponent />
			</div>
		</ThemeProvider>
	);
};
