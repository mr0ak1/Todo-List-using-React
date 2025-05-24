import { useState } from "react";
import Addtodo from "./components/AddTodo";
import Container from "./components/Container";
import DisplayItem from "./components/DisplayItems";
import Heading from "./components/Heading";
import Errorview from "./components/Error";

function App() {
  let items = [
    {
      toDoWork: "Buy Milk",
      dueDate: "05/2/2025",
    },
    {
      toDoWork: "Go To College",
      dueDate: "05/2/2025",
    },
  ];

  let [todoData, todoUpdate] = useState(items);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`${itemName} ${itemDueDate}`);
    const itemsAdded = {
      toDoWork: itemName,
      dueDate: itemDueDate,
    };

    todoUpdate([...todoData, itemsAdded]);
  };

  let handleDeleteItem = (indexToDelete) => {
    const updateItems = todoData.filter((_, index) => index !== indexToDelete);
    todoUpdate(updateItems);
  };
  return (
    <Container>
      <Heading />

      <Addtodo onNewItem={handleNewItem} />
      <Errorview todoData={todoData} />
      <DisplayItem todoItems={todoData} onDeleteItems={handleDeleteItem} />
    </Container>
  );
}

export default App;
