import { IonContent, IonHeader, IonPage } from "@ionic/react";
import React, { FC } from "react";
import Title from "../../components/Title/Title";
import styles from './Detail.module.css'
const Detail: FC<any> = () => {
    return (
        <>
            <IonPage>
                <IonContent>
                    <Title title="Resumenes" back={true}/>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus autem rem, consectetur adipisci reprehenderit exercitationem doloribus laudantium, natus eveniet voluptas aliquam architecto optio sit assumenda sapiente commodi, debitis cum neque.
                </IonContent>
            </IonPage>
        </>
    );
}

export default Detail;