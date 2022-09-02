import { IonButton, IonContent, IonInput, IonItem, IonItemDivider, IonLabel, IonPage, IonSelect, IonSelectOption, useIonPicker } from "@ionic/react";
import { FC, useState } from "react";

const Add: FC<any> = () => {
    const [present] = useIonPicker();
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
                <IonLabel>{months.find(i => i.value == month)?.text}</IonLabel>
                <IonButton onClick={openPicker}>Open</IonButton>

                <IonItemDivider>Input with clear button when there is a value</IonItemDivider>
                <IonItem>
                    <IonInput value={initialBalance} placeholder="Enter Input" onIonChange={(e) => setInitialBalance("")} clearInput></IonInput>
                </IonItem>
            </IonContent>
        </IonPage>
    );

}

export default Add;