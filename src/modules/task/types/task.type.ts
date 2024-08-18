/*
  id: Identificador único de la tarea (UUID).
  title: Título de la tarea (string, obligatorio).
  description: Descripción detallada de la tarea (string, opcional).
  status: Estado de la tarea (enum: "pending", "in progress", "completed"; por defecto "pending").
  dueDate: Fecha límite de la tarea (ISO 8601 date, opcional).
  createdAt: Fecha de creación de la tarea (ISO 8601 date).
  updatedAt: Fecha de la última actualización de la tarea (ISO 8601 date).
*/

export enum ETaskStatus {
  Pending = 'pending',
  InProgress = 'in progress',
  Completed = 'completed',
}

type ISO8601Date = string | Date;

export interface ITask {
  id: string;
  title: string;
  description?: string;
  status: ETaskStatus; // default: ETaskStatus.Pending
  dueDate?: ISO8601Date;
  createdAt: ISO8601Date;
  updatedAt: ISO8601Date;
}
