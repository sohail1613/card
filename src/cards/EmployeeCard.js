import React from "react";
import "./EmployeeCard.css";

const EmployeeCard = ({ employee }) => {
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  let statusColor = "bg-green-500";
  let statusText = "START";

  if (currentTime > employee.timeIn) {
    statusColor = "bg-yellow-500";
    statusText = "CONTINUE";
  }

  if (currentTime > employee.timeOut) {
    statusColor = "bg-red-500";
    statusText = "OVER";
  }

  return (
    <div className="container">
      <div className="cardContainer">
        <div className="card">
          <div className="flex justify-between mb-4">
            <h2 className="font-bold text-lg">{employee.name}</h2>
            <p className="text-gray-500">{currentDate}</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className={`h-4 w-4 rounded-full mr-2 ${statusColor}`}></div>
              <p>{statusText}</p>
            </div>
            <p>
              {employee.timeIn} - {employee.timeOut}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
