import { Box, Button, Flex } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <Flex direction="column">
      <Button
        leftIcon={<AiFillHome />}
        onClick={() => window.location.assign("/")}
        size="lg"
      >
        Home
      </Button>
      <Flex
        h="100%"
        w="100%"
        justifyContent="center"
        alignItems="center"
        mt="60px"
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
