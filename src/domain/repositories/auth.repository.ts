
//abstract, NO SIRVE PARA CREAR INSTANCIAS

import { RegisterUserDto } from "../dtos/auth/register_user.dto";
import { UserEntity } from "../entities/user.entity";

//Definir reglas -> Pueden ser INTERFACES -> ya que no tienen implementaciones
export abstract class AuthRepository {

    abstract register( registerUserDto: RegisterUserDto): Promise<UserEntity>
    //abstract login



}