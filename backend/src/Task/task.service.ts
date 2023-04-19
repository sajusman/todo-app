import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateTaskDto } from './task.dto';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async createTask(name: string, description: string): Promise<Task> {
    const task = new Task();
    task.name = name;
    task.description = description;
    return this.taskRepository.save(task);
  }

  async getTasks(): Promise<Task[]> {
    return await this.taskRepository
      .createQueryBuilder('task')
      .orderBy('task.createdAt', 'DESC')
      .getMany();
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const taskToUpdate = await this.taskRepository.findOne({ where: { id } });
    if (!taskToUpdate) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    this.taskRepository.merge(taskToUpdate, updateTaskDto);
    return this.taskRepository.save(taskToUpdate);
  }

  async delete(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
