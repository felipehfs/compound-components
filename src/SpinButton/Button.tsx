import { ReactNode, useContext } from "react";
import { ButtonProps, SpinButtonContext } from "./SpinButton";

function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="spinButton__button">
      {children}
    </button>
  );
}

export function IncrementButton({ children }: { children: ReactNode }) {
  const { setValue, value } = useContext(SpinButtonContext);
  return <Button onClick={() => setValue(value + 1)}>{children}</Button>;
}

export function DecrementButton({ children }: { children: ReactNode }) {
  const { setValue, value } = useContext(SpinButtonContext);
  return <Button onClick={() => setValue(value - 1)}>{children}</Button>;
}
