import TextInput from "../../../common/TextInput";
import ActionButton from "../../../common/ActionButton";
import { useAddTodo } from "./useAddTodo";

const AddTodo = () => {
  const { title, content, setContent, setTitle, handleAddTodoButtonClick } =
    useAddTodo();

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
          onClick={handleAddTodoButtonClick}
          text="추가하기"
        />
      </div>
    </>
  );
};

export default AddTodo;
