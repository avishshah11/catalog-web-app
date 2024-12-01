import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const TimeLine = () => {
  const [selectedRange, setSelectedRange] = useState("1y");
  const handleClick = (range) => {};
  const getButtonVariant = (range) => {
    return selectedRange === range ? "primary" : "outline-primary";
  };

  return (
    <div
      className="d-flex justify-content-end mb-2"
      style={{ textAlign: "end" }}
    >
      <ButtonGroup>
        <Button
          style={{ background: "#ffff", marginRight: "20px" }}
          variant={getButtonVariant("1d")}
          onClick={() => handleClick("1d")}
        >
          1D
        </Button>
        <Button
          style={{ background: "#ffff", marginRight: "20px" }}
          variant={getButtonVariant("1d")}
          onClick={() => handleClick("3d")}
        >
          3D
        </Button>
        <Button
          style={{ background: "#ffff", marginRight: "20px" }}
          variant={getButtonVariant("1d")}
          onClick={() => handleClick("1w")}
        >
          1W
        </Button>
        <Button
          style={{ background: "#ffff", marginRight: "20px" }}
          variant={getButtonVariant("1d")}
          onClick={() => handleClick("6m")}
        >
          6M
        </Button>
        <Button
          variant={getButtonVariant("1d")}
          onClick={() => handleClick("1y")}
          style={{ background: selectedRange === "1y" ? "#5c6bc0" : "", marginRight: '20px' }}
        >
          1Y
        </Button>
        <Button
          variant={getButtonVariant("max")}
          onClick={() => handleClick("max")}
          style={{ background: "#ffff", marginRight: "40px" }}
        >
          Max
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default TimeLine;
