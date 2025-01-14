import { rotateLeft, rotateRight } from "./utils";

describe("robot tests", () => {
  let handleRotateRight: jest.Mock;
  let handleRotateLeft: jest.Mock;
  let handleMoveForward: jest.Mock;
  let parseCommand: (input: string) => Promise<void>;

  beforeEach(() => {
    handleRotateRight = jest.fn();
    handleRotateLeft = jest.fn();
    handleMoveForward = jest.fn();

    parseCommand = async (input: string) => {
      for (const char of input) {
        switch (char) {
          case "R":
            handleRotateRight();
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
  });

  test("parseCommand and calls functions correctly", async () => {
    const input = "FFLFRRF";

    await parseCommand(input);

    expect(handleRotateRight).toHaveBeenCalledTimes(2);
    expect(handleRotateLeft).toHaveBeenCalledTimes(1);
    expect(handleMoveForward).toHaveBeenCalledTimes(4);
  });

  test("rotateRobot rotates correctly", () => {
    expect(rotateRight("N")).toEqual("E");
    expect(rotateLeft("E")).toEqual("N");
  });
});

//i want to test the grid boundary check by entering command 'FFFFFF'
//and make sure that the state holds value {x:4,y0,direction:'E'}
