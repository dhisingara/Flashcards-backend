import { Injectable } from '@nestjs/common';
import { Word, WordDocument } from './schema/word.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { WordDto } from './DTO/word.dto';

@Injectable()
export class WordService {
  constructor(@InjectModel(Word.name) private wordModel: Model<WordDocument>) {}

  async getAllWords(email: string): Promise<Word[] | undefined> {
    return this.wordModel.find({ email, isDeleted: false });
  }

  async addWord(word: Word): Promise<Word> {
    return this.wordModel.create(word);
  }

  async updateWord(
    _id: string,
    updateWord: WordDto,
  ): Promise<UpdateWriteOpResult> {
    const word = await this.wordModel.findById(_id);
    updateWord.updateFields.forEach((field) => {
      word[field] = updateWord[field];
    });
    return await this.wordModel.updateOne({ _id }, word);
  }

  async deleteWord(_id: string): Promise<UpdateWriteOpResult> {
    const word = await this.wordModel.findById(_id);
    word.isDeleted = true;
    return await this.wordModel.updateOne({ _id }, word);
  }
}
