
//abstract, NO SIRVE PARA CREAR INSTANCIAS

import { RegisterUserDto } from "../dtos/auth/register_user.dto";
import { UserEntity } from "../entities/user.entity";

//Definir reglas
export abstract class AuthDataSource {

    abstract register( registerUserDto: RegisterUserDto): Promise<UserEntity>
    //abstract login



}