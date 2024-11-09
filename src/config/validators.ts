export class Validators {

    //Las regex expresiones tienen metodos propios
    static get email(){
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/;
    }

}