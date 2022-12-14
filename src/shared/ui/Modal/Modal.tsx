import { classNames } from "shared/lib/classNames/classNames";
import React, { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Portal } from "shared/ui/Portal/Portal";
import cls from "./Modal.module.scss";

interface ModalProps {
    className?: string;
    children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
	const [isClosing, setIsClosing] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();

	const closeHandler = useCallback(() => {
		if(onClose){
			setIsClosing(true);

			timerRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, ANIMATION_DELAY);
		}
	}, [onClose]);

	const onKeyDown = useCallback((event: KeyboardEvent) => {
		if(event.key === "Escape") {
			closeHandler();
		}
	}, [closeHandler]);

	useEffect(() => {
		if(isOpen){
			window.addEventListener("keydown", onKeyDown);
		}
		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	const onContentClick = (event: React.MouseEvent) => event.stopPropagation();

	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing
	};

	return (
		<Portal>
			<div className={classNames(cls.Modal, mods, [className])}>
				<div className={cls.overlay} onClick={closeHandler}>
					<div className={cls.content} onClick={onContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};
