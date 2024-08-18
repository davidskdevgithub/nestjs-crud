import { ITask, ETaskStatus } from '../types/task.type';
import { randomUUID } from 'crypto';

export const TASKS_MOCK: ITask[] = [
  {
    id: randomUUID(),
    title: 'Completar informe trimestral',
    description:
      'Recopilar datos de ventas y preparar el informe para la reunión de directorio',
    status: ETaskStatus.InProgress,
    dueDate: new Date('2024-09-30T23:59:59Z'),
    createdAt: new Date('2024-08-01T09:00:00Z'),
    updatedAt: new Date('2024-08-15T14:30:00Z'),
  },
  {
    id: randomUUID(),
    title: 'Actualizar sitio web',
    description:
      'Incorporar nuevas características y mejorar el diseño responsive',
    status: ETaskStatus.Pending,
    createdAt: new Date('2024-08-05T11:00:00Z'),
    updatedAt: new Date('2024-08-05T11:00:00Z'),
  },
  {
    id: randomUUID(),
    title: 'Reunión con el equipo de desarrollo',
    status: ETaskStatus.Completed,
    createdAt: new Date('2024-08-10T08:00:00Z'),
    updatedAt: new Date('2024-08-10T09:30:00Z'),
  },
];
