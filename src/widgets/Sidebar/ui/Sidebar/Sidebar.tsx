import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "widgets/LangSwitcher/ui/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed] = useState(false);

	// const onToggle = () => {
	// 	setCollapsed(prevState => !prevState);
	// };

	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
			{/*<button*/}
			{/*	onClick={onToggle}*/}
			{/*	data-testid="sidebar-toggle"*/}
			{/*>*/}
			{/*	TOGGLE*/}
			{/*</button>*/}
			<div className={cls.switchers}>
				<ThemeSwitcher/>
				<LangSwitcher className={cls.lang}/>
			</div>
		</div>
	);
};
