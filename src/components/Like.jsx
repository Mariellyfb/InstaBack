import React, { useState } from "react";

function Like() {
  const [emoji, setEmoji] = useState("🤍");

  const toggleEmoji = () => {
    setEmoji(emoji === "🤍" ? "❤️" : "🤍");
  };

  return (
    <div>
      <h1 onClick={toggleEmoji}>{emoji}</h1>
    </div>
  );
}

export default Like;
