import {
  Entity,
  Column,
  BaseEntity,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Choice } from './Choice.entity';
import { Meeting } from './Meeting.entity';
import { Provider } from './Provider.entity';
import { Status } from './Status.entity';
import { User } from './User.entity';

@Entity()
export class Enterprise extends BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  logo: string;

  @Column({ nullable: true })
  primary: string;

  @Column({ nullable: true })
  secondary: string;

  @Column({ nullable: true })
  ternary: string;

  @ManyToOne((type) => Provider, (provider) => provider.enterprises)
  provider: Provider;

  @OneToMany((type) => Status, (status) => status.enterprise)
  status: Status[];

  @OneToMany((type) => User, (user) => user.enterprise)
  users: User[];

  @OneToMany((type) => Meeting, (meeting) => meeting.enterprise)
  meetings: Meeting[];

  @OneToMany((type) => Choice, (choice) => choice.enterprise)
  choices: Choice[];
}
