import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTourOperatorDto } from './dto/create-tour_operator.dto';
import { TourOperatorService } from './tour_operator.service';

@Controller('tour_operator')
export class TourOperatorController {
    constructor(private tourOperatorService: TourOperatorService){}

    @Get()
    getAll(){
        return this.tourOperatorService.getAll();
    }

    @Delete("/:id")
    delete(@Param("id") id:number){
        return this.tourOperatorService.delete(id);
    }

    @Post()
    create(@Body() dto: CreateTourOperatorDto){
        return this.tourOperatorService.create(dto);
    }

    @Put("/:id")
    update(@Param("id") id: number,  @Body() dto: CreateTourOperatorDto){
        return this.tourOperatorService.update(id, dto);
    }
}
