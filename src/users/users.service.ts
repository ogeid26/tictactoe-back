import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findOneByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  findOneByUsername(username: string) {
    return this.userRepository.findOneBy({ username });
  }

  findByEmailWithPassword(email: string) {
    return this.userRepository.findOne({
      where: { email },
      select: ['id', 'username', 'email', 'password', 'role'],
    });
  
  }
  findGamesWonByUsername(username: string) {
    return this.userRepository.findOne({
      where: { username },
      select: ['gamesWon'],
    });
  }

  findGamesDrawnByUsername(username: string) {
    return this.userRepository.findOne({
      where: { username },
      select: ['gamesDrawn'],
    });
  }
  findGamesLostByUsername(username: string) {
    return this.userRepository.findOne({
      where: { username },
      select: ['gamesLost'],
    });
  }

  findByUsernameWithPassword(username: string) {
    return this.userRepository.findOne({
      where: { username },
      select: ['id', 'username', 'email', 'password', 'role'],
    });
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id });

  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
