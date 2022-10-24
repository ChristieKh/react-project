import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;
	short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation();

	const toggleLanguage = () => {
		i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
	};

	return (
		<Button
			theme={ButtonTheme.CLEAR}
			onClick={toggleLanguage}
			className={classNames("", {}, [className])}
		>
			{t(short ? "Короткий язык":  "Язык")}
		</Button>
	);
};
