import { Validators } from "../../../config";


export class RegisterUserDto {


    // para que otro desarrollador no use durectemante -> Private al constructor
    private constructor(
        public name: string, 
        public email: string,
        public password: string,
        ){}
    

    static create(object: {[key: string]:any}): [string?, RegisterUserDto?] {


        const { name , email, password } = object

        //validaciones
        if(!name) return ['Falta el nombre'];
        if(!email) return ['Falta el correo'];
        if(!Validators.email.test(email)) return ['El email ingresado no es un email valido'];
        if(!password) return ['Falta la contra'];
        if(password.length < 6) return ['Contra muy cortica'];

        //Solo desde la misma clase se puede hacer el new instancia 
        return [undefined, new RegisterUserDto(name, email, password)]
    }
}