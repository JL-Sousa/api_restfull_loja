import { IsNotEmpty, IsUrl } from 'class-validator';

export class ProductImagensDTO {
  @IsUrl(undefined, { message: 'URL para imagem inválida' })
  url: string;
  @IsNotEmpty({ message: 'Descrição da imagem não pode ser vazia' })
  description: string;
}
