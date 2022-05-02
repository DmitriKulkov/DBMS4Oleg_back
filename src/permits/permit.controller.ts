import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePermitDto } from './dto/create-permits.dto';
import { PermitService } from './permit.service';

@Controller('permit')
export class PermitController {
    constructor(private permitService: PermitService){}

    @Get()
    getAll(){
        return this.permitService.getAll();
    }

    @Delete("/:id")
    delete(@Param("id") id:number){
        return this.permitService.delete(id);
    }

    @Post()
    create(@Body() dto: CreatePermitDto){
        return this.permitService.create(dto);
    }

    @Put("/:id")
    update(@Param("id") id: number,  @Body() dto: CreatePermitDto){
        return this.permitService.update(id, dto);
    }
}
