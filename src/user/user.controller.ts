import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { User } from './schema/user.schema';
import { UserService } from './user.service';
import { Public } from '../auth/decorators/public.decorator';
import { v4 as uuidv4 } from 'uuid';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('register')
  async register(@Body() user: User) {
    user.id = uuidv4();
    return this.userService.register(user);
  }
}
