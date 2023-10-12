import { IonButton, IonCol, IonContent, IonFooter, IonInput, IonPage, IonRow, IonTextarea } from "@ionic/react";
import Title from "../../../components/Title/Title";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { callPostDetails } from "../../../state/details.slice";
import { useHistory, useParams } from "react-router";
import styles from './AddIncome.module.css';

const AddIncome = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState<string>();
    const [balance, setBalance] = useState<string>("");
    const [description, setDescription] = useState<string>();

    let { id } = useParams<{ id: string }>();
    const history = useHistory();

    const category = "income";

    const saveDetail = () => {
        if (!balance  || !title) {
            return;
        }
        const data = {
            balance,
            category,
            title,
            description
        }
        dispatch(callPostDetails({ id, body: data }));
        history.goBack();
    }

    return (
        <>
            <IonPage>
                <IonContent>
                    <Title title="agregar ingreso" back={true} />
                    <IonRow>
                        <IonCol size="12">
                            <IonInput placeholder="Titulo" type="text" value={title} onIonChange={(e: any) => { setTitle(e.detail.value) }} />
                        </IonCol>
                        <IonCol size="12">
                            <IonInput value={balance!} placeholder="Balance" onIonChange={(e) => setBalance(e.target.value as string)} clearInput></IonInput>
                        </IonCol>
                        <IonCol size="12">
                            <IonTextarea rows={3} cols={20} placeholder="Descripcion" value={description} onIonChange={e => setDescription(e.detail.value!)}></IonTextarea>
                        </IonCol>
                    </IonRow>
                    <IonFooter>
                        <IonButton onClick={saveDetail} className={styles.saveBtn} >
                            Guardar
                        </IonButton>
                    </IonFooter>
                </IonContent>

            </IonPage>
        </>
    );

}
export default AddIncome;