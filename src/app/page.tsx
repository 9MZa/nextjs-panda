"use client";

import { css } from "../../styled-system/css";
import { useState } from "react";
import { Container, Center } from "../../styled-system/jsx";

export default function Home() {
  const [toggleColor, setToggleColor] = useState(false);

  return (
    <div
      className={css({
        bg: toggleColor ? "slate.950" : "yellow.50",
        _motionReduce: { transition: "none" },
        _motionSafe: { transition: "all 0.2s" },
      })}
    >
      <Container>
        <Center
          className={css({
            height: "100vh",
          })}
        >
          <button
            className={css({
              bg: { base: "yellow.300", _hover: "yellow.400" },
              fontSize: "4xl",
              fontWeight: "bold",
              px: 10,
              py: 4,
              rounded: "md",
              _motionReduce: { transition: "none" },
              _motionSafe: { transition: "all 0.3s" },
              _hover: {
                animation: "wiggle 200ms linear infinite",
                cursor: "pointer",
              },
            })}
            onClick={() => setToggleColor((prev) => !prev)}
          >
            Hello 🐼!
          </button>
        </Center>
      </Container>
    </div>
  );
}
