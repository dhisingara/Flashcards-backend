import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(email, pass) {
    const user = await this.userService.findOne(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = {
      email: user.email,
      userName: user.userName,
      sub: user.id,
    };
    return {
      accessToken: `Bearer ${await this.jwtService.signAsync(payload)}`,
      userData: payload,
    };
  }
}
