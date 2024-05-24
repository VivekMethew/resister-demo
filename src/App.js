import { useEffect, useState } from "react";
import PlayerLogin from "./pages/PlayerLogin";
import PlayingArea from "./pages/PlayingArea";
import RegisterLib from "./RegisterLib";

function App() {
  // const [userInfo, setUserInfo] = useState(null);

  // useEffect(() => {
  //   const userInfoData = JSON.parse(localStorage.getItem("playerInfo"));
  //   if (userInfoData !== null) {
  //     setUserInfo(userInfoData);
  //   }
  // }, []);
  return (
    <div>
      <RegisterLib />
    </div>
  );
}

export default App;
