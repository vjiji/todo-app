import { useState } from "react";
import { isNonEmptyText } from "../../../../utils/isNonEmptyText";
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../../../../redux/modules/todos";
import { addIdCount } from "../../../../redux/modules/counter";

export default function useAddTodo() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const idCount = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleAddTodoButtonClick = () => {
    if (!(isNonEmptyText(title) && isNonEmptyText(content))) {
      window.alert("제목과 내용을 모두 작성해주세요!");
      return;
    }
    dispatch(
      addTodos({ title, content, completed: false, id: String(idCount) })
    );
    dispatch(addIdCount());
    setTitle("");
    setContent("");
  };
  return { title, content, setTitle, setContent, handleAddTodoButtonClick };
}
