import { IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonIcon, IonItem, IonList, IonPopover, IonRow } from "@ionic/react";
import { ellipsisVerticalSharp } from "ionicons/icons";
import React, { FC } from "react";
import { useHistory } from "react-router";
import ResumeItem from "../../interface/resumeItem.interface";
import { formatterPeso } from "../../utils/formatter";
import { getMonth, months } from "../../utils/months";

const ResumeComponent: FC<{ item: ResumeItem }> = ({ item }) => {
    const history = useHistory();

    const redirectAdd = () => {
        history.push(`/detail/${item.id}`);
    }

    return (
        <>
            <IonPopover trigger={item.id} dismissOnSelect={true}>
                <IonContent>
                    <IonList>
                        <IonItem button={true} detail={false} onClick={() => {
                            redirectAdd();
                        }}>
                            Ver
                        </IonItem>
                        <IonItem button={true} detail={false}>
                            Eliminar
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonPopover>
            <IonCard>
                <IonCardHeader id={item.id} color="success" style={{ fontWeight: "bold" }}>
                    {getMonth(item.month)}
                    <span style={{ float: "right" }}>
                        Disponible {formatterPeso.format((item.balance - item.expenses))}
                    </span>
                </IonCardHeader>

                <IonCardContent onClick={() => {
                    redirectAdd();
                }}>
                    <IonGrid>
                        <IonRow>
                            <IonCol>Gastos</IonCol>
                            <IonCol>{formatterPeso.format(item.expenses)}</IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>
        </>
    )
}

export default ResumeComponent;