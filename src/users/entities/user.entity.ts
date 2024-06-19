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

  @Column({unique: true, nullable: false})
  username: string;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column({ nullable: false, select: false })
  password: string;

  @Column({ type: 'enum', default: Role.USER, enum: Role })
  role: Role;

  @DeleteDateColumn()
  deletedAt: Date;

  @Column({type: 'int', default: 0, select: true})
  gamesWon: number;

  @Column({type: 'int', default: 0, select: true})
  gamesLost: number;

  @Column({type: 'int', default: 0, select: true})
  gamesDrawn: number;

  @Column({type: 'int', default: 0, select: true})
  gamesPlayed: number;

  @Column({  select: true})
  credential: string;




}
