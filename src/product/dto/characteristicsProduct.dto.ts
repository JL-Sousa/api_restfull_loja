import { IsNotEmpty } from 'class-validator';

export class CharacteristicsProductDTO {
  @IsNotEmpty({ message: 'Nome da cadasterística não pode ser vazio' })
  name: string;
  @IsNotEmpty({ message: 'Descrição da característica não pode ser vazio' })
  description: string;
}
