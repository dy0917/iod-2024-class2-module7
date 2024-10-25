import { useParams, useSearchParams } from "react-router-dom";

export default function DashboardUsers(props) {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("params", params);
  console.log("searchParams", searchParams.get("key"));
  const tasks = [
    { id: 1, name: "Learn React" },
    { id: 2, name: "Decide on capstone project" },
    { id: 3, name: "Learn databases" },
  ];
  return (
    <div className="DashboardTasks">
      <ul className="tasks">
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}
