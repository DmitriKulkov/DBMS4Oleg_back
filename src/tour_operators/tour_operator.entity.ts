import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
  } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Permit } from "src/permits/permit.entity";
  
  @Entity({ name: "tour_operator" })
  export class TourOperator {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ApiProperty({ example: "Ivan", description: "Name" })
    @Column({ type: "varchar", length: 50, nullable: false })
    name: string;
  
    @ApiProperty({ example: "4.7", description: "Rating" })
    @Column({ type: "decimal", nullable: false })
    rating: number;

  
    @OneToMany(() => Permit, (permit) => permit.operator_id)
    permit_id: Permit[];
  }
  