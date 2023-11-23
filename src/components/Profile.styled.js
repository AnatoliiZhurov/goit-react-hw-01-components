import styled from 'styled-components';

export const UserCard = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  display: block;
  width: 400px;
  background-color: #fff0f5;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
export const UserStats = styled.ul`
  display: flex;
  justify-content: space-between;
`;
export const UserState = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  flex: 1;
  border: 1px solid black;
`;
export const UserName = styled.p`
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  padding-top: 10px;
  padding-bottom: 8px;
`;
export const CountStats = styled.p`
  font-weight: 500;
  font-size: 20px;
  text-align: center;
`;
export const UserDescr = styled.div`
  padding-bottom: 20px;
`;

export const UserDescrItem = styled.p`
  text-align: center;
`;
export const Label = styled.p`
  text-align: center;
`;

export const UserTag = styled.p`
  text-align: center;
  margin-bottom: 10px;
`;
