import { useState } from "react";
import GridLayout from "./components/GridLayout";
import { Position } from "./types";

const directions: string[] = ["N", "E", "S", "W"];

function App() {
  const [command, setCommand] = useState<string>("");
  const [robot, setRobot] = useState<Position>({ x: 0, y: 0, direction: "E" });

  const handleClear = () => {
    setCommand("");
  };

  const rotateRight = () => {
    setRobot((prevRobot) => {
      let { direction } = prevRobot;
      direction = directions[(directions.indexOf(direction) + 1) % 4];
      return { ...prevRobot, direction };
    });
  };

  const rotateLeft = () => {
    setRobot((prevRobot) => {
      let { direction } = prevRobot;
      direction = directions[(directions.indexOf(direction) + 3) % 4];
      return { ...prevRobot, direction };
    });
  };

  const moveForward = () => {
    setRobot((prevRobot) => {
      let { x, y, direction } = prevRobot;
      if (direction === "N" && y < 4) {
        y++;
      } else if (direction === "E" && x < 4) {
        x++;
      } else if (direction === "S" && y > 0) {
        y--;
      } else if (direction === "W" && x > 0) {
        x--;
      } else {
        console.log("the robot will fall");
      }
      return { x, y, direction };
    });
  };

  const parseCommand = async (input: string) => {
    for (const char of input) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      switch (char) {
        case "R":
          rotateRight();
          break;
        case "L":
          rotateLeft();
          break;
        case "F":
          moveForward();
          break;
        default:
          console.log(`${char} is not a valid command`);
      }
    }
  };

  return (
    <div className="grid justify-items-center p-4 gap-y-4">
      <input
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        className="h-20 w-[50%] border-2 border-black rounded px-2 text-[20px]"
      />
      <button
        onClick={() => parseCommand(command)}
        className="bg-blue-600 h-20 w-60 text-[18px] font-medium text-white rounded-xl hover:bg-blue-400"
      >
        Start Simulation
      </button>
      <button onClick={handleClear}
      className="h-20 w-40 border-2 border-black rounded-xl"
      >Clear</button>
      <GridLayout robot={robot} />
    </div>
  );
}

export default App;
