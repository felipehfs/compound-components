import { useContext } from "react";
import { ExpandableContext } from "./Expandable";

export function Disclousure() {
  const { open, setOpen } = useContext(ExpandableContext);
  return (
    <button onClick={() => setOpen(!open)} className="expandable__button">
      {open ? "Ver menos" : "Ver mais"}
    </button>
  );
}
