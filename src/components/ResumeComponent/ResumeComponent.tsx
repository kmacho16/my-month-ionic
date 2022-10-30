import { IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonIcon, IonItem, IonList, IonPopover, IonRow, useIonAlert } from "@ionic/react";
import { ellipsisVerticalSharp } from "ionicons/icons";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import ResumeItem from "../../interface/resumeItem.interface";
import { deleteResumes } from "../../services/resumes.service";
import { callCloseResume, callDeleteResume } from "../../state/resumes.slice";
import { formatterPeso } from "../../utils/formatter";
import { getMonth, months } from "../../utils/months";
import style from './ResumeComponent.module.css'

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
                        {!item.closed && (
                            <IonItem button={true} detail={false} onClick={() =>
                                presentAlert({
                                    header: 'Seguro que deseas cerrar este mes?',
                                    buttons: [
                                        {
                                            text: 'Cancelar',
                                            role: 'cancel'
                                        },
                                        {
                                            text: 'OK',
                                            role: 'confirm',
                                            handler: () => {
                                                dispatch(callCloseResume({ id: item.id }));
                                            },
                                        },
                                    ],
                                    onDidDismiss: (e: CustomEvent) => {
                                    },
                                })}>
                                Cerrar mes
                            </IonItem>
                        )}
                        <IonItem disabled={item.closed} button={true} detail={false} onClick={() =>
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
                <IonCardHeader id={item.id} className={item.closed ? style.inactiveMonth : style.activeMonth} style={{ fontWeight: "500" }}>
                    {getMonth(item.month)} <small>{item.closed && "[Cerrado]"}</small>
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