import { IonCard, IonHeader, IonIcon } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import React, { FC } from "react";
import { useHistory } from "react-router";
import styles from "./Title.module.css";

interface props {
    title: string;
    back?: boolean;
}

const Title: FC<props> = ({ title, back = false }) => {
    const history = useHistory();

    return (
        <IonCard className={styles.title}>
            {back && (
                <IonIcon className={styles.back} icon={arrowBack} onClick={() => {
                    history.goBack();
                }} />
            )}
            <span >
                {title}
            </span>
        </IonCard>
    );

}

export default Title;