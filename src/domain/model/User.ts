import {type Workout, WorkoutImpl} from "./Workout.ts";

export interface User {
  getId(): string;
  getName(): string
  provisionWorkout(data: NewWorkoutCommand): Workout;
}

export type NewWorkoutCommand = {
  id: string;
  date: Date;
};

export class UserImpl implements User {

  private readonly id: string;
  private readonly name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  provisionWorkout(data: NewWorkoutCommand): Workout {
    return new WorkoutImpl(this.id, data.id, data.date);
  }
}