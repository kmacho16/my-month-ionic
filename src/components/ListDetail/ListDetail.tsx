import { IonFab, IonFabButton, IonFabList, IonIcon } from "@ionic/react";
import { add, share } from "ionicons/icons";
import { FC, useState } from "react";
import { useParams } from "react-router";
import DetailItem from "../../interface/detailItem.interface";
import DetaillComponent from "../DetailComponent/DetailComponent";

const ListDetail: FC<any> = () => {
    const [expenses, setExpenses] = useState<DetailItem[]>(
        [
            {
                id:'01',
                categoria: 'ocio',
                valor: 200,
                fecha: new Date(),
                titulo: 'Retiro'
            },
            {
                id:'02',
                categoria: 'obligaciones',
                valor: 30000,
                fecha: new Date(),
                titulo: 'Mueble cocina'
            },
            {
                id:'03',
                categoria: 'mercado',
                valor: 500000,
                fecha: new Date(),
                titulo: 'Credito'
            }
        ]
    )

    return (
        <>
        {expenses.map(item=>(
            <DetaillComponent item={item} />
        ))}
        
        </>);
}

export default ListDetail;