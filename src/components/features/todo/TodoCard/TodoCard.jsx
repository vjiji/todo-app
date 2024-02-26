import ActionButton from "../../../common/ActionButton";

const TodoCard = ({
  className,
  todo,
  handleUpdateTodoButtonClick,
  handleDeleteTodoButtonClick,
}) => {
  const { id, title, content, completed } = todo;
  return (
    <div className={className}>
      <p className="card-list__card-title">{title}</p>
      <p className="card-list__card-content">{content}</p>
      <div className="card-list__button-wrap">
        <ActionButton
          className={`card-list__button--${completed ? "cancel" : "complete"}`}
          id={id}
          onClick={handleUpdateTodoButtonClick}
          text={completed ? "취소하기" : "완료하기"}
        />
        <ActionButton
          className={"card-list__button--delete"}
          id={id}
          onClick={handleDeleteTodoButtonClick}
          text="삭제하기"
        />
      </div>
    </div>
  );
};

export default TodoCard;
