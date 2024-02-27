import styled from "styled-components";
import ActionButton from "../../../common/ActionButton";

export default function TodoCard({
  todo,
  handleUpdateTodoButtonClick,
  handleDeleteTodoButtonClick,
  handleCardDetailButtonClick,
}) {
  const { id, title, content, completed } = todo;

  return (
    <Container>
      <TitleBox>
        <p>{title}</p>
        <button id={id} onClick={handleCardDetailButtonClick}>
          상세조회
        </button>
      </TitleBox>
      <p>{content}</p>
      <ButtonBox>
        <ActionButton
          type="update"
          id={id}
          onClick={handleUpdateTodoButtonClick}
        >
          {completed ? "취소하기" : "완료하기"}
        </ActionButton>
        <ActionButton
          type="cancel"
          id={id}
          onClick={handleDeleteTodoButtonClick}
        >
          삭제하기
        </ActionButton>
      </ButtonBox>
    </Container>
  );
}

const Container = styled.div`
  width: 240px;
  height: 150px;
  border: 2px solid gray;
  border-radius: 4px;
  padding: 0 12px;

  & > p {
    min-height: 36px;
    font-size: 14px;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #333;
  }
`;

const TitleBox = styled.div`
  padding-top: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > p {
    font-size: 18px;
    margin: 0;
    font-weight: 600;
  }

  button {
    background: none;
    border: none;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      font-weight: 700;
    }
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
