import { useState, useContext } from "react";
import Clock from "./components/Clock";
import "./App.css";
import ActivityFinder from "./components/ActivityFinder";
import VideoPlayer from "./components/VideoPlayer";
import ReducerCounter from "./components/ReducerCounter";
import PostListReducer from "./components/PostListReducer";
import SubscribeForm from "./components/SubscribeForm";
import { useUserContext } from "./context/userContext";
import { MyThemeContext } from "./context/themeContext";

function App() {
  const [showClock, setShowClock] = useState(false);
  const { currentUser, handleUpdateUser } = useUserContext();
  const { theme, switchTheme } = useContext(MyThemeContext);
  const toggleClock = () => {
    setShowClock(!showClock);
  };

  const setUser = () => {
    switchTheme();
    handleUpdateUser({ firstName: "Kingsley" });
  };
  return (
    <div
      className="ClockDisplay componentBox"
      style={{ background: theme.background, color: theme.foreground }}
    >
      {/* {currentUser.firstName} */}
      {showClock && <Clock />}
      <button onClick={toggleClock}>Toggle Clock</button>
      <ActivityFinder />
      {/* <VideoPlayer></VideoPlayer> */}
      {/* <ReducerCounter></ReducerCounter> */}
      {/* <PostListReducer/> */}
      {/* <SubscribeForm></SubscribeForm> */}
      {/* <button onClick={setUser}>Login</button> */}
    </div>
  );
}

export default App;
