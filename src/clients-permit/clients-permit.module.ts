import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permit } from 'src/permits/permit.entity';
import { Clients } from 'src/clients/clients.entity';
import { ClientsPermitController } from './clients-permit.controller';
import { ClientsPermitService } from './clients-permit.service';
import { ClientsPermit } from './clients_permit.entity';

@Module({
  controllers: [ClientsPermitController],
  providers: [ClientsPermitService],
  imports: [
    TypeOrmModule.forFeature([Clients, ClientsPermit, Permit])
  ]
})
export class ClientsPermitModule {}
