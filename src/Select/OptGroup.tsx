import { Children, cloneElement } from "react";
import "./Select.css";

type OptGroupProps = {
  children: JSX.Element[] | JSX.Element;
  label: string;
};

export function OptGroup({ children, label }: OptGroupProps) {
  return (
    <div>
      <span className="optgroup__label">{label}</span>
      {Children.map(children, (child) =>
        cloneElement(child, {
          disabled: true,
        })
      )}
    </div>
  );
}
