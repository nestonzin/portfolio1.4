import { Flex } from "@chakra-ui/react";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Flex
      flexDirection="column"
      w="100%"
      h="100vh"
      justifyContent="space-between"
    >
      <Navbar />
      <Flex
        flexDirection="column"
        textAlign="left"
        p={["2rem", "2rem", "2rem", "2rem"]}
      >
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};
