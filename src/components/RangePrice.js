import { Range } from "react-range";
import { useState } from "react";

const RangePrice = () => {
  const [value, setValue] = useState([50]);
  return (
    <>
      <Range
        step={1}
        min={0}
        max={100}
        values={value}
        onChange={(values) => setValue(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "3px",
              width: "40%",
              backgroundColor: "blue",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              backgroundColor: "#999",
            }}
          />
        )}
      />
      <output style={{ marginTop: "30px" }} id="output">
        {value[0]}
      </output>
    </>
  );
};

export default RangePrice;
