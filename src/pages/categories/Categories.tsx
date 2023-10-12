import { IonCard, IonCol, IonContent, IonGrid, IonIcon, IonPage, IonRow } from "@ionic/react";
import React, { FC } from "react";
import Title from "../../components/Title/Title";
import CategoryComponent from "../../components/CategoryComponent/CategoryComponent";

const Categories: FC = () => {
    return(
        <IonPage>
            <IonContent>
                <Title title="Categorias" back={true}/>
                <IonGrid >
                    <IonRow>
                        <IonCol>
                            <CategoryComponent name="Restaurante" icon="arrowRight"/>
                            
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
    
}

export default Categories;