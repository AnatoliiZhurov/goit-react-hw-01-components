import {
  UserCard,
  UserStats,
  UserState,
  UserName,
  CountStats,
  UserDescr,
  UserDescrItem,
  Label,
  UserTag,
  UserImg,
} from './Profile.styled';
import { GlobalSlyled } from './GlobalStyle';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div>
      <UserCard>
        <div className="profile">
          <UserDescr>
            <UserImg src={avatar} alt="User avatar" className="avatar" />
            <UserName>{username}</UserName>
            <UserTag>{tag}</UserTag>
            <UserDescrItem>{location}</UserDescrItem>
          </UserDescr>
          <UserStats>
            <UserState>
              <Label>Followers</Label>
              <CountStats>{followers}</CountStats>
            </UserState>
            <UserState>
              <Label>Views</Label>
              <CountStats>{views}</CountStats>
            </UserState>
            <UserState>
              <Label>Likes</Label>
              <CountStats>{likes}</CountStats>
            </UserState>
          </UserStats>
        </div>
      </UserCard>
      <GlobalSlyled />
    </div>
  );
};
