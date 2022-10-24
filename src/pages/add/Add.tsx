import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar, useIonPicker } from "@ionic/react";
import { arrowBack, arrowDown, calendar } from "ionicons/icons";
import { FC, useEffect, useState } from "react";
import styles from './Add.module.css';
import { useHistory } from 'react-router';
import Title from "../../components/Title/Title";
import { getMonth, months } from "../../utils/months";
import { useDispatch, useSelector } from "react-redux";
import { callPostResume } from "../../state/resumes.slice";
import { RootState } from "../../store";
import { DONE } from "../../interface/status.interface";

const Add: FC<any> = () => {
    const dispatch = useDispatch();
    const [present] = useIonPicker();
    const history = useHistory();

    const [month, setMonth] = useState<string>('01');
    const [initialBalance, setInitialBalance] = useState<number>(0);
    const resumes = useSelector((state: RootState)=> state.resumes)

    const addRecord = () =>{
        const data:{month:string, balance: string} = {
            month,
            balance: String(initialBalance)!
        }
        dispatch(callPostResume(data));
        history.goBack();
    }


    const openPicker = async () => {
        present({
            columns: [
                {
                    name: 'month',
                    options: months,
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                },
                {
                    text: 'Confirm',
                    handler: (value) => {
                        setMonth(value.month.value);
                    },
                },
            ],
        });
    };

    return (
        <IonPage>
            <IonContent>
                <Title title="agregar periodo" back={true} />
                <br />
                <IonRow>
                    <IonCol size="10" class={styles.select}>
                        <IonLabel class={styles.labelMonth}>{getMonth(month)}</IonLabel>
                    </IonCol>
                    <IonCol size="2">
                        <IonButton onClick={openPicker}>
                            <IonIcon icon={calendar} />
                        </IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonInput value={initialBalance} placeholder="Balance" onIonChange={(e) => setInitialBalance(e.target.value as number)} clearInput></IonInput>
                    </IonCol>
                </IonRow>
                <IonFooter>
                    <IonButton onClick={addRecord} className={styles.saveBtn} >
                        Guardar
                    </IonButton>
                </IonFooter>
            </IonContent>
        </IonPage>
    );

}

export default Add;