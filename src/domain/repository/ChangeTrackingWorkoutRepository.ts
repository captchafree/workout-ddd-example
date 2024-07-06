import type {WorkoutRepository} from "./WorkoutRepository.ts";
import type {AddSetCommand, Workout} from "../model/Workout.ts";
import {type Set, SetImpl} from "../model/Set.ts";

// Includes a new Workout impl and a new WorkoutRepository impl that work
// together to efficiently update workouts

interface WorkoutChanges {
  date?: Date;
  sets?: SetChanges[];
}

interface SetChanges {
  id: string;
  name?: string;
  date?: Date;
  exercises?: ExerciseChanges[];
}

interface ExerciseChanges {
  id: string;
  name?: string;
  exerciseName?: string;
  date?: Date;
}

class ChangeTrackingWorkout implements Workout {

  private readonly id: string;
  private readonly userId: string;
  private date: Date;
  private sets: Set[];
  private changes: WorkoutChanges;

  constructor(userId: string, id: string, date: Date) {
    this.id = id;
    this.userId = userId;
    this.date = date;
    this.sets = [];
    this.changes = {
      date: this.date,
      sets: []
    };
  }

  getId(): string {
    return this.id;
  }

  getUserId(): string {
    return this.userId;
  }

  getDate(): Date {
    return this.date;
  }

  getSets(): Set[] {
    return this.sets;
  }

  setDate(date: Date): void {
    this.date = date;
    this.recordChange({ date });
  }

  addSet(data: AddSetCommand): Set {
    const newSet = new SetImpl(data.id, this.id, data.name, data.date);
    this.sets.push(newSet);
    this.recordChange({ sets: [{ id: newSet.getId() }] });
    return newSet;
  }

  getChanges(): WorkoutChanges {
    return this.changes;
  }

  private recordChange(change: Partial<WorkoutChanges>): void {
    this.changes = { ...this.changes, ...change };
  }
}

/**
 * Returns "ChangeTrackingWorkout" instances and then knows how to read the changes made.
 * Uses firebase, in memory, etc.
 */
export class ChangeTrackingWorkoutRepository implements WorkoutRepository {
  getWorkoutById(id: string): Promise<ChangeTrackingWorkout | null> {
    return Promise.resolve(null);
  }

  getWorkoutByIdSync(id: string): ChangeTrackingWorkout | null {
    return null;
  }

  saveWorkout(workout: Workout): Promise<void> {
    return Promise.resolve(undefined);
  }

  saveWorkoutSync(workout: Workout): void {
    const changes = (workout as ChangeTrackingWorkout).getChanges()
    console.log("Saving based on changes:")
    console.log(changes)
  }
}