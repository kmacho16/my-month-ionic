export default interface DetailItem {
    id: string;
    categoria: string;
    titulo: string;
    valor: number;
    fecha: Date;
    descripcion?:string;
}