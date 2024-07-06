import type {Workout} from "../../domain/model/Workout.ts";

/**
 * Transform document data.
 *
 * For example, "I want to add a new field to each workout document in firebase."
 */

export type MigrationFunction<T> = (data: T) => void;

export function runMigrationIterable<T>(iterable: Iterable<T>, migrationFunc: MigrationFunction<T>): void {
  runMigration(iterable[Symbol.iterator](), migrationFunc);
}

export function runMigration<T>(iterator: Iterator<T>, migrationFunc: MigrationFunction<T>): void {
  let curr = iterator.next();
  while (!curr.done) {
    migrationFunc(curr.value)
    curr = iterator.next();
  }
}


export const dummyMigrationScript: MigrationFunction<Workout> = (workout => {
  console.log(`Migrating workout: ${workout.getId()}...`)
});

const addNewWorkoutFieldScript: MigrationFunction<Workout> = (workout => {
  // firebase.setNewField(workout.getNewField())
});

