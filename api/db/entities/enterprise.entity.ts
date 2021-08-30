import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Enterprise extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

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
}
