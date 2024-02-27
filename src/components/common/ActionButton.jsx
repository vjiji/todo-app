import styled from "styled-components";

export default function ActionButton({ type, id, onClick, children }) {
  return (
    <ActionButtonStyles type={type} id={id} onClick={onClick}>
      {children}
    </ActionButtonStyles>
  );
}

const BaseStyles = styled.button`
  width: 100px;
  height: 28px;
  border: 1px solid #000;
  border-radius: 4px;
  background: #fff;
  font-weight: 500;
  cursor: pointer;
`;

const ActionButtonStyles = styled(BaseStyles)`
  ${({ type }) => {
    switch (type) {
      case "add":
        return `
          background: #00bfff;
          border: none;
          &:hover {
            border: 1px solid #444;
          }
        `;

      case "update":
        return `
          border: 1px solid #00ab41;
          &:hover {
            background-color: #00ab41;
            color: #fff;
          }
        `;

      case "cancel":
        return `
          border: 1px solid #fbb117;
          &:hover {
            background-color: #fbb117;
            color: #fff;
          }
        `;

      case "delete":
        return `
          border: 1px solid #9f9f9f;
          &:hover {
            background-color: #9f9f9f;
            color: #fff;
          }
        `;
      default:
        return;
    }
  }}
`;
