import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AppConfigService } from 'src/config/config.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: AppConfigService,
  ) {}

  async signUp(username: string, password: string): Promise<any> {
    const user = await this.usersService.create({
      username,
      password,
    });

    return { username: user.username };
  }

  async signIn(username: string, password: string): Promise<any> {
    const user = await this.usersService.findUser(username, password);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.username };
    const options = { secret: this.configService.jwtSecret };
    return {
      access_token: await this.jwtService.signAsync(payload, options),
    };
  }
}
