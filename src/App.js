import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "JS framework",
  },
  {
    title: "Why React?",
    content: "React is a popular JS library",
  },
  {
    title: "How do you use React?",
    content: "By creating components",
  },
];

const options = [
  {
    label: "Color Red",
    value: "red",
  },
  {
    label: "Color Green",
    value: "green",
  },
  {
    label: "Color Purple",
    value: "purple",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <Header />
      <Route path={"/"}>
        <Accordion items={items} />
      </Route>
      <Route path={"/list"}>
        <Search />
      </Route>
      <Route path={"/dropdown"}>
        <Dropdown
          label="Select A Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path={"/translate"}>
        <Translate />
      </Route>
      {/*   <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
  {showDropdown ? ( 
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
      {/* ) : null} */}
    </div>
  );
};

export default App;
