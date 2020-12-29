import styled from "styled-components";

const StyledHome = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .header {
    padding: 5px 0;
    font-size: 24px;
    text-align: center;
    width: 100%;
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray};
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 5px;
  }

  .lowerHalf {
    width: 100%;
  }
`;

export default StyledHome;
