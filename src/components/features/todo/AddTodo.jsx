import { useState } from "react";
import TextInput from "../../common/TextInput";
import ActionButton from "../../common/ActionButton";
import { isNonEmptyText } from "../../../utils/isNonEmptyText";

const useAddTodo = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTodo = () => {
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
  return { title, content, setTitle, setContent, addTodo };
};

const AddTodo = ({ todos, setTodos }) => {
  const { title, content, setContent, setTitle, addTodo } = useAddTodo({
    todos,
    setTodos,
  });

  return (
    <>
      <div className="add-card__content">
        <div className="add-card__input-container-wrap">
          <div className="add-card__input-container">
            <p>제목</p>
            <TextInput
              className="add-card__input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="add-card__input-container">
            <p>내용</p>
            <TextInput
              className="add-card__input"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
        <ActionButton
          className={"add-card__button"}
          onClick={addTodo}
          text="추가하기"
        />
      </div>
    </>
  );
};

export default AddTodo;
