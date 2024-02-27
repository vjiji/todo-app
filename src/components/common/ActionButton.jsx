import styled from "styled-components";

const ActionButton = ({ className, id, onClick, text }) => {
  return (
    <ButtonStyle id={id} onClick={onClick}>
      {text}
    </ButtonStyle>
  );
};

export default ActionButton;

const ButtonStyle = styled.button`
  width: 100px;
  height: 28px;
  background: #fff;
  border: 1px solid #000;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
`;
