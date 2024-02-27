import styled from "styled-components";

const TextInput = ({ value, onChange }) => {
  return <InputStyle value={value} onChange={onChange} />;
};

export default TextInput;

const InputStyle = styled.input`
  width: 220px;
  height: 24px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
`;
