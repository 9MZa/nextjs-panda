import { css } from "../../styled-system/css";
import { Container, Center } from "../../styled-system/jsx";

export default function Home() {
  return (
    <div
      className={css({
        bgColor: "yellow.50",
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
                cursor: "not-allowed",
              },
            })}
          >
            Hello 🐼!
          </button>
        </Center>
      </Container>
    </div>
  );
}
