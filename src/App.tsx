import { useState } from "react";
import GridLayout from "./components/GridLayout";
import { Position } from "./types";
import { rotateRight, rotateLeft, moveForward } from "./utils";

function App() {
  const [command, setCommand] = useState<string>("");
  const [robot, setRobot] = useState<Position>({ x: 0, y: 0, direction: "E" });

  const handleClear = () => {
    setCommand("");
  };

  const handleRoatetRight = () => {
    setRobot((prevRobot) => ({
      ...prevRobot,
      direction: rotateRight(prevRobot.direction),
    }));
  };

  const handleRotateLeft = () => {
    setRobot((prevRobot) => ({
      ...prevRobot,
      direction: rotateLeft(prevRobot.direction),
    }));
  };

  const handleMoveForward = () => {
    setRobot((prevRobot) => {
      const { x, y, direction } = prevRobot;
      return moveForward(x, y, direction);
    });
  };

  const parseCommand = async (input: string) => {
    for (const char of input) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      switch (char) {
        case "R":
          handleRoatetRight();
          break;
        case "L":
          handleRotateLeft();
          break;
        case "F":
          handleMoveForward();
          break;
        default:
          console.log(`${char} is not a valid command`);
      }
    }
  };

  return (
    <div className="grid justify-items-center p-4 gap-y-4">
      <input
        type="text"
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
      <button
        onClick={handleClear}
        className="h-20 w-40 border-2 border-black rounded-xl"
      >
        Clear
      </button>
      <GridLayout robot={robot} />
    </div>
  );
}

export default App;
