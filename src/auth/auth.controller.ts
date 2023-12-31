import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { UserService } from '../user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: Record<string, any>) {
    const result = this.authService.signIn(signInDto.email, signInDto.password);
    return result;
  }

  @Get('me')
  async authMe(@Request() request) {
    return await this.userService.findOne(request.user.email);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
