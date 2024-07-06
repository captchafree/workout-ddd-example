import type {UserRepository} from "./repository/UserRepository.ts";
import {InMemoryUserRepository} from "./repository/InMemoryUserRepository.ts";
import type {WorkoutRepository} from "./repository/WorkoutRepository.ts";
import {InMemoryWorkoutRepository} from "./repository/InMemoryWorkoutRepository.ts";

/**
 * Serves as the "config" file for the app. Choose which implementations you want to use.
 * Swap out with firebase (or something else) as needed.
 *
 * This specific implementation uses a singleton for global config.
 */
export class DomainRegistry {

  private static userRepositoryInstance: UserRepository;
  private static workoutRepositoryInstance: WorkoutRepository;

  getUserRepository(): UserRepository {
    if (!DomainRegistry.userRepositoryInstance) {
      DomainRegistry.userRepositoryInstance = new InMemoryUserRepository();
    }
    return DomainRegistry.userRepositoryInstance;
  }

  getWorkoutRepository(): WorkoutRepository {
    if (!DomainRegistry.workoutRepositoryInstance) {
      DomainRegistry.workoutRepositoryInstance = new InMemoryWorkoutRepository();
    }
    return DomainRegistry.workoutRepositoryInstance;
  }
}
