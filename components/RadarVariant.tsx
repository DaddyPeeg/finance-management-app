import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

type Props = {
  data?: {
    name: string;
    value: number;
  }[];
};

import React from "react";

const RadarVariant = ({ data }: Props) => {
  console.log(data);
  return (
    <ResponsiveContainer width="100%" height={350}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis style={{ fontSize: "12px" }} dataKey="name" />
        <PolarRadiusAxis style={{ fontSize: "12px" }} />
        <Radar name="radar" dataKey="value" stroke="#3b8" fill="#3b82f6" />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarVariant;
