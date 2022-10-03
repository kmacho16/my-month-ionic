import { IonButton, IonCol, IonContent, IonFooter, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonSelect, IonSelectOption, IonTextarea } from "@ionic/react";
import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Title from "../../../components/Title/Title";
import { formatterPeso } from "../../../utils/formatter";
import styles from './addDetail.module.css';

const AddDetail: FC<any> = () => {
    const [balance, setBalance] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [description, setDescription] = useState<string>();
    const [title, setTitle] = useState<string>();

    const categories = [
        {
            value: "ocio",
            text: "Ocio"
        },
        {
            value: "obligaciones",
            text: "Obligaciones"
        },
        {
            value: "hogar",
            text: "Hogar"
        },
        {
            value: "mercado",
            text: "Mercado"
        },
        {
            value: "otros",
            text: "Otros"
        },
    ];

    const saveDetail = () => {
        const data = {
            balance,
            category,
            description,
            title
        }
        console.log("data", data);
    }

    useEffect(()=>{
        console.log("balance", balance);
    },[balance])

    return (
        <>
            <IonPage>
                <IonContent>
                    <Title title="agregar periodo" back={true} />
                    <br />
                    <IonRow>
                        <IonCol size="12">
                            <IonInput placeholder="Titulo" type="text" value={title} onIonChange={(e: any) => { setTitle(e.detail.value) }} />
                        </IonCol>
                        <IonCol size="12">
                            <IonSelect value={category} onIonChange={(e) => { setCategory(e.detail.value) }} placeholder="Categoria">
                                {categories.map(cat => (
                                    <IonSelectOption value={cat.value}>{cat.text}</IonSelectOption>
                                ))}
                            </IonSelect>
                        </IonCol>
                        <IonCol size="12">
                            <IonTextarea rows={3} cols={20} placeholder="Descripcion" value={description} onIonChange={e => setDescription(e.detail.value!)}></IonTextarea>
                        </IonCol>
                        <IonCol size="12">
                            <IonInput value={balance!} placeholder="Balance" onIonChange={(e) => setBalance(e.target.value as string)} clearInput></IonInput>
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

export default AddDetail;