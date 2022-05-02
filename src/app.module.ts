import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/clients.module';
import { PermitModule } from './permits/permit.module';
import { TourOperatorModule } from './tour_operators/tour_operator.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clients } from './clients/clients.entity';
import { Permit } from './permits/permit.entity';
import { ClientsPermit } from './clients-permit/clients_permit.entity';
import { TourOperator } from './tour_operators/tour_operator.entity';
import { ClientsPermitModule } from './clients-permit/clients-permit.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host:"localhost",
      port:5432,
      username:"postgres",
      password:"root",
      database:"dbms4Oleg",
      entities:[
        Clients,
        Permit,
        ClientsPermit,
        TourOperator,
      ],
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
    }),
    ClientsModule, 
    PermitModule, 
    TourOperatorModule, ClientsPermitModule],
    controllers:[],
    providers:[],
})
export class AppModule {}
