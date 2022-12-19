import { createContext, PropsWithChildren, useContext } from "react";
import { Button } from "../Button/Button";
import "./Dialog.css";

type DialogProps = {
  open: boolean;
  onClose: () => void;
};

const DialogContext = createContext({
  open: false,
  onClose: () => {},
});

function Container({
  children,
  open,
  onClose,
}: PropsWithChildren<DialogProps>) {
  if (!open) return null;

  return (
    <DialogContext.Provider value={{ open, onClose }}>
      <div className="dialog__overlay">
        <div
          role="alertdialog"
          aria-labelledby="title"
          aria-modal={open}
          className="dialog"
        >
          {children}
        </div>
      </div>
    </DialogContext.Provider>
  );
}

export function Header({ title }: { title: string }) {
  const { onClose } = useContext(DialogContext);
  return (
    <header className="dialog__header">
      <h3 id="title" className="dialog__header__title">
        {title}
      </h3>
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="dialog__header__button"
      >
        x
      </button>
    </header>
  );
}

export function Content({ children }: PropsWithChildren) {
  return <article className="dialog__content">{children}</article>;
}

export function Footer() {
  const { onClose } = useContext(DialogContext);
  return (
    <footer className="dialog__footer">
      <Button onClick={onClose} variant="primary">
        Confirmar
      </Button>
    </footer>
  );
}

export const Dialog = {
  Container,
  Content,
  Header,
  Footer,
};
