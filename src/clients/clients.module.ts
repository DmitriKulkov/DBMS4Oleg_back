import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permit } from 'src/permits/permit.entity';
import { ClientsController } from './clients.controller';
import { Clients } from './clients.entity';
import { ClientsService } from './clients.service';
import { ClientsPermit } from '../clients-permit/clients_permit.entity';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService],
  imports: [
    TypeOrmModule.forFeature([Clients, ClientsPermit, Permit])
  ]
})
export class ClientsModule {}
