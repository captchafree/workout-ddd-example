import {type Set, SetImpl} from "./Set.ts";

export interface Workout {

  getId(): string;

  getDate(): Date;

  getSets(): Set[];

  setDate(date: Date): void;
  addSet(data: AddSetCommand): Set;
}

export type AddSetCommand = {
  id: string;
  date: Date;
  name: string;
};


export class WorkoutImpl implements Workout {

  private readonly id: string;
  private readonly userId: string
  private date: Date;
  private sets: Set[];

  constructor(userId: string, id: string, date: Date) {
    this.id = id;
    this.userId = userId;
    this.date = date;
    this.sets = [];
  }

  getId(): string {
    return this.id;
  }

  getDate(): Date {
    return this.date;
  }

  getSets(): Set[] {
    return this.sets;
  }

  setDate(date: Date): void {
    this.date = date;
  }

  addSet(data: AddSetCommand): Set {
    const newSet = new SetImpl(data.id, this.id, data.name, data.date);
    this.sets.push(newSet);
    return newSet;
  }
}
