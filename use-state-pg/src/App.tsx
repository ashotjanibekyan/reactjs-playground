import { useState } from "react";
import "./styles.css";

type GreetingsComponentProps = {
  name: string;
  id: number;
  onNameClick: (id: number) => void;
};

function GreetingsComponent({ name, id, onNameClick }: GreetingsComponentProps) {
  return <h1 onClick={() => onNameClick(id)}>Hi {name}</h1>;
}

export default function App() {
  const [names, setNames] = useState([
    { id: 12, name: "Name1" },
    { id: 13, name: "Name2" },
  ]);
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="App">
      {names.map((p) => (
        <GreetingsComponent
          key={p.id}
          name={p.name}
          id={p.id}
          onNameClick={(id) => {
            setNames(names.filter((n) => n.id !== id));
          }}
        />
      ))}

      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button
        onClick={() => {
          setNames([...names, { name: inputValue, id: Math.random() }]);
          setInputValue("");
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          setNames([]);
          setInputValue("");
        }}
      >
        Clear
      </button>
    </div>
  );
}
