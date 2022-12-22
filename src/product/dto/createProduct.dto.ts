import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { CharacteristicsProductDTO } from './characteristicsProduct.dto';
import { ProductImagensDTO } from './productImagens.dto';

export class CreateProductDTO {
  @IsNotEmpty({ message: 'Nome do produto não pode ser vazio' })
  name: string;
  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @Min(1, { message: 'O valor precisa ser maior que zero' })
  price: number;
  @IsNumber()
  @Min(0, { message: 'Quantidade mínima inválida' })
  quantity: number;
  @IsNotEmpty({ message: 'Descrição do produto não pode ser vazia ' })
  @MaxLength(1000, {
    message: 'Descrição não pode ter mais que 1000 caracteres',
  })
  description: string;
  @ValidateNested()
  @IsArray()
  @ArrayMinSize(3)
  @Type(() => CharacteristicsProductDTO)
  characteristics: CharacteristicsProductDTO[];
  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ProductImagensDTO)
  imagens: ProductImagensDTO[];
  @IsNotEmpty({ message: 'Categoria do produto não pode ser vazia' })
  category: string;
}
