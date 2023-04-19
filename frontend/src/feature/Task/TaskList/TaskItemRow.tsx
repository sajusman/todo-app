import { Button, Td, Tr, Input } from "@chakra-ui/react";
import { format } from "date-fns";
import { useState } from "react";
import { AiFillDelete, AiFillEdit, AiFillSave } from "react-icons/ai";
import { ITask } from "../../../types/task";
import { BACKEND_API } from "../../../utils/constants";

interface ITaskItemRow {
  task: ITask;
  index: number;
}

const TaskItemRow = ({ index, task }: ITaskItemRow) => {
  const { createdAt, description, id, name } = task;
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState({ name: "", description: "" });

  const handleDelete = async (id: number) => {
    await fetch(`${BACKEND_API}/tasks/${id}`, { method: "DELETE" });
  };
  const handleUpdate = async () => {
    try {
      await fetch(`${BACKEND_API}/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (e) {
    } finally {
      setEdit(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Tr>
      <Td>{index + 1}</Td>
      <Td>{!edit ? name : <Input name="name" onChange={handleChange} />}</Td>
      <Td>
        {!edit ? (
          description
        ) : (
          <Input name="description" onChange={handleChange} />
        )}
      </Td>
      <Td>{format(new Date(createdAt), "MM/dd/yy")}</Td>
      <Td>
        {edit ? (
          <Button
            variant="ghost"
            leftIcon={<AiFillSave />}
            onClick={handleUpdate}
          />
        ) : (
          <Button
            variant="ghost"
            leftIcon={<AiFillEdit />}
            onClick={() => setEdit(true)}
          />
        )}

        <Button
          variant="ghost"
          leftIcon={<AiFillDelete />}
          onClick={() => handleDelete(id)}
        />
      </Td>
    </Tr>
  );
};
export default TaskItemRow;
