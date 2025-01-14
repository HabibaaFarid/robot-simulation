import { Position } from "../types";

type RobotProps = {
  robot: Position;
};

function RobotIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 32 32"
      width="32"
      height="32"
      id="robot"
    >
      <path d="M27 18a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v11a2.998 2.998 0 0 0 3 3h16c.796 0 1.56-.317 2.12-.88.563-.561.88-1.325.88-2.12V18ZM27 3c0-.796-.316-1.559-.879-2.121A2.996 2.996 0 0 0 24 0H8c-.796 0-1.559.316-2.121.879A2.996 2.996 0 0 0 5 3v9c0 .796.316 1.559.879 2.121A2.996 2.996 0 0 0 8 15h16c.796 0 1.559-.316 2.121-.879A2.996 2.996 0 0 0 27 12V3zM12 4a3.001 3.001 0 0 0 0 6 3.001 3.001 0 0 0 0-6zm8 0a3.001 3.001 0 0 0 0 6 3.001 3.001 0 0 0 0-6zm8.829 13H29c.796 0 1.559.316 2.121.879.563.562.879 1.325.879 2.121v6c0 .796-.316 1.559-.879 2.121A2.996 2.996 0 0 1 29 29V18c0-.351-.06-.687-.171-1zM3.171 17H3c-.796 0-1.559.316-2.121.879A2.996 2.996 0 0 0 0 20v6c0 .796.316 1.559.879 2.121A2.996 2.996 0 0 0 3 29V18c0-.351.06-.687.171-1Z"></path>
    </svg>
  );
}

function Robot({ robot }: RobotProps) {
  const getRotationDegrees = (direction: string) => {
    switch (direction) {
      case "N":
        return 0;
      case "E":
        return 90;
      case "S":
        return 180;
      case "W":
        return 270;
      default:
        return 0;
    }
  };
  return (
    <div
      className={`grid justify-center items-center w-full h-full bg-stone-400`}
    >
      <div
        style={{
          transform: `rotate(${getRotationDegrees(robot.direction)}deg)`,
          transition: `transform 0.5s ease-in-out`,
        }}
      >
        <RobotIcon />
      </div>
    </div>
  );
}

export default Robot;
