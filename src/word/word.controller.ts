import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Request,
} from '@nestjs/common';
import { WordService } from './word.service';
import { v4 as uuidv4 } from 'uuid';
import { WordDto } from './DTO/word.dto';
import { Word, WordDocument } from './schema/word.schema';
import { BIN } from './enums/word.enum';

@Controller('word')
export class WordController {
  constructor(private wordService: WordService) {}

  @Get('')
  async getAllWords(@Request() request) {
    const email = request.user.email;
    return await this.wordService.getAllWords(email);
  }

  @HttpCode(HttpStatus.OK)
  @Post('')
  async addWord(@Request() request, @Body() word: WordDto) {
    const email = request.user.email;
    const newWord = {
      ...word,
      email,
      isDeleted: false,
      timeToNextAppearance: Date.now(),
      bin: BIN.ZERO,
      wrongCount: 0,
    } as Word;
    return this.wordService.addWord(newWord);
  }

  @HttpCode(HttpStatus.OK)
  @Post(':id')
  async updateWord(@Param() id, @Body() word: WordDto) {
    return this.wordService.updateWord(id.id, word);
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  async delete(@Param() id) {
    return this.wordService.deleteWord(id.id);
  }
}
