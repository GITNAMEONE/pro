import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoItemList = ({ title, todoList, setTodoList, checkedList }) => (
  <div className="todoapp__list">
    {/* props로 부터 title 값을 전달 받음 */}
    <p className="todoapp__list-tit">{title}</p>

    <ul className="todoapp__list-ul">
      {todoList && // todoList가 있을때만 출력
        todoList.map((todoItem) => {
          if (todoItem.deleted) return null;

          // checkedList 값에 따라 '할 일 목록' 또는 '완료한 목록'을 출력
          if (checkedList !== todoItem.checked) return null;

          return (
            // map을 이용하여 ToDoItem을 출력
            <TodoItem
              key={todoItem.id}
              todoItem={todoItem}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          );
        })}
    </ul>
  </div>
);

TodoItemList.propTypes = {
  title: PropTypes.string.isRequired,
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  setTodoList: PropTypes.func.isRequired,
  checkedList: PropTypes.bool.isRequired,
};

export default TodoItemList;
