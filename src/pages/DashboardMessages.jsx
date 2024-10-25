import { useUserContext } from "../context/userContext";

export default function DashboardMessages(props) {
  const { currentUser } = useUserContext();
  return (
    <div className="DashboardMessages">
      <p>Welcome to your dashboard, {currentUser.email}</p>
    </div>
  );
}
