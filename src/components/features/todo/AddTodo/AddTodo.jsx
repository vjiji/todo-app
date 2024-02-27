import TextInput from "../../../common/TextInput";
import ActionButton from "../../../common/ActionButton";
import { useAddTodo } from "./useAddTodo";
import styled from "styled-components";

const AddTodo = () => {
  const { title, content, setContent, setTitle, handleAddTodoButtonClick } =
    useAddTodo();

  return (
    <Container>
      <InputBoxWrap>
        <InputBox>
          <p>제목</p>
          <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
        </InputBox>
        <InputBox>
          <p>내용</p>
          <TextInput
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </InputBox>
      </InputBoxWrap>
      <ActionButton type="add" onClick={handleAddTodoButtonClick}>
        추가하기
      </ActionButton>
    </Container>
  );
};

export default AddTodo;

const Container = styled.div`
  height: 60px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ddd;
`;

const InputBoxWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
`;
