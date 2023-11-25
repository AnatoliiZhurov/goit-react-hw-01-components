import styled from 'styled-components';

export const Table = styled.table`
  width: 400px;
  border-radius: 5px;
  margin-right: auto;
  margin-left: auto;
  border-collapse: collapse;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  border: 1px solid #ebebec;
`;
export const TableHead = styled.thead`
  background-color: teal;
  border: 1px solid #ebebec;
`;

export const HeadRow = styled.tr`
  height: 50px;
  font-size: 18px;
  color: white;
  /* border: 1px solid #ebebec; */
`;
export const TableHeader = styled.th`
  border: 1px solid #ebebec;
`;

export const BodyRow = styled.tr`
  height: 40px;
  &:nth-child(2n) {
    background-color: #f8f3f3;
  }
`;

export const BodyCol = styled.td`
  padding-left: 10%;
  border: 1px solid #004976;
`;
