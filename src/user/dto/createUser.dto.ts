import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { EmailIsUnique } from '../validation/emailIsUnique.validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: ' o nome não pode ser vazio!' })
  name: string;

  @IsEmail(undefined, { message: 'O e-mail informado é inválido!' })
  @EmailIsUnique({ message: 'Ja existe um usuario com este e-mail!' })
  email: string;

  @MinLength(6, { message: ' A senha precisa ter pelo menos 6 caracteres!' })
  password: string;
}
