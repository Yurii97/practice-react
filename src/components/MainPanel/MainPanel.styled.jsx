import styled from '@emotion/styled';

export const SectionPanels = styled.section`
  width: 600px;
  padding: 30px 0;
  margin: 50px auto;
  border-radius: 4px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  & .containerHeader,
  li {
    display: flex;
    justify-content: space-between;
    text-align: center;
    width: 300px;
  }
`;

export const ButtonStyled = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  margin: 50px 0 0 50px;
  padding: 0;
  color: white;
  background-color: ${({ bgColor }) => bgColor};
`;
