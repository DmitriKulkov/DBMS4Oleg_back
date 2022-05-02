import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
  } from "typeorm";
import { Permit } from "src/permits/permit.entity";
import { Clients } from "../clients/clients.entity";
  
  @Entity({ name: "clients_permit" })
  export class ClientsPermit {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Permit, (permit_id) => permit_id.client_permit)
    @JoinColumn({ name: "permit_id" })
    permit_id: Permit;

    @ManyToOne(() => Clients, (clients_id) => clients_id.client_permit)
    @JoinColumn({ name: "clients_id" })
    clients_id: Clients;
  }
  