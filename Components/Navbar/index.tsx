import { Flex, Link, Button, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { motion, AnimateSharedLayout } from "framer-motion";

export const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const pages = ["sobre", "projetos"];

  return (
    <AnimateSharedLayout>
      <Flex w="100%" justifyContent="space-around" alignItems="center" p="1rem">
        <Link href="/" fontWeight="black">
          Nestor
        </Link>

        {pages.map((page, index) => {
          return (
            <Flex key={`${page}-${index}`}>
              <Link href={page} textTransform="capitalize">
                {page}
              </Link>
            </Flex>
          );
        })}

        <Button onClick={toggleColorMode}>
          {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </AnimateSharedLayout>
  );
};
