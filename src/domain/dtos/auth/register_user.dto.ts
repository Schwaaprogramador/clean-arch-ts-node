export class RegisterUserDto {


    // para que otro desarrollador no use durectemante 
    private constructor(
        public name: string, 
        public email: string,
        public password: string,
        ){}
    

    static create(object: {[key: string]:any}): [string?, RegisterUserDto?] {

        

        return []
    }
}