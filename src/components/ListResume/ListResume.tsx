import { IonButton, IonCard, IonCardContent, IonContent, IonIcon, IonItem, IonLabel, IonList } from "@ionic/react";
import React, { FC, useEffect, useState } from "react";
import ResumeComponent from "../ResumeComponent/ResumeComponent";
import ResumeItem from "../../interface/resumeItem.interface";

const ListResume: FC<{ items: ResumeItem[] }> = ({items}) => {
    const [mItems, setmItems] = useState(items);

    useEffect(()=>{
        setmItems(items)
    },[items])

    return (
        <>
            <IonContent
                fullscreen
                scrollEvents={true}
                onIonScrollStart={() => { }}
                onIonScroll={() => { }}
                onIonScrollEnd={() => { }}>
                <IonList style={{background:"none"}}>
                    {mItems.map((item:ResumeItem) => (
                        <ResumeComponent key={item.id} item={item}/>                        
                    ))}
                </IonList>
            </IonContent>
        </>
    );

}

export default ListResume;