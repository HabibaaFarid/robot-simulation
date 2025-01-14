const directions: string[] = ["N", "E", "S", "W"];

export const rotateRight = (direction: string) => {
  return directions[(directions.indexOf(direction) + 1) % 4];
};

export const rotateLeft = (direction: string) => {
  return directions[(directions.indexOf(direction) + 3) % 4];
};

export const moveForward = (x: number, y: number, direction: string) => {
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
};
