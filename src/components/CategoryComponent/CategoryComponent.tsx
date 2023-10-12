import { IonCard, IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react";
import { arrowBack, arrowBackCircle, arrowForwardCircle } from "ionicons/icons";
import React, { FC } from "react";

interface props {
    name: string;
    icon: string;
}

const CategoryComponent: FC<{ name: string, icon: string }> = ({ name, icon }) => {
    const icons: any = {
        'arrowBack': arrowBackCircle,
        'arrowRight': arrowForwardCircle
    }
    return (
        <>
            <IonCard style={{ padding: '1em' }} onClick={() => {
            }}>
                <IonGrid>
                    <IonRow>
                        <IonCol size="10">
                            <strong>{name}</strong>
                        </IonCol>
                        <IonCol size="2">
                            <IonIcon icon={icons[icon]}>
                            </IonIcon>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCard>
        </>
    );

}

export default CategoryComponent;