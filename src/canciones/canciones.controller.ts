import { Controller, Get, Post, Body, Patch, Param, Delete,Put } from '@nestjs/common';
import { CancionesService } from './canciones.service';
import { CreateCancioneDto } from './dto/create-cancione.dto';

@Controller('canciones')
export class CancionesController {
    constructor(private service:CancionesService){}

    @Post()
    create(@Body() body:CreateCancioneDto){
      return this.service.create(body);
    }

    @Get()
    findAll(){
      return this.service.findAll();
    }

    @Put(':id')
    update(@Param('id') id:number,@Body() body){
      return this.service.update(id,body);
    }

    @Delete(':id')
    delete(@Param('id') id:number){
      return this.service.delete(id);
    }
}


