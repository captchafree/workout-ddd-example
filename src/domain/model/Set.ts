import {type Exercise, ExerciseImpl} from "./Exercise.ts";

export interface Set {

  getId(): string;
  getWorkoutId(): string;

  getName(): string;
  getDate(): Date;
  getExercises(): Exercise[];

  setName(name: string): void;
  setDate(date: Date): void;

  addExercise(data: AddExerciseCommand): Exercise;
}

type AddExerciseCommand = {
  id: string;
  date: Date;
  name: string;
  exerciseName: string;
};



export class SetImpl implements Set {

  private readonly id: string;
  private workoutId: string;

  private name: string;
  private date: Date;

  private exercises: Exercise[];

  constructor(id: string, workoutId: string, name: string, date: Date) {
    this.id = id;
    this.workoutId = workoutId;
    this.name = name;
    this.date = date;
    this.exercises = [];
  }

  getId(): string {
    return this.id;
  }

  getWorkoutId(): string {
    return this.workoutId;
  }

  getName(): string {
    return this.name;
  }

  getDate(): Date {
    return this.date;
  }

  getExercises(): Exercise[] {
    return this.exercises;
  }

  setName(name: string): void {
    this.name = name;
  }

  setDate(date: Date): void {
    this.date = date;
  }

  addExercise(data: AddExerciseCommand): Exercise {
    const newExercise = new ExerciseImpl(data.id, this.workoutId, this.id, data.date, data.name, data.exerciseName);
    this.exercises.push(newExercise);
    return newExercise;
  }
}
