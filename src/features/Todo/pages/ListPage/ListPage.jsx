import React, { useState } from "react";
import TodoList from "../../components/TodoList/index";

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Wake",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState("all");

  const handlerTodoClick = (todo, idx) => {
    // clone current array to the new one
    const newTodoList = [...todoList];

    console.log(todo, idx);
    //toggle state
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };
    setTodoList(newTodoList);
  };
  const handlerShowAllClick = () => {
    setFilteredStatus("all");
  };
  const handlerShowCompletedClick = () => {
    setFilteredStatus("completed");
  };
  const handlerShowNewClick = () => {
    setFilteredStatus("new");
  };

  const renderedTodoList = todoList.filter(
    (todo) => filteredStatus === "all" || filteredStatus === todo.status
  );

  return (
    <div>
      <h2>Todo List</h2>
      <TodoList todoList={renderedTodoList} onTodoClick={handlerTodoClick} />

      <div>
        <button onClick={handlerShowAllClick}>Show All</button>
        <button onClick={handlerShowCompletedClick}>Show Completed</button>
        <button onClick={handlerShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
