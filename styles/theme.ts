import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    background: "#0E0E10",
  },
  styles: {
    global: {
      "::-webkit-scrollbar": {
        width: "4px",
        height: "4px",
      },
      "::-webkit-scrollbar-track": {
        background: "gray.300",
        width: "1rem",
      },
      "::-webkit-scrollbar-thumb": {
        width: "55px",
        background: "gray.800",
        borderRadius: "0.5rem",
      },
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});
