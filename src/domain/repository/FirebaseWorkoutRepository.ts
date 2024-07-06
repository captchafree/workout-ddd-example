import type {WorkoutRepository} from "./WorkoutRepository.ts";
import type {Workout} from "../model/Workout.ts";

/**
 * Implement the simplest strategy: Overwriting all existing data on each save.
 */
class FirebaseWorkoutRepository implements WorkoutRepository {

  getWorkoutById(id: string): Promise<Workout | null> {
    return Promise.resolve(null);
  }

  getWorkoutByIdSync(id: string): Workout | null {
    return null;
  }

  saveWorkout(workout: Workout): Promise<void> {
    return Promise.resolve(undefined);
  }

  saveWorkoutSync(workout: Workout): void {
  }
}
