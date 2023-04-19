import { Flex, Heading, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  return (
    <Flex justifyContent="center" alignItems="center" direction="column">
      <Heading>Oops! Error</Heading>
      <Text fontSize="2xl">We can not find the page you're looking for</Text>
    </Flex>
  );
};

export default ErrorPage;
