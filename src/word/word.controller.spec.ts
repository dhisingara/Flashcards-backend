import { Model } from 'mongoose';
import { WordController } from './word.controller';
import { WordService } from './word.service';
import { Word, WordDocument } from './schema/word.schema';

const request = {
  user: {
    userName: 'test',
    email: 'test@testing.com',
  },
};

const word = {
  word: 'Erudite',
  description: 'Having or showing great Knowledge ',
};

describe('WordController', () => {
  let wordController: WordController;
  let wordService: WordService;
  let wordModel: Model<WordDocument>;

  beforeEach(() => {
    wordService = new WordService(wordModel);
    wordController = new WordController(wordService);
  });

  describe('findAll', () => {
    it('should return an array of word', async () => {
      const result = [
        {
          email: 'user@dhisingara.com',
          word: 'Ambigue',
          description: 'An ambiguous expression or statement ',
          bin: 3,
          timeToNextAppearance: 1689070981138,
          wrongCount: 6,
          isDeleted: true,
        },
      ] as Word[];
      jest
        .spyOn(wordService, 'getAllWords')
        .mockImplementation(async () => result);

      expect(await wordController.getAllWords(request)).toBe(result);
    });
  });

  describe('addWord', () => {
    it('should return an array of word', async () => {
      const result = {
        email: 'test@testing.com',
        word: 'Ambigue',
        description: 'An ambiguous expression or statement ',
        bin: 0,
        timeToNextAppearance: Date.now(),
        wrongCount: 0,
        isDeleted: true,
      } as Word;
      jest.spyOn(wordService, 'addWord').mockImplementation(async () => result);

      expect(await wordController.addWord(request, word)).toBe(result);
    });
  });
});
