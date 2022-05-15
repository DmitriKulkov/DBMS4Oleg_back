import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn, Column,
} from "typeorm";
import { Permit } from "src/permits/permit.entity";
import { Clients } from "../clients/clients.entity";
  
  @Entity({ name: "clients_permit" })
  export class ClientsPermit {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Permit, (permit) => permit.client_permit)
    @JoinColumn({ name: "permit_id" })
    permit: Permit;

    @Column()
    permit_id: number;

    @ManyToOne(() => Clients, (clients_id) => clients_id.client_permit)
    @JoinColumn({ name: "clients_id" })
    clients: Clients;

    @Column()
    clients_id: number;
  }
  