import styled from "styled-components";

export default function TextInput({ value, onChange }) {
  return <InputStyle value={value} onChange={onChange} />;
}

const InputStyle = styled.input`
  width: 220px;
  height: 24px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
`;
