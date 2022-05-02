import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientsDto } from './dto/create-client.dto';

@Controller('clients')
export class ClientsController {
    constructor(private clientsService: ClientsService){}

    @Get()
    getAll(){
        return this.clientsService.getAll();
    }

    @Delete("/:id")
    delete(@Param("id") id:number){
        return this.clientsService.delete(id);
    }

    @Post()
    create(@Body() dto: CreateClientsDto){
        return this.clientsService.create(dto);
    }

    @Put("/:id")
    update(@Param("id") id: number,  @Body() dto: CreateClientsDto){
        return this.clientsService.update(id, dto);
    }
}
