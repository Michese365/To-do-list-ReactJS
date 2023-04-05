import React from "react";

function App() {
  const [inputText, setInputText] = React.useState("");
  const [items, setitems] = React.useState([]);

  // Function is called when input change is detected in the form.
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  // Function is called when button is clicked and an item is added to the list
  function handleClick() {
    setitems((prevValue)=>{
      return [...prevValue, inputText];
    });

    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={handleChange} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => {
           return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
