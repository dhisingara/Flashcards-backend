export interface WordDto {
  word: string;
  description: string;
  bin: number;
  timeToNextAppearance: Date;
  wrongCount: number;
  updateFields?: string[];
}
