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
interface DomainRegistry {
  getUserRepository(): UserRepository;

  getWorkoutRepository(): WorkoutRepository;
}

/**
 * Create another FirebaseDomainRegistry for production services
 */
export class TestDomainRegistry implements DomainRegistry {

  private static userRepositoryInstance: UserRepository;
  private static workoutRepositoryInstance: WorkoutRepository;

  getUserRepository(): UserRepository {
    if (!TestDomainRegistry.userRepositoryInstance) {
      TestDomainRegistry.userRepositoryInstance = new InMemoryUserRepository();
    }
    return TestDomainRegistry.userRepositoryInstance;
  }

  getWorkoutRepository(): WorkoutRepository {
    if (!TestDomainRegistry.workoutRepositoryInstance) {
      TestDomainRegistry.workoutRepositoryInstance = new InMemoryWorkoutRepository();
    }
    return TestDomainRegistry.workoutRepositoryInstance;
  }
}
