import React from "react";
import ActivityCalendar from "react-activity-calendar";
const ProfileLayout: React.FC = () => {
  const data = [
    {
      date: "2024-01-01",
      count: 10,
      level: 3,
    },
    {
      date: "2024-01-02",
      count: 20,
      level: 2,
    },
  ];
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div>
        <p>Dhruv Kaushik</p>
        <p>@dhuvkaushik</p>
        <p>Member since 2024</p>
      </div>
      <ActivityCalendar data={data} />
    </div>
  );
};
export default React.memo(ProfileLayout);
