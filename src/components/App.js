import User from '../istr/user.json';
import { Statistics } from './Statistics';

import { Profile } from './profile';
import data from '../istr/data.json';

import friendsData from '../istr/friends.json';

import { FriendList } from './FriendList';

import transactionsData from '../istr/transactions.json';
import { Transactions } from './Transactions';
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
      <Statistics title="Upaload stats" data={data} />
      <FriendList friends={friendsData} />
      <Transactions transactions={transactionsData} />
    </div>
  );
};
