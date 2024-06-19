import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';

import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register({ username, password }: RegisterDto) {
    // const user = await this.usersService.findOneByEmail(email);
    const user = await this.usersService.findOneByUsername(username);

    if (user) {
      throw new BadRequestException(['Ese usuario ya existe!']);
    }

    await this.usersService.create({
      username,
      password: await bcryptjs.hash(password, 10),
      gamesDrawn: 0,
      gamesLost: 0,
      gamesWon: 0,
      gamesPlayed: 0,
      credential:"",
      
    });

    return {
      username,
    };
  }

  async login({ username, password }: LoginDto) {
    const user = await this.usersService.findByUsernameWithPassword(username);
    if (!user) {
      throw new UnauthorizedException('Datos incorrectos');
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Datos incorrectos');
    }

    const payload = { username: user.username, role: user.role };
    const token = await this.jwtService.signAsync(payload);
    const gamesWon = user.gamesWon;

    return {
      token,
      username,
      gamesWon
    };
  }

  async profile({ username, role }: { username: string; role: string }) {
    const user = await this.usersService.findOneByUsername(username);
  }
}
