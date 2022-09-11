import { IonCard, IonCardContent, IonCardHeader, IonCol, IonGrid, IonRow } from "@ionic/react";
import React, { FC } from "react";
import { useHistory } from "react-router";
import ResumeItem from "../../interface/resumeItem.interface";

const ResumeComponent: FC<{ item: ResumeItem }> = ({ item }) => {
    const history = useHistory();

    const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })

    const redirectAdd = () => {
        history.push(`/detail/${item.id}`);
    }

    return (
        <>
            <IonCard onClick={() => {
                redirectAdd();
            }}>
                <IonCardHeader color="success" style={{ fontWeight: "bold" }}>
                    {item.month}
                    <span style={{ float: "right" }}> Disponible {formatterPeso.format(item.balance)}</span>
                </IonCardHeader>
                <IonCardContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol>Gastos</IonCol>
                            <IonCol>{formatterPeso.format(item.balance)}</IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>
        </>
    )
}

export default ResumeComponent;