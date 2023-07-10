import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WordService } from './word.service';
import { Word, WordSchema } from './schema/word.schema';
import { WordController } from './word.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Word.name, schema: WordSchema }]),
    //MongooseModule.forFeature([{ name: CounterParty.name, schema: CounterPartySchema }]),
  ],
  controllers: [WordController],
  providers: [WordService],
  exports: [
    WordService,
    MongooseModule.forFeature([{ name: Word.name, schema: WordSchema }]),
  ],
})
export class WordModule {}
