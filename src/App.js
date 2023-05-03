import "./App.css";
import EmployeeCard from "./cards/EmployeeCard";
import employeeData from "./cards/employeeData.json";

function App() {
  return (
    <div className="flex flex-wrap">
      {employeeData.map((employee, index) => (
        <EmployeeCard key={index} employee={employee} />
      ))}
    </div>
  );
}

export default App;
