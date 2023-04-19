import {
  Card,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Flex,
  Box,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { BACKEND_API } from "../../../utils/constants";

const CreateTask = () => {
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [isSaving, setIsSaving] = useState(false);
  const toast = useToast();

  const handleSubmit = async () => {
    setIsSaving(true);
    try {
      await fetch(`${BACKEND_API}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      toast({
        title: "Task creation.",
        description: "Task has been created successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (e) {
      toast({
        title: "Task creation.",
        description:
          "Oh oh! something went wrong, we were unable to create your task. Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Card p="40px" w="500px" boxShadow="2xl">
      <Heading>Create a task</Heading>
      <FormControl mt="20px">
        <Flex gap="20px" direction="column">
          <Box>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              type="text"
              placeholder="Give your task a meaningful name"
              onChange={handleChange}
            />
          </Box>
          <Box>
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              placeholder="Add details to your task"
              onChange={handleChange}
            />
          </Box>
          <Button
            mt={4}
            colorScheme="teal"
            type="submit"
            onClick={handleSubmit}
            isLoading={isSaving}
          >
            Submit
          </Button>
        </Flex>
      </FormControl>
    </Card>
  );
};

export default CreateTask;
