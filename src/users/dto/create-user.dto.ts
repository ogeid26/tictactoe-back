import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  gamesWon = 0;

  @ApiProperty()
  gamesLost = 0;
  @ApiProperty()

  @ApiProperty()
  gamesDrawn = 0;

  @ApiProperty()
  gamesPlayed = 0;
  
  @ApiProperty()
  credential: string;
}
