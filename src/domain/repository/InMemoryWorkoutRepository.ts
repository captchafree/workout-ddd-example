import type {Workout} from "../model/Workout.ts";
import type {WorkoutRepository} from "./WorkoutRepository.ts";

export class InMemoryWorkoutRepository implements WorkoutRepository {

  private database: Map<string, Workout>;

  constructor() {
    this.database = new Map();
  }

  async getWorkoutById(id: string): Promise<Workout | null> {
    return this.database.get(id) || null;
  }

  getWorkoutByIdSync(id: string): Workout | null {
    return this.database.get(id) || null;
  }

  async saveWorkout(workout: Workout): Promise<void> {
    this.database.set(workout.getId(), workout);
  }

  saveWorkoutSync(workout: Workout): void {
    this.database.set(workout.getId(), workout);
  }
}
