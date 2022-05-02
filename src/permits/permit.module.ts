import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsPermit } from 'src/clients-permit/clients_permit.entity';
import { Clients } from 'src/clients/clients.entity';
import { PermitController } from './permit.controller';
import { Permit } from './permit.entity';
import { PermitService } from './permit.service';

@Module({
  controllers: [PermitController],
  providers: [PermitService],
  imports: [
    TypeOrmModule.forFeature([Permit, ClientsPermit, Clients])
  ]
})
export class PermitModule {}
