import { IsString, IsNumber, MinLength } from 'class-validator';

export class CreateAuthDto {
      @IsString()
      nombre: string;
          
      @IsString()
      rol: string;
    
      @IsString()
      @MinLength(6)
      password: string;
}
