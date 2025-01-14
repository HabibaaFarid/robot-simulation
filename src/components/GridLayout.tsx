import Robot from "./Robot";
import { Position } from "../types";

type RobotProps = {
  robot: Position;
};

function GridLayout({ robot }: RobotProps) {

  const renderGrid = () => {
    let grids: JSX.Element[] = [];
    for (let r = 4; r >= 0; r--) {
      for (let c = 0; c < 5; c++) {
        grids.push(
          <div
            key={`${r}-${c}`}
            className="col-span-1 bg-zinc-300 h-[100px] w-[100px] border-2 transition-all duration-1000 ease-in-out"
          >
            {robot.x === c && robot.y === r && <Robot robot={robot} />}
          </div>
        );
      }
    }
    return grids;
  };

  return (
    <div className="grid w-[500px] justify-self-center items-center justify-center grid-cols-5 gap-y-2 gap-0">
      {renderGrid()}
    </div>
  );
}

export default GridLayout;
