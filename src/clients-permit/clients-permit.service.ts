import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientsPermit } from './clients_permit.entity';

@Injectable()
export class ClientsPermitService {
    constructor(@InjectRepository(ClientsPermit) private cliperRepository: Repository<ClientsPermit>){}
    
    async getAll(){
        const students = await this.cliperRepository.find()
        return students;
    }

    async delete(id:number){
        return await this.cliperRepository.delete(id);
    }

    // async update(id:number, dto: CreateClientsDto){
    //     return await this.cliperRepository.update(id, {...dto});
    // }

    // async create(dto: CreateClientsDto){
    //     return await this.cliperRepository.save({...dto});
    // }
}
