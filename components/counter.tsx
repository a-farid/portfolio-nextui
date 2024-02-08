"use client";

import { useState } from "react";
import { Button } from "@nextui-org/button";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button
        radius="full"
        className="mx-2"
        onPress={() => setCount(count + 1)}
      >
        Add
      </Button>
      Count is {count}
      <Button
        radius="full"
        className="mx-2"
        onPress={() => setCount(count - 1)}
      >
        Minus
      </Button>
    </>
  );
};
