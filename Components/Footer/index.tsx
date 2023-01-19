import { Flex, Link, ListItem, UnorderedList } from "@chakra-ui/react";

export const Footer = () => {
  const socialLinks = [
    {
      socialNetwork: "Linkedin",
      path: "https://www.linkedin.com/in/nestormacedojs",
    },
    {
      socialNetwork: "Twitter",
      path: "https://twitter.com/nestonzz",
    },
    {
      socialNetwork: "Github",
      path: "https://github.com/nestonzin",
    },
  ];
  return (
    <footer>
      <Flex justifyContent="space-around" p="1rem">
        <UnorderedList
          display="flex"
          w="100%"
          justifyContent="space-around"
          listStyleType="none"
        >
          {socialLinks.map((socialLink, index) => {
            return (
              <ListItem key={`${socialLink}-${index}`}>
                <Link href={socialLink.path} isExternal>
                  {socialLink.socialNetwork}
                </Link>
              </ListItem>
            );
          })}
        </UnorderedList>
      </Flex>
    </footer>
  );
};
