import TextInput from "../../common/TextInput";
import ActionButton from "../../common/ActionButton";

const AddTodo = ({ title, content, setTitle, setContent, addTodo }) => {
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
