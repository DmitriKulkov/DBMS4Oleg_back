import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { ClientsPermit } from "src/clients-permit/clients_permit.entity";
import { TourOperator } from "src/tour_operators/tour_operator.entity";

@Entity({ name: "permit" })
export class Permit {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: "Simple Permit", description: "Permit name" })
  @Column({ type: "varchar", length: 20, nullable: false })
  name: string;

  @ApiProperty({ example: "Location", description: "Location" })
  @Column({ type: "varchar", length: 100, nullable: false })
  location: string;

  @ApiProperty({ example: "Simple 9.99", description: "Price" })
  @Column({ type: "decimal", nullable: false })
  price: number;

  @ApiProperty({ example: "01.01.2001", description: "Start Date" })
  @Column({ type: "date", nullable: false })
  start_date: Date;

  @ApiProperty({ example: "01.01.2001", description: "End Date" })
  @Column({ type: "date", nullable: false })
  end_date: Date;

  @OneToMany(() => ClientsPermit, (client_permit) => client_permit.permit)
  client_permit: ClientsPermit[];

  @ManyToOne(() => TourOperator, (operator_id) => operator_id.permit)
  @JoinColumn({ name: "operator_id" })
  operator: ClientsPermit;

  @Column()
  operator_id: number;
}
