import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useCallback, useState } from "react";
import { Modal } from "shared/ui/Modal/Modal";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onToggleModal = useCallback(() => {
		setIsAuthModal(prevState => !prevState);
	}, []);

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				className={cls.links}
				onClick={onToggleModal}
			>
				{t("Войти")}
			</Button>
			<Modal isOpen={isAuthModal} onClose={onToggleModal}>
				{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut elementum ipsum. Curabitur a blandit nisi. Nam ut arcu mollis, auctor magna blandit, blandit sapien. Mauris vestibulum lorem nunc, eu volutpat turpis dictum vitae."}
			</Modal>
		</div>
	);
};


