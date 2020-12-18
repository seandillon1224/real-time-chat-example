import styled from "styled-components";

const StyledInput = styled.input`
  color: ${({theme}) => theme.colors.purple};
  border: 2px solid ${({theme}) => theme.colors.purple};
  border-radius: 5px;
  padding: 5px 12px;
  margin: 5px;
  border: 1px solid ${({theme}) => theme.colors.gray};
`;

export default StyledInput;
