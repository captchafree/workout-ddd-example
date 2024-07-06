export interface Exercise {

  getId(): string;
  getWorkoutId(): string;
  getSetId(): string;

  getDate(): Date;
  getName(): string;
  getExerciseType(): string;

  getRepTarget(): number;
  getRepCount(): number;

  setName(name: string): void;
  setDate(date: Date): void;
  setExerciseType(type: string): void;

  setRepTarget(amount: number): void;
  setRepCount(amount: number): void;
}


export class ExerciseImpl implements Exercise {

  private readonly id: string;
  private workoutId: string;
  private setId: string;

  private date: Date;
  private name: string;
  private exerciseType: string;

  private repTarget: number;
  private repCount: number;

  constructor(id: string, workoutId: string, setId: string, date: Date, name: string, exerciseType: string) {
    this.id = id;
    this.workoutId = workoutId;
    this.setId = setId;
    this.date = date;
    this.name = name;
    this.exerciseType = exerciseType;
    this.repTarget = 0;
    this.repCount = 0;
  }

  getId(): string {
    return this.id;
  }

  getWorkoutId(): string {
    return this.workoutId;
  }

  getSetId(): string {
    return this.setId;
  }

  getDate(): Date {
    return this.date;
  }

  getName(): string {
    return this.name;
  }

  getExerciseType(): string {
    return this.exerciseType;
  }

  getRepTarget(): number {
    return this.repTarget;
  }

  getRepCount(): number {
    return this.repCount;
  }

  setName(name: string): void {
    this.name = name;
  }

  setDate(date: Date): void {
    this.date = date;
  }

  setExerciseType(type: string): void {
    this.exerciseType = type;
  }

  setRepTarget(amount: number): void {
    this.repTarget = amount;
  }

  setRepCount(amount: number): void {
    this.repCount = amount;
  }
}
