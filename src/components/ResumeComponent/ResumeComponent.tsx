import { IonCard, IonCardContent, IonCardHeader, IonCol, IonGrid, IonRow } from "@ionic/react";
import React, { FC } from "react";
import ResumeItem from "../../interface/resumeItem.interface";

const ResumeComponent: FC<{item:ResumeItem}> = ({item}) => {
    return (
        <>
            <IonCard>
                <IonCardHeader color="success" style={{ fontWeight: "bold" }}>
                    {item.month}
                    <span style={{ float: "right" }}> Disponible {item.balance}</span>
                </IonCardHeader>
                <IonCardContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol>Gastos</IonCol>
                            <IonCol>{item.balance}</IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>
        </>
    )
}

export default ResumeComponent;