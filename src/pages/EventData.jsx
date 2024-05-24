// SomeComponent.js
import React, { useEffect } from "react";
import { useSocket } from "../context/SocketContext";

const EventData = () => {
  const socket = useSocket();

  useEffect(() => {
    if (!socket) return;
    socket.emit("p_join", {
      room: "player",
      userId: "664f8414c61db55214a6202f",
      roomCode: 342087,
    });
    socket.on("QuizInfo", (data) => {
      console.log(data);
    });
    return () => {
      socket.off("QuizInfo");
    };
  }, [socket]);

  const sendMessage = () => {
    if (socket) {
      console.log("CLICKED...");
      socket.emit("p_join", {
        room: "player",
        userId: "664f8414c61db55214a6202f",
        roomCode: 342087,
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={sendMessage}
        className="bg-orange-800 text-white px-6 py-1 rounded-md font-bold"
      >
        Join Player
      </button>
    </div>
  );
};

export default EventData;
