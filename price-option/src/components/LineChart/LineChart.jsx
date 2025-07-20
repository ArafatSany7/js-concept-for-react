import {
  LineChart as LChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";

const LineChart = () => {
  const mathMarks = {
    students: [
      { id: 1, name: "Student 1", marks: 85 },
      { id: 2, name: "Student 2", marks: 78 },
      { id: 3, name: "Student 3", marks: 92 },
      { id: 4, name: "Student 4", marks: 74 },
      { id: 5, name: "Student 5", marks: 88 },
      { id: 6, name: "Student 6", marks: 67 },
      { id: 7, name: "Student 7", marks: 90 },
      { id: 8, name: "Student 8", marks: 76 },
      { id: 9, name: "Student 9", marks: 81 },
      { id: 10, name: "Student 10", marks: 95 },
    ],
  };

  return (
    <div>
      <LChart
        width={1100}
        height={200}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        data={mathMarks.students}
      >
        <XAxis dataKey="name" />
        <YAxis
          width="auto"
          label={{ value: "UV", position: "insideLeft", angle: -90 }}
        />
        <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
        <Legend align="right" />
        <Tooltip />
        <Line
          dataKey="marks"
          type="monotone"
          stroke="purple"
          strokeWidth={2}
        ></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
