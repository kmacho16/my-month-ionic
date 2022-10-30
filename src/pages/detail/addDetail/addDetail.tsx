import { IonButton, IonCol, IonContent, IonFooter, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonSelect, IonSelectOption, IonTextarea } from "@ionic/react";
import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import Title from "../../../components/Title/Title";
import { callPostDetails } from "../../../state/details.slice";
import { formatterPeso } from "../../../utils/formatter";
import styles from './addDetail.module.css';

const AddDetail: FC<any> = () => {
    const dispatch = useDispatch();
    const [balance, setBalance] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [description, setDescription] = useState<string>();
    const [title, setTitle] = useState<string>();
    let { id } = useParams<{ id: string }>();
    const history = useHistory();

    const categories = [
        
        {
            value: "retiro",
            text: "Retiro"
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
            value: "obligaciones",
            text: "Obligaciones"
        },
        {
            value: "celeste",
            text: "Celeste"
        },
        {
            value: "mascotas",
            text: "Mascotas"
        },
        {
            value: "restaurante",
            text: "Restaurante"
        },
        {
            value: "ocio",
            text: "Ocio"
        },
        {
            value: "deudas",
            text: "Deudas"
        },
        {
            value: "otros",
            text: "Otros"
        },
    ];

    const saveDetail = () => {
        if(!balance || !category || !description || !title){
            return;
        }
        const data = {
            balance,
            category,
            title
        }
        dispatch(callPostDetails({ id, body: data }));
        history.goBack();
    }

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
                                    <IonSelectOption key={cat.value} value={cat.value}>{cat.text}</IonSelectOption>
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