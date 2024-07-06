import type {UserRepository} from "../domain/repository/UserRepository.ts";
import type {WorkoutRepository} from "../domain/repository/WorkoutRepository.ts";
import type {Exercise} from "../domain/model/Exercise.ts";
import type {Set} from "../domain/model/Set.ts";

/**
 * Define the functionality needed for the app's "perform a workout" flow
 */
class PerformWorkoutMediator {

  private userRepository: UserRepository;
  private workoutRepository: WorkoutRepository;

  constructor(
    userRepository: UserRepository,
    workoutRepository: WorkoutRepository
  ) {
    this.userRepository = userRepository;
    this.workoutRepository = workoutRepository;
  }

  currentSet(): Set {}
  currentExercise(): Exercise {}

  isPaused(): boolean {}

  startWorkout() {}

  pauseWorkout() {}
  resumeWorkout() {}

  addSet() {}
  addExercise() {}

  incrementRepCount() {}
  decrementRepCount() {}

  endWorkout() {}

}
