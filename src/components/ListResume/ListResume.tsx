import { IonButton, IonCard, IonCardContent, IonContent, IonIcon, IonItem, IonLabel, IonList } from "@ionic/react";
import React, { FC, useState } from "react";
import ResumeComponent from "../ResumeComponent/ResumeComponent";
import ResumeItem from "../../interface/resumeItem.interface";

const ListResume: FC<{ items: ResumeItem[] }> = ({items}) => {
    const [mItems, setmItems] = useState(items);
    const array = Array.from(Array(100).keys());

    return (
        <>
            <IonContent
                fullscreen
                scrollEvents={true}
                onIonScrollStart={() => { }}
                onIonScroll={() => { }}
                onIonScrollEnd={() => { }}>
                <IonList>
                    {mItems.map((item:ResumeItem) => (
                        <ResumeComponent item={item}/>                        
                    ))}
                </IonList>
            </IonContent>
        </>
    );

}

export default ListResume;