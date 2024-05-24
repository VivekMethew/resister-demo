import React from "react";
import { SocketProvider } from "../context/SocketContext";
import EventData from "./EventData";

const Home = () => {
  return (
    <SocketProvider>
      <div>
        <EventData />
      </div>
    </SocketProvider>
  );
};

export default Home;
