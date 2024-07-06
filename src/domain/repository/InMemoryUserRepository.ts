import type {User} from "../model/User.ts";
import type {UserRepository} from "./UserRepository.ts";
import {nanoid} from "nanoid";

export class InMemoryUserRepository implements UserRepository {
  private users: Map<string, User>;

  constructor() {
    this.users = new Map();
  }

  async getUserById(userId: string): Promise<User | null> {

    return this.users.get(userId) || null;
  }

  getUserByIdSync(userId: string): User | null {
    return this.users.get(userId) || null;
  }

  async saveUser(user: User): Promise<void> {
    this.users.set(nanoid(), user)
    return Promise.resolve();
  }

  saveUserSync(user: User): void {
    this.users.set(nanoid(), user)
  }
}
