import { IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonIcon, IonItem, IonList, IonPopover, IonRow, useIonAlert } from "@ionic/react";
import { ellipsisVerticalSharp } from "ionicons/icons";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import ResumeItem from "../../interface/resumeItem.interface";
import { deleteResumes } from "../../services/resumes.service";
import { callDeleteResume } from "../../state/resumes.slice";
import { formatterPeso } from "../../utils/formatter";
import { getMonth, months } from "../../utils/months";

const ResumeComponent: FC<{ item: ResumeItem }> = ({ item }) => {
    const history = useHistory();
    const [presentAlert] = useIonAlert();
    const dispatch = useDispatch();

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
                        <IonItem button={true} detail={false} onClick={() =>
                            presentAlert({
                                header: 'Seguro que deseas eliminar?',

                                buttons: [
                                    {
                                        text: 'Cancelar',
                                        role: 'cancel'
                                    },
                                    {
                                        text: 'OK',
                                        role: 'confirm',
                                        handler: () => {
                                            dispatch(callDeleteResume({ id: item.id }))
                                            console.log("aa");
                                        },
                                    },
                                ],
                                onDidDismiss: (e: CustomEvent) => {
                                    console.log("aa");
                                },
                            })} >
                            Eliminar
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonPopover>
            <IonCard>
                <IonCardHeader id={item.id} style={{ fontWeight: "500", background: "#63A69F", color:"#0D0D0D"}}>
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