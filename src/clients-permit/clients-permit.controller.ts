import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { ClientsPermitService } from './clients-permit.service';
import {CreateClientPermitDto} from "./dto/create-client-permit.dto";

@Controller('clients-permit')
export class ClientsPermitController {
    constructor(private cliperService: ClientsPermitService){}

    @Get()
    getAll(){
        return this.cliperService.getAll();
    }

    @Delete("/:id")
    delete(@Param("id") id:number){
        return this.cliperService.delete(id);
    }

    @Post()
    create(@Body() dto: CreateClientPermitDto){
        return this.cliperService.create(dto);
    }

    @Put("/:id")
    update(@Param("id") id: number,  @Body() dto: CreateClientPermitDto){
        return this.cliperService.update(id, dto);
    }
}
