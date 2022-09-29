import { IonFab, IonFabButton, IonFabList, IonIcon } from "@ionic/react";
import { add, share } from "ionicons/icons";
import { FC, useState } from "react";
import { useParams } from "react-router";
import DetailItem from "../../interface/detailItem.interface";
import DetaillComponent from "../DetailComponent/DetailComponent";



const ListDetail: FC<{items:DetailItem[]}> = ({items}) => {
    const [expenses, setExpenses] = useState<DetailItem[]>([]);



    return (
        <>
        {items.map(item=>(
            <DetaillComponent key={item.id} item={item} />
        ))}
        
        </>);
}

export default ListDetail;