import { PropsWithChildren } from "react";
import classNames from "classnames";
import "./Badge.css";

type BadgeProps = {
  variant: "default" | "warn" | "danger";
};

export function Badge({ children, variant }: PropsWithChildren<BadgeProps>) {
  return (
    <span
      className={classNames({
        badge: true,
        "badge--default": variant === "default",
        "badge--warn": variant === "warn",
        "badge--danger": variant === "danger",
      })}
    >
      {children}
    </span>
  );
}
