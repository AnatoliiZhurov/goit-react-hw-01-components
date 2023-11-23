import User from '../istr/user.json';
import { Statistics } from './Statistics';

import { Profile } from './profile';
import data from '../istr/data.json';

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
    </div>
  );
};
