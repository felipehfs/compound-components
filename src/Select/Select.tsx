import { createContext, ReactNode, useContext, useState } from "react";
import "./Select.css";
import classnames from "classnames";

export type SelectItem = {
  value: null | string;
  label: string;
};

type SelectProps = {
  children: ReactNode;
  value: SelectItem | null;
  placeholder: string;
  onChange: (value: SelectItem) => void;
};

type SelectContextData = {
  setOpen: (value: boolean) => void;
  value: SelectItem | null;
  onChange: (value: SelectItem) => void;
};

const SelectContext = createContext<SelectContextData>({} as SelectContextData);

export function Select({
  children,
  value,
  placeholder,
  onChange,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  return (
    <SelectContext.Provider value={{ setOpen, onChange, value }}>
      <div className="select">
        <button onClick={() => setOpen(!open)} className="select__trigger">
          {value ? value.label : placeholder}
        </button>
        {open ? <div className="select__menu">{children}</div> : null}
      </div>
    </SelectContext.Provider>
  );
}

type OptionItemProps = {
  children: ReactNode;
  disabled?: boolean;
  value: string;
  label: string;
};
export function OptionItem({
  children,
  value,
  label,
  disabled,
}: OptionItemProps) {
  const { onChange, setOpen, value: currentValue } = useContext(SelectContext);

  const handleOnClick = () => {
    if (disabled) return;
    onChange({ value, label });
    setOpen(false);
  };

  return (
    <button
      onClick={handleOnClick}
      className={classnames({
        optionItem: true,
        "optionItem--current": currentValue?.value === value,
        "optionItem--disabled": disabled,
        "optionItem--active": !disabled,
      })}
    >
      {children}
    </button>
  );
}
