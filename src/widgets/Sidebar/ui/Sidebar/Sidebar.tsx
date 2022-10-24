import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "widgets/LangSwitcher/ui/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { useTranslation } from "react-i18next";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about.svg";
import MainIcon from "shared/assets/icons/main.svg";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const { t } = useTranslation();
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed(prevState => !prevState);
	};

	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
			<Button
				onClick={onToggle}
				data-testid="sidebar-toggle"
				className={cls.collapseBtn}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				size={ButtonSize.L}
				square
			>
				{collapsed ? ">" : "<"}
			</Button>
			<div className={cls.items}>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					className={cls.item}
					to={RoutePath.main}>
					<MainIcon className={cls.icon} />
					<span className={cls.link}>
						{t("Главная")}
					</span>
				</AppLink>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					className={cls.item}
					to={RoutePath.about}
				>
					<AboutIcon className={cls.icon} />
					<span className={cls.link}>
						{t("О сайте")}
					</span>

				</AppLink>
			</div>
			<div className={cls.switchers}>
				<ThemeSwitcher/>
				<LangSwitcher className={cls.lang} short={collapsed} />
			</div>
		</div>
	);
};
