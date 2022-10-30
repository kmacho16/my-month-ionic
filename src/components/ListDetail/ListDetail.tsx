import { IonFab, IonFabButton, IonFabList, IonIcon } from "@ionic/react";
import { add, share } from "ionicons/icons";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailItem from "../../interface/detailItem.interface";
import DetaillComponent from "../DetailComponent/DetailComponent";



const ListDetail: FC<{ items: DetailItem[] }> = ({ items }) => {
    const [expenses, setExpenses] = useState<DetailItem[]>([]);
    const [actualCat, setActualCat] = useState<string>();

    useEffect(()=>{
    },[actualCat])

    return (
        <>
            {items.map((item, index) => (
                <>
                    <DetaillComponent actualCat={index == 0 ? item.categoria : items[index-1].categoria} key={item.id} item={item} />
                </>
            ))}

        </>);
}

export default ListDetail;