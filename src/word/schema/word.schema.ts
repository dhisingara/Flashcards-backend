import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BIN } from '../enums/word.enum';

export type WordDocument = Word & Document;

@Schema()
export class Word extends Document {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  word: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  bin: BIN;

  @Prop({ required: true })
  timeToNextAppearance: number;

  @Prop({ required: true })
  wrongCount: number;

  @Prop({ required: true })
  isDeleted: boolean;
}

export const WordSchema = SchemaFactory.createForClass(Word);

WordSchema.set('toObject', { getters: true });
WordSchema.set('toJSON', { getters: true });
