import { IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonItem, IonList, IonPopover, IonRow, useIonAlert } from "@ionic/react";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailItem from "../../interface/detailItem.interface";
import { callDeleteDetail } from "../../state/details.slice";
import { RootState } from "../../store";
import styles from './DetailComponent.module.css';

const DetaillComponent: FC<{ item: DetailItem, actualCat?: string }> = ({ item, actualCat }) => {
    const [presentAlert] = useIonAlert();
    const detailState = useSelector((state: RootState) => state.details);
    const dispatch = useDispatch();


    const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })

    const categories: any = {
        'ocio': styles.ocio,
        'obligaciones': styles.obligaciones,
        'deudas': styles.deudas,
        'hogar': styles.hogar,
        'mercado': styles.mercado,
        'otros': styles.otros,
        'retiro': styles.retiro,
        'mascotas': styles.mascotas,
        'celeste': styles.celeste
    };

    return (
        <>
            <IonPopover trigger={item.id} dismissOnSelect={true}>
                <IonContent>
                    <IonList>
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
                                            console.log("aa", detailState);
                                            dispatch(callDeleteDetail({ id: detailState.uuid!, idDetail: item.id }));
                                        },
                                    },
                                ],
                                onDidDismiss: (e: CustomEvent) => {
                                    console.log("aa");
                                },
                            })
                        }>
                            Eliminar
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonPopover>
            <IonCard>
                <IonCardHeader id={item.id} className={`${styles.text_white} ${categories[item.categoria]}`} style={{ fontWeight: "bold" }}>
                    {item.titulo} <small className={styles.capitalize}>[{item.categoria}]</small>
                    <span style={{ float: "right" }}>{new Date(parseInt(item.fecha)).toLocaleDateString("pt-BR")}</span>
                </IonCardHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol size="4" className={styles.precio}>{formatterPeso.format(item.valor)}</IonCol>
                        <IonCol size="8" className={styles.descripcion}>{item.descripcion}</IonCol>
                    </IonRow>
                </IonGrid>
            </IonCard>
        </>
    )
}

export default DetaillComponent;