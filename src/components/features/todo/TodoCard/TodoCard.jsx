import styled from "styled-components";
import ActionButton from "../../../common/ActionButton";

const TodoCard = ({
  className,
  todo,
  handleUpdateTodoButtonClick,
  handleDeleteTodoButtonClick,
  handleCardDetailButtonClick,
}) => {
  const { id, title, content, completed } = todo;

  return (
    <Container>
      <p className="todo-card__title">{title}</p>
      <p className="todo-card__content">{content}</p>
      <ButtonBox>
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
        <ActionButton
          className={"card-list__button--detail"}
          id={id}
          onClick={handleCardDetailButtonClick}
          text="상세조회"
        />
      </ButtonBox>
    </Container>
  );
};

export default TodoCard;

const Container = styled.div`
  width: 240px;
  height: 150px;
  border: 2px solid gray;
  border-radius: 4px;
  padding: 0 12px;

  & > p {
    font-size: 14px;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #333;
  }

  .todo-card__title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 0;
  }

  .todo-card__content {
    min-height: 36px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
