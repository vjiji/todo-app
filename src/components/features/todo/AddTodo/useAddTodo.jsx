import { useState } from "react";
import { isNonEmptyText } from "../../../../utils/isNonEmptyText";

export const useAddTodo = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddTodoButtonClick = () => {
    if (!(isNonEmptyText(title) && isNonEmptyText(content))) {
      window.alert("제목과 내용을 모두 작성해주세요!");
      return;
    }
    setTodos([
      ...todos,
      { id: String(todos.length), title, content, completed: false },
    ]);
    setTitle("");
    setContent("");
  };
  return { title, content, setTitle, setContent, handleAddTodoButtonClick };
};
