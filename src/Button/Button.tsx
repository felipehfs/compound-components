import { ButtonHTMLAttributes } from "react";
import "./Button.css";
import classNames from "classnames";

type ButtonProps = {
  variant: "primary" | "secundary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant, children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={classNames({
        button: true,
        "button--primary": variant === "primary",
        "button--secundary": variant === "secundary",
      })}
    >
      {children}
    </button>
  );
}
