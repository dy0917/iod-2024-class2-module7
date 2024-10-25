import { useState, useEffect } from "react";
import { useData } from "../utils/useData";
import { useUserContext } from "../context/userContext";
export default function ActivityFinder() {
  // Fetches a random activity
  const [participants, setParticipants] = useState("1");
  // const [activity, setActivity] = useState("");
  const { tempValue } = useUserContext();
  const data = useData("https://dummyjson.com/products/" + participants);

  // get the activity from the json or show error message if failed
  const activity = data ? data.description : "not found";

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products/" + participants)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setActivity(json.description);
  //     });
  // }, [participants]);
  return (
    <div className="ActivityFinder componentBox">
      <h3>{tempValue}</h3>
      <label>
        Choose number of participants:
        <select
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>
      <div>
        <strong>Suggested Activity: </strong>
        {activity}
      </div>
    </div>
  );
}
