import {
  FriendListed,
  FriendItem,
  FriendStatus,
  FriendText,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListed>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Friend
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            id={id}
          />
        );
      })}
    </FriendListed>
  );
};

const Friend = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendItem key={id}>
      <FriendStatus status={isOnline}></FriendStatus>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendText>{name}</FriendText>
    </FriendItem>
  );
};
