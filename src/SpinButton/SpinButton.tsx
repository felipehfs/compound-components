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
  return <span className="spinButton__label">{value}</span>;
}

type ContainerProps = {
  children: ReactNode;
  defaultValue: number;
};

function Container({ children, defaultValue }: ContainerProps) {
  const [value, setValue] = useState(defaultValue);
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
