import "./index.css";
import { Expandable } from "./Expandable/Expandable";
import { SpinButton } from "./SpinButton/SpinButton";
import { OptionItem, Select, SelectItem } from "./Select/Select";
import { useState } from "react";

function App() {
  const [food, setFood] = useState<SelectItem | null>(null);
  const [likes, setLikes] = useState(0);
  return (
    <div className="container">
      <SpinButton.Container setValue={setLikes} value={likes}>
        <SpinButton.IncrementButton>👍</SpinButton.IncrementButton>
        <SpinButton.Label />
        <SpinButton.DecrementButton>👎</SpinButton.DecrementButton>
      </SpinButton.Container>
      <Expandable.Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          provident fugit a adipisci deserunt cum, corporis perspiciatis
          incidunt asperiores consectetur voluptatum numquam. Velit obcaecati
          delectus sequi ad eligendi pariatur unde.
        </p>
        <Expandable.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, saepe
          aspernatur pariatur labore consequatur perferendis veritatis non!
          Porro, quo quas eaque perferendis consequuntur temporibus nostrum
          ullam dicta. Ut, vitae fugit.
        </Expandable.Content>
        <Expandable.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, saepe
          aspernatur pariatur labore consequatur perferendis veritatis non!
          Porro, quo quas eaque perferendis consequuntur temporibus nostrum
          ullam dicta. Ut, vitae fugit.
        </Expandable.Content>
        <Expandable.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, saepe
          aspernatur pariatur labore consequatur perferendis veritatis non!
          Porro, quo quas eaque perferendis consequuntur temporibus nostrum
          ullam dicta. Ut, vitae fugit.
        </Expandable.Content>
        <Expandable.Disclousure />
      </Expandable.Container>

      <Select value={food} onChange={setFood} placeholder="Digite um valor">
        <OptionItem label="Maçã" value="maca">
          Maçã
        </OptionItem>
        <OptionItem label="Pera" value="pera">
          Pera
        </OptionItem>
        <OptionItem label="Alface" disabled value="alface">
          Alface
        </OptionItem>
        <OptionItem label="Banana" value="banana">
          Banana
        </OptionItem>
      </Select>
    </div>
  );
}

export default App;
