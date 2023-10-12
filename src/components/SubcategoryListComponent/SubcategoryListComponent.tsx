import { CheckboxCustomEvent, IonButton, IonButtons, IonCheckbox, IonCol, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonRow, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import React, { FC, useState } from "react";
import styles from './SubcategoryListComponent.module.css';
import { categories } from "../../utils/categories";

interface props {
    subcategory: any[];
    onSelectionChange: (subCategory: any) => void;
    onSelectionCancel: () => void
}

const SubcategoryListComponent: FC<props> = (props) => {
    const [selectedCategory, setSelectedCategory] = useState<any>();
    const { subcategory } = props;

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
                    {subcategory.map((subcat, index) =>
                        <IonItem key={subcat.value} >
                            <div className={`${styles.iconDiv} ${subcat.styles}`}>
                                <IonIcon icon={subcat.icon}></IonIcon>
                            </div>
                            <IonLabel>{subcat.text}</IonLabel>
                            <IonCheckbox value={subcat} checked={selectedCategory == subcat} onIonChange={checkboxChange} slot="end" />
                        </IonItem>
                    )}
                </IonList>
            </IonContent>
        </>

    );

}

export default SubcategoryListComponent;