import { useState } from "react";
import { SelectOption } from "./components/Select";
import Select from "./components/Select";
const options = [
  {
    content: "Primeiro",
    value: 1,
  },
  {
    content: "Segundo",
    value: 2,
  },
  {
    content: "Terceiro",
    value: 3,
  },
  {
    content: "Quarto",
    value: 4,
  },
  {
    content: "Quinto",
    value: 5,
  },
];

function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);

  return (
    <>
      <Select
        multiple
        options={options}
        value={value1}
        onChange={(opt) => setValue1(opt)}
      />
      <br />
      <Select
        options={options}
        value={value2}
        onChange={(opt) => setValue2(opt)}
      />
    </>
  );
}

export default App;
