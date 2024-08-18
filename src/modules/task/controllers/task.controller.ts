import { Controller, Get } from '@nestjs/common';

import { TaskService } from '../services/task.service';
import { ITask } from '../types/task.type';

@Controller('tasks')
export class TaskController {
  constructor(private service: TaskService) {}

  @Get()
  getAllTask(): ITask[] {
    return this.service.getAll();
  }
}
