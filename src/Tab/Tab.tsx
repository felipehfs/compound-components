import {
  Children,
  cloneElement,
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import "./Tab.css";
import classnames from "classnames";

const TabContext = createContext({
  tabIndex: 0,
  setTabIndex: (index: number) => {},
});

function TabContainer({
  children,
  index,
  onChange,
}: PropsWithChildren<{ index: number; onChange: (value: number) => void }>) {
  return (
    <TabContext.Provider value={{ tabIndex: index, setTabIndex: onChange }}>
      <div role="tab" className="tab__container">
        {children}
      </div>
    </TabContext.Provider>
  );
}

function Panels({ children }: PropsWithChildren) {
  const { tabIndex } = useContext(TabContext);
  return <div>{Children.toArray(children)[tabIndex]}</div>;
}

function PanelItem({ children }: PropsWithChildren) {
  return (
    <div role="tabpanel" className="tab__panel__item">
      {children}
    </div>
  );
}
function HeaderItem({
  children,
  index,
  disabled,
}: PropsWithChildren<{ index?: number; disabled?: boolean }>) {
  const { setTabIndex, tabIndex } = useContext(TabContext);

  const handleOnclick = () => {
    if (typeof index !== "number") throw new Error("Invalid index");
    if (disabled) return;
    setTabIndex(index);
  };

  return (
    <button
      onClick={handleOnclick}
      className={classnames({
        tabHeader__item: true,
        "tabHeader__item--active": tabIndex === index,
        "tabHeader__item--disabled": disabled,
      })}
    >
      {children}
    </button>
  );
}

function Headers({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <div className="tabHeader">
      {Children.map(children, (child, index) => cloneElement(child, { index }))}
    </div>
  );
}

export const Tab = {
  Container: TabContainer,
  Headers,
  HeaderItem,
  Panels,
  PanelItem,
};
