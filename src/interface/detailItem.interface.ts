export default interface DetailItem {
    id: string;
    categoria: string;
    titulo: string;
    valor: number;
    fecha: string;
    tarjetaCredito: boolean;
    descripcion?:string;
}