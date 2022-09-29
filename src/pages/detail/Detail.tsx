import { IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonPage, IonRefresher, IonRefresherContent, RefresherEventDetail } from "@ionic/react";
import { add, arrowDownSharp, arrowRedo, share, trendingDown, trendingUp } from "ionicons/icons";
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ListDetail from "../../components/ListDetail/ListDetail";
import Title from "../../components/Title/Title";
import DetailItem from "../../interface/detailItem.interface";
import { callDetails } from "../../state/details.slice";
import { RootState } from "../../store";
import styles from './Detail.module.css'
const Detail: FC<any> = () => {
    let { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const [details, setDetails] = useState<DetailItem[]>([]);
    const detailState = useSelector((state: RootState) => state.details);
    
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
                    <Title title="Resumenes" back={true} />
                    <ListDetail items={details} />
                    <IonFab vertical="bottom" horizontal="end" slot="fixed">
                        <IonFabButton>
                            <IonIcon icon={add} />
                        </IonFabButton>
                        <IonFabList side="top">
                            <IonFabButton color='success' onClick={() => {
                            }}>
                                <IonIcon icon={trendingDown} />
                            </IonFabButton>
                            <IonFabButton color='danger' onClick={() => {
                            }}>
                                <IonIcon icon={trendingUp} />
                            </IonFabButton>
                        </IonFabList>
                    </IonFab>
                </IonContent>
            </IonPage>
        </>
    );
}

export default Detail;