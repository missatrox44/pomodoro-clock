export type task = {
  name: string;
  estimated: number;
  completed: boolean;
  id: string;
  modalHandler: Function;
  roundsCompleted: number;
  completedHandler: Function;
  actual: number;
};
