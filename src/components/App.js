import User from '../istr/user.json';
import { Statistics } from './Statistics';

import { Profile } from './profile';
import data from '../istr/data.json';

import friendsData from '../istr/friends.json';

import { FriendList } from './FriendList';

import transactionsData from '../istr/transactions.json';
import {
  HeadRow,
  Table,
  BodyCol,
  TableHead,
  TableHeader,
  BodyRow,
} from './Transactions.styled';
export const Transactions = ({ transactions }) => {
  return (
    <Table>
      <TableHead>
        <HeadRow>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </HeadRow>
      </TableHead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <Operation
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </Table>
  );
};

const Operation = ({ id, type, amount, currency }) => {
  return (
    <BodyRow key={id}>
      <BodyCol>{type}</BodyCol>
      <BodyCol>{amount}</BodyCol>
      <BodyCol>{currency}</BodyCol>
    </BodyRow>
  );
};

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
      <Transactions transactions={transactionsData} />
    </div>
  );
};
