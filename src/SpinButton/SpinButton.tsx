import { createContext, ReactNode, useContext, useState } from "react";
import "./SpinButton.css";
import { DecrementButton, IncrementButton } from "./Button";

export type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

export const SpinButtonContext = createContext({
  value: 0,
  setValue: (value: number) => {},
});

function Label() {
  const { value } = useContext(SpinButtonContext);
  return (
    <span
      aria-valuenow={value}
      aria-label="counter"
      role="spinbutton"
      className="spinButton__label"
    >
      {value}
    </span>
  );
}

type ContainerProps = {
  children: ReactNode;
  value: number;
  setValue: (value: number) => void;
};

function Container({ children, value, setValue }: ContainerProps) {
  return (
    <SpinButtonContext.Provider value={{ value, setValue }}>
      <div className="spinButton">{children}</div>
    </SpinButtonContext.Provider>
  );
}

export const SpinButton = {
  Container,
  IncrementButton,
  DecrementButton,
  Label,
};
