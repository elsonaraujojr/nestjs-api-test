import { Prisma } from '@prisma/client';
export class CreatePokemonDto implements Prisma.PokemonCreateInput {
  name: string;
  height?: number | null;
  images?: Prisma.ImageCreateNestedManyWithoutPokemonInput;
}
