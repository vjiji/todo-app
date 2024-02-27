import { useState } from "react";
import { isNonEmptyText } from "../../../../utils/isNonEmptyText";
import { useDispatch } from "react-redux";
import { addTodos } from "../../../../redux/modules/todos";

export const useAddTodo = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleAddTodoButtonClick = () => {
    if (!(isNonEmptyText(title) && isNonEmptyText(content))) {
      window.alert("제목과 내용을 모두 작성해주세요!");
      return;
    }
    dispatch(addTodos({ title, content, completed: false }));

    setTitle("");
    setContent("");
  };
  return { title, content, setTitle, setContent, handleAddTodoButtonClick };
};
