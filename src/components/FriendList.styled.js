import styled from 'styled-components';

export const FriendListed = styled.ul`
  width: 400px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: start;
  margin-bottom: 50px;
`;

export const FriendItem = styled.li`
  width: 100%;
  padding-top: 5px;
  padding-left: 20px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 2px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const FriendStatus = styled.span`
  &:before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => (props.$status === 'true' ? 'green' : 'red')};
    margin-right: 5px;
  }
`;

export const FriendText = styled.p`
  font-size: 24px;
`;
