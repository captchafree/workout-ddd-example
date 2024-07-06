import type {User} from "../model/User.ts";

export interface UserRepository {

  getUserById(userId: string): Promise<User | null>;
  getUserByIdSync(userId: string): User | null;

  saveUser(user: User): Promise<void>;
  saveUserSync(user: User): void;
}

