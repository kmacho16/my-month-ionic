import { CheckboxCustomEvent, IonButton, IonButtons, IonCheckbox, IonCol, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonRow, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import React, { FC, useState } from "react";
import styles from './CategoryListComponent.module.css';
import { categories } from "../../utils/categories";

const CategoryListComponent: FC<any> = (props) => {
    const [selectedCategory, setSelectedCategory] = useState<any>();

    const confirmChanges = () => {
        const { onSelectionChange } = props;
        if (onSelectionChange !== undefined) {
            onSelectionChange(selectedCategory);
        }
    };

    const cancelChanges = () => {
        const { onSelectionCancel } = props;
        if (onSelectionCancel !== undefined) {
            onSelectionCancel();
        }
    };


    const checkboxChange = (ev: CheckboxCustomEvent) => {
        const { checked, value } = ev.detail;
        if (checked) {
            setSelectedCategory(value);
        }
    };

    return (
        <>
            <IonHeader >
                <IonToolbar color="light">
                    <IonButtons slot="start">
                        <IonButton onClick={cancelChanges}>Cancel</IonButton>
                    </IonButtons>
                    <IonTitle>Categorias</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={confirmChanges}>Done</IonButton>
                    </IonButtons>
                </IonToolbar>
                <IonToolbar color="light">
                    <IonSearchbar onIonInput={e => e}></IonSearchbar>
                </IonToolbar>
            </IonHeader>

            <IonContent class="ion-padding">
                <IonList id="modal-list" inset={true}>
                    {categories.map((cat, index) =>
                        <IonItem key={cat.value} >
                            <div className={`${styles.iconDiv} ${cat.styles}`}>
                                <IonIcon icon={cat.icon}></IonIcon>
                            </div>
                            <IonLabel>{cat.text}</IonLabel>
                            <IonCheckbox value={cat} checked={selectedCategory == cat} onIonChange={checkboxChange} slot="end" />
                        </IonItem>
                    )}
                </IonList>
            </IonContent>
        </>

    );

}

export default CategoryListComponent;