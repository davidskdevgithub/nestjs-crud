import { Injectable } from '@nestjs/common';

import { ITask } from '../types/task.type';
import { TASKS_MOCK } from '../mocks/task.mock';

@Injectable()
export class TaskService {
  private tasks: ITask[] = [...TASKS_MOCK];

  getAll(): ITask[] {
    return this.tasks;
  }
}
