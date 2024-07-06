// Example usage:
import {nanoid} from "nanoid";
import {TestDomainRegistry} from "./src/domain/DomainRegistry.ts";
import {UserImpl} from "./src/domain/model/User.ts";
import {dummyMigrationScript, runMigrationIterable} from "./src/services/migration/migrate-data.ts";

const registry = new TestDomainRegistry()

const userRepository = registry.getUserRepository()
const workoutRepository = registry.getWorkoutRepository()

// create and save a dummy user
const user = new UserImpl(nanoid(), 'John Doe')
userRepository.saveUserSync(user)


// Create a workout
const workout = user.provisionWorkout({
  id: nanoid(),
  date: new Date(),
})

workoutRepository.saveWorkoutSync(workout)
// check that the workout was saved
console.log(workoutRepository.getWorkoutByIdSync(workout.getId())?.getId())


// Add a set
const set = workout.addSet({
  id: nanoid(),
  date: new Date(),
  name: 'My first set'
})

workoutRepository.saveWorkoutSync(workout)
// print the newly created workout set
console.log(workoutRepository.getWorkoutByIdSync(workout.getId())?.getSets())


// Add an exercise
const exercise = set.addExercise({
  id: nanoid(),
  date: new Date(),
  name: 'Exercise 1',
  exerciseName: 'Bench Press'
})

workoutRepository.saveWorkoutSync(workout)
// print the newly created exercise
console.log(workoutRepository.getWorkoutByIdSync(workout.getId())?.getSets()[0]!!.getExercises())



runMigrationIterable([workout, workout], dummyMigrationScript)

