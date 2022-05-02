import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePermitDto } from './dto/create-permits.dto';
import { Permit } from './permit.entity';

@Injectable()
export class PermitService {
    constructor(@InjectRepository(Permit) private permitRepository: Repository<Permit>){}
    
    async getAll(){
        const students = await this.permitRepository.find()
        return students;
    }

    async delete(id:number){
        return await this.permitRepository.delete(id);
    }

    async update(id: number, dto: CreatePermitDto){
        return await this.permitRepository.update(id, {...dto});
    }

    async create(dto: CreatePermitDto){
        return await this.permitRepository.save({...dto});
    }
}
