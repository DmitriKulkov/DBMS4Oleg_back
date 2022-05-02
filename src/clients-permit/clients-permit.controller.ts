import { Controller, Delete, Get, Param } from '@nestjs/common';
import { ClientsPermitService } from './clients-permit.service';

@Controller('clients-paculty')
export class ClientsPermitController {
    constructor(private clifacService: ClientsPermitService){}

    @Get()
    getAll(){
        return this.clifacService.getAll();
    }

    @Delete("/:id")
    delete(@Param("id") id:number){
        return this.clifacService.delete(id);
    }

    // @Post()
    // create(@Body() dto: CreateStudentDto){
    //     return this.studfacService.create(dto);
    // }

    // @Put("/:id")
    // update(@Param("id") id: number,  @Body() dto: CreateStudentDto){
    //     return this.studfacService.update(id, dto);
    // }
}
