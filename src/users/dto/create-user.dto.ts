export class CreateUserDto {
  username: string;
  password: string;
  gamesWon = 0;
  gamesLost = 0;
  gamesDrawn = 0;
}
