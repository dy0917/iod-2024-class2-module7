import { useState, useEffect, useRef } from "react";
// Renders a digital time that updates every second
const Clock = () => {
  const [date, setDate] = useState(new Date());
  const dateRef = useRef(0);
  const [name, setName] = useState();
  useEffect(() => {
    // first arg is usually an arrow function
    const interval = setInterval(() => tick(), 1000);
    console.log("Clock component mounted");
    return () => {
      clearInterval(interval);
      console.log("unmounted");
    };
  }, []); // second arg is an array of dependencies
  const tick = () => {
    setDate(new Date());
    // dateRef.current = dateRef.current + 1;
    console.log("tick"); // track the effect frequency
  };

  return (
    <div className="Clock">
      <h3>Digital Clock</h3>
      {date.toLocaleTimeString()}
      {dateRef.current}
      <button
        onClick={() => {
          console.log(dateRef.current);
        }}
      >
        Show Ref
      </button>
    </div>
  );
};

export default Clock;
