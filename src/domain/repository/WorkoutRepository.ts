import type {Workout} from "../model/Workout.ts";

export interface WorkoutRepository {

  getWorkoutById(id: string): Promise<Workout | null>;
  getWorkoutByIdSync(id: string): Workout | null;

  saveWorkout(workout: Workout): Promise<void>;
  saveWorkoutSync(workout: Workout): void;
}
