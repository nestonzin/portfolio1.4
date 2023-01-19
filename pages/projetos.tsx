import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { DefaultLayout } from "../Components/Layout/default";
import { projects } from "../data/projects";
import Head from "next/head";

export default function Projetos() {
  return (
    <>
      <Head>
        <title>Projetos</title>
        <meta
          name="Projetos"
          content="Projetos que eu desenvolvi enquanto estudo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <DefaultLayout>
        <Flex
          flexDirection="column"
          h="100vh"
          alignItems="center"
          gap="5rem"
          justifyContent="space-around"
        >
          {projects.map((project, index) => {
            return (
              <Flex key={`${project}-${index}`} flexDirection="column" w="100%">
                <Flex flexDirection="column">
                  <Text fontWeight="bold" fontSize="25px">
                    {project.title}
                  </Text>
                  <Text fontSize="13px">{project.description}</Text>
                  <Flex gap="1rem">
                    <Link href={project.url} isExternal fontWeight="semibold">
                      Veja o projeto
                    </Link>

                    <Link
                      href={project.github}
                      isExternal
                      fontWeight="semibold"
                    >
                      Veja o repositório
                    </Link>
                  </Flex>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </DefaultLayout>
    </>
  );
}
