import { IonContent, IonPage, IonRow } from "@ionic/react";
import Title from "../../components/Title/Title";

const Settings: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <Title title="Configuracion" back={true} />
            </IonContent>
            <IonRow>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores distinctio, dolorum corrupti fugit, eveniet laboriosam ducimus ratione, officia velit mollitia dignissimos nobis alias reprehenderit accusamus consectetur suscipit. Ullam, quibusdam eius.
            </IonRow>
        </IonPage>
    );
}

export default Settings;