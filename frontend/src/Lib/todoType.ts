export interface TodoType {
  _id: string;
  id: string;
  order: number;
  title: string;
  completed: boolean;
  date?: Date;
}
