import { IonCard, IonCol, IonContent, IonGrid, IonIcon, IonPage, IonRow } from "@ionic/react";
import Title from "../../components/Title/Title";
import { arrowForwardSharp } from "ionicons/icons";
import { useHistory } from "react-router";

const Settings: React.FC = () => {
    const history = useHistory();

    return (
        <IonPage>
            <IonContent>
                <Title title="Configuracion" back={true} />
                <IonGrid >
                    <IonRow>
                        <IonCol>
                            <IonCard style={{padding:'1em'}} onClick={()=>{
                                history.push("/categories");
                            }}>
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size="10">
                                            <strong>Categorias</strong>
                                        </IonCol>
                                        <IonCol size="2">
                                            <IonIcon icon={arrowForwardSharp}></IonIcon>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>


        </IonPage>
    );
}

export default Settings;