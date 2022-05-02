import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientsDto } from './dto/create-client.dto';
import { Clients } from './clients.entity';

@Injectable()
export class ClientsService {
    constructor(@InjectRepository(Clients) private studentsRepository: Repository<Clients>){}
    
    async getAll(){
        const students = await this.studentsRepository.find()
        return students;
    }

    async delete(id:number){
        return await this.studentsRepository.delete(id);
    }

    async update(id:number, dto: CreateClientsDto){
        return await this.studentsRepository.update(id, {...dto});
    }

    async create(dto: CreateClientsDto){
        return await this.studentsRepository.save({...dto});
    }


}
