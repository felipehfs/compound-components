import { ReactNode, useContext, ButtonHTMLAttributes } from "react";
import { ButtonProps, SpinButtonContext } from "./SpinButton";

function Button({
  children,
  onClick,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...rest} onClick={onClick} className="spinButton__button">
      {children}
    </button>
  );
}

export function IncrementButton({ children }: { children: ReactNode }) {
  const { setValue, value } = useContext(SpinButtonContext);
  return (
    <Button aria-label="Increment" onClick={() => setValue(value + 1)}>
      {children}
    </Button>
  );
}

export function DecrementButton({ children }: { children: ReactNode }) {
  const { setValue, value } = useContext(SpinButtonContext);
  return (
    <Button aria-label="Decrement" onClick={() => setValue(value - 1)}>
      {children}
    </Button>
  );
}
