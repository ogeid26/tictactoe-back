import {
  Column,
  DeleteDateColumn,
  Entity,
  ObjectIdColumn
} from 'typeorm';
import { Role } from '../../common/enums/rol.enum';

@Entity()
export class User {
  @ObjectIdColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false, select: false })
  password: string;

  @Column({ type: 'enum', default: Role.USER, enum: Role })
  role: Role;

  @DeleteDateColumn()
  deletedAt: Date;

  @Column({nullable: true})
  gamesWon: number

  @Column({nullable: true})
  gamesLost: number

  @Column({nullable: true})
  gamesDrawn: number
}
