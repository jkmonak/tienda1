export class Clientes{
    _id?: number;
    nombres: string;
    direccion: string;
    telefono: number;
    correo: string;

    constructor(nombres: string,  direccion: string, telefono: number, correo: string, ){
        this.nombres = nombres;
        this.direccion = direccion;
        this.telefono = telefono;
        this.correo = correo;
    }
}