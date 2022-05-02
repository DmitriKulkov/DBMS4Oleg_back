import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTourOperatorDto } from './dto/create-tour_operator.dto';
import { TourOperator } from './tour_operator.entity';

@Injectable()
export class TourOperatorService {
    constructor(@InjectRepository(TourOperator) private tourOperatorRepository: Repository<TourOperator>){}
    
    async getAll(){
        const students = await this.tourOperatorRepository.find()
        return students;
    }

    async delete(id:number){
        return await this.tourOperatorRepository.delete(id);
    }

    async update(id:number, dto: CreateTourOperatorDto){
        return await this.tourOperatorRepository.update(id, {...dto});
    }

    async create(dto: CreateTourOperatorDto){
        return await this.tourOperatorRepository.save({...dto});
    }
}
