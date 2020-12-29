import styled from "styled-components";

const StyledChatBubble = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: ${({ direction }) =>
    direction === "left" ? "flex-start" : "flex-end"};
  .bubble {
    border-radius: 20px;
    padding: 8px 15px;
    margin: 5px;
    background-color: ${({ direction, theme }) =>
      direction === "left" ? theme.colors.gray : theme.colors.purple};
    color: ${({ direction, theme }) =>
      direction === "left" ? "black" : theme.colors.white};
  }
`;

export default StyledChatBubble;
