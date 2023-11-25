import User from '../istr/user.json';
import { Statistics } from './Statistics';

import { Profile } from './profile';
import data from '../istr/data.json';

import friendsData from '../istr/friends.json';

import { FriendList } from './FriendList';

export const App = () => {
  return (
    <div>
      <Profile
        username={User.username}
        tag={User.tag}
        location={User.location}
        avatar={User.avatar}
        stats={User.stats}
      />
      <Statistics data={data} />
      <FriendList friends={friendsData} />
    </div>
  );
};
