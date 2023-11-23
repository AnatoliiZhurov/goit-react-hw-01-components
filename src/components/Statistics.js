import styled from 'styled-components';

export const StatBox = styled.section`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

export const StatData = styled.ul`
  display: flex;
  justify-content: space-between;
`;
export const SetItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 20px;
  flex: 1;
`;
export const StatContent = styled.span`
  color: white;
`;
export const Upload = styled.h2`
  text-align: center;
  color: #303030;
`;

function DataItem({ label, percentage }) {
  function generateRandomColor() {
    const min = 50; // Мінімальне значення кольору
    const max = 200; // Максимальне значення кольору
    const randomComponent = () =>
      Math.floor(Math.random() * (max - min + 1) + min);

    const red = randomComponent();
    const green = randomComponent();
    const blue = randomComponent();

    return `rgb(${red}, ${green}, ${blue})`;
  }

  const backgroundColor = {
    backgroundColor: generateRandomColor(),
  };

  return (
    <SetItem style={backgroundColor}>
      <StatContent>{label}</StatContent>
      <StatContent>{percentage}</StatContent>
    </SetItem>
  );
}
export const Statistics = ({ data }) => {
  return (
    <StatBox>
      <Upload>Upload stats</Upload>

      <StatData>
        {data.map(({ id, label, percentage }) => {
          return <DataItem key={id} label={label} percentage={percentage} />;
        })}
      </StatData>
    </StatBox>
  );
};
