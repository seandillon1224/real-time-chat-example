import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 5px 12px;
  margin: 5px;
`;

export default StyledButton;
