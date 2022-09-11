import { IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonPage } from "@ionic/react";
import { add, arrowDownSharp, arrowRedo, share, trendingDown, trendingUp } from "ionicons/icons";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import ListDetail from "../../components/ListDetail/ListDetail";
import Title from "../../components/Title/Title";
import styles from './Detail.module.css'
const Detail: FC<any> = () => {
    let { id } = useParams<{ id: string }>();
    useEffect(() => {
        console.log("params", id);
    }, [])

    return (
        <>
            <IonPage>
                <IonContent>
                    <Title title="Resumenes" back={true} />
                    <ListDetail />
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