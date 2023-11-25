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
