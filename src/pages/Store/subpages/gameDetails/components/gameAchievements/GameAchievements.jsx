import React from "react";
import { useAchievements } from "../../../../../../hooks/useAchievements";
import "./gameachievements.css";
const GameAchievements = () => {
  const { data, isLoading, error } = useAchievements({ gameId: 326243 });
  if (isLoading) return <p>Loading</p>;
  return (
    <div className="game-achievements">
      {data.slice(0, 4).map((achievement) => (
        <div className="achievement" key={achievement.id}>
          <img src={achievement.image} alt="" />
        </div>
      ))}
      <div className="achievement-more">
        <span>+{data.length - 4}</span>
      </div>
    </div>
  );
};

export default GameAchievements;
