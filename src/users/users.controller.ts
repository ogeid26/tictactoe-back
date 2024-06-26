import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Put,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { UpdateCredentialDTO } from './dto/update-credential.dto';

@ApiTags('users')
// @ApiBearerAuth()
// @Auth(Role.ADMIN)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Get("getUser/:username")
  findByUsername(@Param("username") username: string) {
    return this.usersService.findOneByUsername(username);
  }
  
  @Get("gamesWon/:username")
  findGamesWonByUsername(@Param('username') username: string) {
    return this.usersService.findGamesWonByUsername(username);
  }

  @Get("gamesDrawn/:username")
  findGamesDrawn(@Param('username') username: string) {
    return this.usersService.findGamesDrawnByUsername(username);
  }

  @Get("gamesLost/:username")
  findGamesLosByUsername(@Param('username') username: string) {
    return this.usersService.findGamesLostByUsername(username);
  }
  @Get("credential/:username")
  getCredential(@Param('username') username: string) {
    return this.usersService.getCredential(username);
  }

  @Patch('credential/:username')
  updateCredential(@Body() updateCredential: UpdateCredentialDTO) {
    return this.usersService.updateCredential(updateCredential);
  }
}
