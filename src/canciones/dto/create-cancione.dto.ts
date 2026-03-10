import { IsString, IsNumber } from 'class-validator';

export class CreateCancioneDto {

  @IsString()
  titulo: string;

  @IsNumber()
  duracion: number;

  @IsString()
  album: string;

  @IsNumber()
  anioLanzamiento: number;

  @IsNumber()
  reproducciones: number;

  @IsNumber()
  artistaId: number;

}
