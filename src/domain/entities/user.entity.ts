
// La idea fundamental de las entidades es que esten desligadas de la base 
// de datos, para asi, si en un futuro se requiere cambiar la BD no colapse la vida
// [ evitar el efecto de caida domino ]
export class UserEntity {

    constructor(
        public id: string,
        public name: string,
        public email: string,
        public password: string,
        public role: string,
        public img: string,
       ){}



}