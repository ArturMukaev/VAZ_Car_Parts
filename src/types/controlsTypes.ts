import {ReactNode, MouseEventHandler} from "react";

export type buttonType = 'big' | 'medium' | 'small' | 'long' | 'icon';

export interface ButtonProps {
    children: ReactNode;
    appearance: buttonType;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}