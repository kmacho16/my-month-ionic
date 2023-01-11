import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonFabList, IonGrid, IonHeader, IonIcon, IonPage, IonRefresher, IonRefresherContent, IonRow, RefresherEventDetail, useIonAlert } from "@ionic/react";
import { add, arrowDownSharp, arrowRedo, filterOutline, pieChartOutline, reorderFourOutline, share, trendingDown, trendingUp } from "ionicons/icons";
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import ListDetail from "../../components/ListDetail/ListDetail";
import Title from "../../components/Title/Title";
import DetailItem from "../../interface/detailItem.interface";
import { callDetails } from "../../state/details.slice";
import { RootState } from "../../store";
import styles from './Detail.module.css'

const Detail: FC<any> = () => {
    const history = useHistory();
    let { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const [details, setDetails] = useState<DetailItem[]>([]);
    const detailState = useSelector((state: RootState) => state.details);
    const [presentAlert] = useIonAlert();
    const funct: any = {
        'date': (a: DetailItem, b: DetailItem) => a.fecha < b.fecha ? 1 : -1,
        'category': (a: DetailItem, b: DetailItem) => a.categoria > b.categoria ? 1 : -1,
        'balance': (a: DetailItem, b: DetailItem) => Number(a.valor) < Number(b.valor) ? 1 : -1,
    }
    const redirectAdd = () => {
        history.push(`${id}/add`);
    }

    const redirectGraph = () => {
        history.push(`${id}/graph`);
    }

    useEffect(() => {
        dispatch(callDetails(id));
    }, []);

    useEffect(() => {
        setDetails(detailState.details);
    }, [detailState]);

    const update = (event: CustomEvent<RefresherEventDetail>) => {
        dispatch(callDetails(id));
        setTimeout(() => {
            event.detail.complete();
        }, 2000)
    }


    return (
        <>
            <IonPage>
                <IonContent>
                    <IonRefresher slot='fixed' onIonRefresh={update}>
                        <IonRefresherContent></IonRefresherContent>
                    </IonRefresher>
                    <Title title="Resumen" back={true} />
                    <IonCard className={styles.cardOptions}>
                        <IonGrid>
                            <IonRow>
                                <IonCol class="ion-text-center" onClick={() =>
                                    presentAlert({
                                        header: 'Ordenar',
                                        buttons: [
                                            {
                                                text: "Ok",
                                                role: "confirm",
                                                handler: (e: any) => {
                                                    const newDetail = [...details];
                                                    newDetail.sort(funct[e]);
                                                    setDetails(newDetail);
                                                }
                                            }
                                        ],
                                        inputs: [
                                            {
                                                label: 'Por fecha',
                                                type: 'radio',
                                                value: 'date',

                                            },
                                            {
                                                label: 'Por categoria',
                                                type: 'radio',
                                                value: 'category',
                                            },
                                            {
                                                label: 'Por valor',
                                                type: 'radio',
                                                value: 'balance',
                                            },
                                        ],
                                    })
                                }>
                                    <span>
                                        <IonIcon style={{color:"#003b93"}} icon={reorderFourOutline} />
                                        
                                    </span>
                                    <br />
                                    <strong style={{color:"#003b93"}}>Filtro</strong>
                                </IonCol>

                                <IonCol class="ion-text-center" onClick={redirectGraph}>
                                    <IonIcon style={{color:"#662a01"}} icon={pieChartOutline} /> <br />
                                    <strong style={{color:"#662a01"}}>Graficos</strong>

                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCard>
                    

                    <IonCard className={styles.cardDetails}>
                        <IonCardHeader>
                            <IonCardTitle style={{ color: "black" }}>Transacciones</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent className={styles.cardContent}>
                            <ListDetail items={details} />
                        </IonCardContent>
                    </IonCard>
                    {!detailState.isClosed && (
                        <IonFab vertical="bottom" horizontal="end" slot="fixed">
                            <IonFabButton>
                                <IonIcon icon={add} />
                            </IonFabButton>
                            <IonFabList side="top">
                                {/*<IonFabButton color='success'>
                                <IonIcon icon={trendingDown} />
                        </IonFabButton>*/}
                                <IonFabButton color='danger' onClick={() => {
                                    redirectAdd()
                                }}>
                                    <IonIcon icon={trendingUp} />
                                </IonFabButton>
                            </IonFabList>
                        </IonFab>
                    )}
                </IonContent>
            </IonPage>
        </>
    );
}

export default Detail;