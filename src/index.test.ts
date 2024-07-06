import {nanoid} from "nanoid";
import {expect, test} from "bun:test";
import {TestDomainRegistry} from "./domain/DomainRegistry.ts";
import {UserImpl} from "./domain/model/User.ts";

/**
 * Can run firebase unit tests with the emulator: https://firebase.google.com/docs/rules/unit-tests
 */
test("basic tests", () => {
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
  // verify the workout was saved
  expect(workoutRepository.getWorkoutByIdSync(workout.getId())?.getId())
    .toBe(workout.getId())


  // Add a set
  const set = workout.addSet({
    id: nanoid(),
    date: new Date(),
    name: 'My first set'
  })

  workoutRepository.saveWorkoutSync(workout)
  // verify the set was saved
  expect(workoutRepository.getWorkoutByIdSync(workout.getId())?.getSets().length)
    .toBe(1)


  // Add an exercise
  const exercise = set.addExercise({
    id: nanoid(),
    date: new Date(),
    name: 'Exercise 1',
    exerciseName: 'Bench Press'
  })

  workoutRepository.saveWorkoutSync(workout)
  // verify the exercise was saved
  expect(workoutRepository.getWorkoutByIdSync(workout.getId())?.getSets()[0]?.getExercises()?.length)
    .toBe(1)

})
