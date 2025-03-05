import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class CreateCrudDto {
  @IsString()
  @MaxLength(2)
  @ApiProperty({ example: 'CC' })
  tipo_id: string;
  @IsString()
  @MaxLength(16)
  @ApiProperty({ example: '1063600373' })
  id: string;
  @IsString()
  @MaxLength(30)
  @ApiProperty({ example: 'donado' })
  apellido_1: string;
  @IsString()
  @MaxLength(30)
  @ApiProperty({ example: 'sandoval' })
  apellido_2: string;
  @IsString()
  @MaxLength(30)
  @ApiProperty({ example: 'danilo' })
  nombre_1: string;
  @IsString()
  @MaxLength(30)
  @ApiProperty({ example: 'jose' })
  nombre_2: string;
  @IsString()
  @MaxLength(1)
  @ApiProperty({ example: 'M' })
  sexo: string;
  @IsString()
  @ApiProperty({ example: '12-04-1999' })
  fecha_de_nacimiento: Date;
}
