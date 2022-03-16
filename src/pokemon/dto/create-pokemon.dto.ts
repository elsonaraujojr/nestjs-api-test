import { Prisma } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';
import { Pokemon } from './../entities/pokemon.entity';

export class CreatePokemonDto implements Pokemon {
  @IsString()
  @ApiProperty({
    description: 'The name of the pokemon',
    example: 'Pikachu',
  })
  name: string;

  @IsInt()
  @IsOptional()
  @ApiProperty({
    description: 'The number of the pokemon',
    example: 25,
  })
  height?: number | null;

  @IsOptional()
  @ApiProperty({
    description: 'The weight of the pokemon',
    example: 'create: { data: { weight: 100 } }',
  })
  images?: Prisma.ImageUncheckedCreateNestedManyWithoutPokemonInput;
}
