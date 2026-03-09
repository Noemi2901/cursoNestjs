import { Controller, Get, Post, Body, Patch, Param, Delete,Put} from '@nestjs/common';
import { ArtistasService } from './artistas.service';


@Controller('artistas')
export class ArtistasController {
  
    constructor(private service:ArtistasService){}

    @Get()
    findAll(){
      return this.service.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:number){
      return this.service.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id:number,@Body() body){
      return this.service.update(id,body);
    }

    @Delete(':id')
    remove(@Param('id') id:number){
      return this.service.remove(id);
    }
}
