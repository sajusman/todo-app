import { Card, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../utils/constants";

const HomePage = () => {
  const navigateTo = useNavigate();
  return (
    <Flex
      gap="60px"
      h="100%"
      w="100%"
      justifyContent="center"
      alignItems="center"
    >
      {routes.map(({ displayText, route }) => (
        <Card
          key={route}
          textAlign="center"
          p="20px"
          onClick={() => navigateTo(route)}
          cursor="pointer"
          _hover={{ background: "blackAlpha.400", color: "white" }}
          boxShadow="2xl"
        >
          <Text fontSize="3xl">{displayText}</Text>
        </Card>
      ))}
    </Flex>
  );
};

export default HomePage;
