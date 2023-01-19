import { Text } from "@chakra-ui/react";
import Head from "next/head";
import { DefaultLayout } from "../Components/Layout/default";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre mim</title>
        <meta name="Sobre mim" content="Sobre mim" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <DefaultLayout>
        <Text fontWeight="black" fontSize="25px" as="h1">
          Sobre mim.
        </Text>
        <Text>
          Meu nome é Nestor, também sou conhecido como Neston e tenho 27 anos.
        </Text>
        <Text as="p">
          Sou estudante de Analise e Desenvolvimento de Sistemas na Descomplica.
          Tenho interesse em programação Front-end com foco em JavaScript,
          Typescript, React. Sou apaixonado por tecnologia, jogos competitivos e
          MMO. Tenho expericencia com essas tecnologias: HTML5, CSS3,
          JavaScript, Typescript, ChackraUI, NextJS, ReactJS e Versel.
        </Text>
        <Text fontWeight="black" fontSize="25px" paddingBlock="1rem" as="h2">
          Idiomas
        </Text>
        <Text>Ingles</Text>
        <Text>espanhol</Text>
        <Text fontWeight="black" fontSize="25px" paddingBlock="1rem" as="h3">
          Outras habilidades
        </Text>
        <Text>Photoshop</Text>
        <Text>Ilustrator</Text>
        <Text>Figma</Text>
        <Text>Premiere</Text>
      </DefaultLayout>
    </>
  );
}
