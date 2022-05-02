import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TourOperatorController } from './tour_operator.controller';
import { TourOperator } from './tour_operator.entity';
import { TourOperatorService } from './tour_operator.service';

@Module({
  controllers: [TourOperatorController],
  providers: [TourOperatorService],
  imports: [
    TypeOrmModule.forFeature([TourOperator]),
  ]
})
export class TourOperatorModule {}
