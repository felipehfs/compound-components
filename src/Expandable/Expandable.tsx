import { createContext, ReactNode, useContext, useState } from "react";
import { Disclousure } from "./Disclousure";
import "./Expandable.css";

export const ExpandableContext = createContext({
  open: false,
  setOpen: (value: boolean) => {},
});

function Container({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <ExpandableContext.Provider value={{ open, setOpen }}>
      <div className="expandable__container">{children}</div>
    </ExpandableContext.Provider>
  );
}

function Content({ children }: { children: ReactNode }) {
  const { open } = useContext(ExpandableContext);
  return open ? (
    <div aria-expanded={open} className="expandable__content">
      {children}
    </div>
  ) : null;
}

export const Expandable = {
  Container,
  Disclousure,
  Content,
};
