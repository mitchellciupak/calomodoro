import { useState, useEffect } from "react";

import { Box, Button, Card, NumberInput } from "@mantine/core";

export default function TimerComponent(props) {
  const [value, setValue] = useState(25);
  const [startTimer, setStartTimer] = useState(false);
  useEffect(() => {
    if (value > 0 && startTimer) {
      setTimeout(() => {
        setValue(value - 1);
      }, 1000);
    }
    if (value === 0 && startTimer) {
      setStartTimer(false);
    }
  }, [value, startTimer]);

  const timerButtonHandler = () => {
    setStartTimer(true);
  };
  return (
    <>
      <Box sx={{ width: 100 }} mx="auto">
        <Card>
          <NumberInput
            hideControls
            value={value}
            onChange={(val) => setValue(val)}
            min={0}
          />
          <Button onClick={timerButtonHandler}>Click</Button>
        </Card>
      </Box>
    </>
  );
}
