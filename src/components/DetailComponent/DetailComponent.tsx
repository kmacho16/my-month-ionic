import { IonAccordion, IonAccordionGroup, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonIcon, IonItem, IonList, IonPopover, IonRow, useIonAlert } from "@ionic/react";
import { alertCircleSharp, cardOutline, cartOutline, cashOutline, fastFood, fastFoodOutline, flowerOutline, homeSharp, informationCircle, pawSharp, pizzaOutline, settingsSharp, star, trailSignOutline, walletOutline } from "ionicons/icons";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailItem from "../../interface/detailItem.interface";
import { callDeleteDetail } from "../../state/details.slice";
import { RootState } from "../../store";
import { formatterPeso } from "../../utils/formatter";
import styles from './DetailComponent.module.css';

const DetaillComponent: FC<{ item: DetailItem, maxSize: number, index: number }> = ({ item, maxSize, index }) => {
    const [presentAlert] = useIonAlert();
    const detailState = useSelector((state: RootState) => state.details);
    const dispatch = useDispatch();




    const categories: any = {
        'ocio': { styles: styles.ocio, icon: trailSignOutline },
        'obligaciones': { styles: styles.obligaciones, icon: walletOutline },
        'deudas': { styles: styles.deudas, icon: cardOutline },
        'hogar': { styles: styles.hogar, icon: homeSharp },
        'mercado': { styles: styles.mercado, icon: cartOutline },
        'otros': { styles: styles.otros, icon: alertCircleSharp },
        'retiro': { styles: styles.retiro, icon: cashOutline },
        'mascotas': { styles: styles.mascotas, icon: pawSharp },
        'celeste': { styles: styles.celeste, icon: flowerOutline },
        'TC': { styles: styles.TC, },
        'restaurante': { styles: styles.restaurante, icon: fastFoodOutline },
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
            <IonAccordionGroup>
                <IonAccordion>
                    <IonGrid style={{background:"white"}} slot="header">
                        <IonRow >
                            <IonCol size="2">
                                <section className={`${styles.shape_circle} ${categories[item.categoria]['styles']}`}>
                                    <IonIcon icon={categories[item.categoria]['icon']} />
                                </section>
                            </IonCol>

                            <IonCol size="6">
                                <section className={styles.title}>
                                    {item.titulo}
                                </section>
                                <small className={styles.category}>
                                    {item.categoria}
                                </small>
                            </IonCol>
                            <IonCol size="4">
                                {item.tarjetaCredito && <IonIcon className={styles.isCreditCard} icon={cardOutline} />}
                                <span className={styles.precio} >{formatterPeso.format(item.valor)}</span> <br />
                                <small className={styles.date}>{new Date(parseInt(item.fecha)).toLocaleDateString("pt-BR")}</small>
                            </IonCol>
                        </IonRow>
                    </IonGrid>

                    <div className={`ion-padding ${styles.description}`} slot="content">
                        <IonGrid>
                            <IonRow>
                                <IonCol size="11">
                                    {item.descripcion}
                                </IonCol>
                                <IonCol size="1">
                                    <IonIcon id={item.id} icon={settingsSharp} />
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </div>
                <div className={styles.line}></div>
                </IonAccordion>

            </IonAccordionGroup>
        </>
    )
}

export default DetaillComponent;