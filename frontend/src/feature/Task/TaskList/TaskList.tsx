import { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Flex, Heading } from "@chakra-ui/react";
import { ITask } from "../../../types/task";
import { BACKEND_API, headers } from "../../../utils/constants";
import TaskItemRow from "./TaskItemRow";

const TaskList = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(`${BACKEND_API}/tasks`);
      setTasks(await response.json());
    };
    fetchTasks();
  }, []);

  return (
    <Flex direction="column" gap="20px">
      <Heading textAlign="center">Tasks list</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            {headers.map((header) => (
              <Th>{header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {tasks.map((task, index) => (
            <TaskItemRow task={task} key={task.id} index={index} />
          ))}
        </Tbody>
      </Table>
    </Flex>
  );
};

export default TaskList;
