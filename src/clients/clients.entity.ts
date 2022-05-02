import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
  } from "typeorm";
  import { ApiProperty } from "@nestjs/swagger";
import { ClientsPermit } from "../clients-permit/clients_permit.entity";
  
  @Entity({ name: "clients" })
  export class Clients {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ApiProperty({ example: "Ivan", description: "Name" })
    @Column({ type: "varchar", length: 50, nullable: false })
    name: string;
  
    @ApiProperty({ example: "Ivanov", description: "Surname" })
    @Column({ type: "varchar", length: 50, nullable: false })
    surname: string;

    @ApiProperty({ example: "Ivanovich", description: "Patronymic" })
    @Column({ type: "varchar", length: 50, nullable: true })
    patronymic: string;

    @ApiProperty({ example: "01.01.2001", description: "Birthday" })
    @Column({ type: "date", nullable: false })
    birthday: Date;

    @OneToMany(() => ClientsPermit, (client_permit) => client_permit.clients_id)
    client_permit: ClientsPermit[];

  }
  