import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar, useIonPicker } from "@ionic/react";
import { arrowBack, arrowDown, calendar } from "ionicons/icons";
import { FC, useState } from "react";
import styles from './Add.module.css';
import { useHistory } from 'react-router';
import Title from "../../components/Title/Title";

const Add: FC<any> = () => {
    const [present] = useIonPicker();
    const history = useHistory();

    const [month, setMonth] = useState('01');
    const [initialBalance, setInitialBalance] = useState<string>();

    const months = [
        {
            text: 'Enero',
            value: '01',
        },
        {
            text: 'Febrero',
            value: '02',
        },
        {
            text: 'Marzo',
            value: '03',
        },
        {
            text: 'Abril',
            value: '04',
        },
        {
            text: 'Mayo',
            value: '05',
        },
        {
            text: 'Junio',
            value: '06',
        },
        {
            text: 'Julio',
            value: '07',
        },
        {
            text: 'Agosto',
            value: '08',
        },
        {
            text: 'Septiembre',
            value: '09',
        },
        {
            text: 'Octubre',
            value: '10',
        },
        {
            text: 'Noviembre',
            value: '11',
        },
        {
            text: 'Diciembre',
            value: '12',
        },
    ];

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
                <Title title="agregar periodo" back={true}/>
                <br />
                <IonRow>
                    <IonCol size="10" class={styles.select}>
                        <IonLabel class={styles.labelMonth}>{months.find(i => i.value == month)?.text}</IonLabel>
                    </IonCol>
                    <IonCol size="2">
                        <IonButton onClick={openPicker}>
                            <IonIcon icon={calendar} />
                        </IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonInput value={initialBalance} placeholder="Balance" onIonChange={(e) => setInitialBalance("")} clearInput></IonInput>
                    </IonCol>
                </IonRow>
                <IonFooter>
                    <IonButton className={styles.saveBtn} >
                        Guardar
                    </IonButton>
                </IonFooter>
            </IonContent>
        </IonPage>
    );

}

export default Add;