import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCheckbox, IonCol, IonContent, IonFooter, IonIcon, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonRow, IonSelect, IonSelectOption, IonTextarea } from "@ionic/react";
import "react-datepicker/dist/react-datepicker.css";
import React, { FC, forwardRef, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import Title from "../../../components/Title/Title";
import { callPostDetails } from "../../../state/details.slice";
import { formatterPeso } from "../../../utils/formatter";
import styles from './addDetail.module.css';
import ReactDatePicker from "react-datepicker";
import { caretDown, checkmark, flowerOutline } from "ionicons/icons";
import CategoryListComponent from "../../../components/CategoryListComponent/CategoryListComponent";
import { categories } from "../../../utils/categories";
import SubcategoryListComponent from "../../../components/SubcategoryListComponent/SubcategoryListComponent";

const AddDetail: FC<any> = () => {
    const dispatch = useDispatch();
    const [balance, setBalance] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [subcategory, setSubcategory] = useState<string>("");
    const [description, setDescription] = useState<string>();
    const [title, setTitle] = useState<string>("Titulo");
    const [tcChecked, setChecked] = useState<boolean>(false);
    const [showTitle, setShowTitle] = useState<boolean>(false);
    const modalCategory = useRef<HTMLIonModalElement>(null);
    const modalSubcategory = useRef<HTMLIonModalElement>(null);


    let { id } = useParams<{ id: string }>();
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [selectedCategory, setSelectedCategory] = useState<any>(categories[0]);
    const [selectedSubCategory, setSelectedSubCategory] = useState<any>(categories[0].subcategory[0]);

    const CustomInputDate = forwardRef(({ value, onClick }: any, ref: any) => (
        <div className={styles.divToCenter}>
            <IonInput onClick={onClick} ref={ref} style={{ borderBottom: 'solid 2px #ddd' }} value={value!} placeholder="Balance" clearInput></IonInput>
        </div>
    ));

    const onCategoryChange = (category: any) => {
        setSelectedCategory(category);
        setCategory(category.value);
        setSelectedSubCategory(category.subcategory[0]);
        modalCategory.current?.dismiss();
    }
    const onSubCategoryChange = (subcategory: any) => {
        if (subcategory) {
            setSelectedSubCategory(subcategory);
        } else {
            setSelectedSubCategory(selectedCategory.subcategory[0]);
        }
        setSubcategory(selectedSubCategory.value)
        modalSubcategory.current?.dismiss();
    }


    const saveDetail = () => {
        if (!balance || !category || !description || !title || !subcategory) {
            return;
        }
        const data = {
            balance,
            category,
            title,
            description,
            credit_card: tcChecked,
            date: startDate.getTime()
        }
        //console.log(data)
        dispatch(callPostDetails({ id, body: data }));
        history.goBack();
    }

    return (
        <>
            <IonPage>
                <IonContent>
                    <Title title="agregar gasto" back={true} />
                    <IonCard style={{ margin: '2em', paddingBottom: '3em' }}>
                        <IonCardHeader>
                            {!showTitle && <div className={styles.divToCenter}>
                                <h3 onClick={e => setShowTitle(true)}>{title}</h3></div>}
                            {showTitle && <div className={styles.divToCenter}>
                                <IonInput style={{ borderBottom: 'solid 2px #ddd', margin: '0 30px' }} placeholder="Titulo" type="text" value={title} onIonChange={(e: any) => { setTitle(e.detail.value) }} />
                                <IonButton onClick={e => setShowTitle(false)}>
                                    <IonIcon icon={checkmark} ></IonIcon>
                                </IonButton>
                            </div>}
                        </IonCardHeader>
                        <IonCardContent>
                            <IonRow>
                                <IonCol size="12">
                                    <div className={styles.divToCenter}>
                                        Fecha</div>
                                    <div className={styles.divToCenter}>

                                        <ReactDatePicker portalId="kk" selected={startDate} onChange={(date: any) => setStartDate(date)} customInput={<CustomInputDate />}
                                        />
                                    </div>
                                </IonCol>
                                <IonCol>
                                    <IonCard button={true} id="select-category">
                                        <div className={styles.divToCenter}>
                                            <div className={`${styles.iconSection} ${selectedCategory.styles}`}>
                                                <IonIcon style={{ height: '30px', width: '30px' }} icon={selectedCategory.icon}>
                                                </IonIcon>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <h5 style={{ marginRight: '10px', marginBottom: '10px' }}>{selectedCategory.text}</h5> <IonIcon style={{ marginBottom: '10px' }} icon={caretDown}></IonIcon>
                                        </div>
                                    </IonCard>

                                </IonCol>
                                <IonCol>
                                    <IonCard button={true} id="select-subcategory"  >
                                        <div className={styles.divToCenter}>
                                            <div className={`${styles.iconSection} ${selectedSubCategory.styles}`}>
                                                <IonIcon style={{ height: '30px', width: '30px' }} icon={selectedSubCategory.icon}>
                                                </IonIcon>
                                            </div>
                                        </div>
                                        <div className={styles.divToCenter}>
                                            <h5 style={{ marginRight: '10px', marginBottom: '10px' }}>{selectedSubCategory.text}</h5> <IonIcon style={{ marginBottom: '10px' }} icon={caretDown}></IonIcon>
                                        </div>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="12">
                                    <div className={styles.divToCenter}>
                                        Balance</div>
                                    <div className={styles.divToCenter}>
                                        <IonInput style={{ borderBottom: 'solid 2px #ddd', margin: '0 30px' }} value={balance!} placeholder="Balance" onIonChange={(e) => setBalance(e.target.value as string)} clearInput></IonInput>
                                    </div>
                                </IonCol>
                                <IonCol size="12">

                                    <div className={styles.divToCenter}>
                                        <IonTextarea style={{ border: '2px solid #ddd', borderRadius: '20px' }} rows={3} cols={20} placeholder="Descripcion" value={description} onIonChange={e => setDescription(e.detail.value!)}></IonTextarea>
                                    </div>
                                </IonCol>
                                <IonCol size="12">
                                    <IonItem>
                                        <IonCheckbox checked={tcChecked} onIonChange={e => {
                                            setChecked(e.detail.checked);
                                        }} slot="start"></IonCheckbox>
                                        <IonLabel>Compra con tarjeta</IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                        </IonCardContent>
                    </IonCard>
                    <IonRow>
                        <IonCol>
                            <div className={styles.divToCenter} style={{ margin: '-36px 20px 0' }}>
                                <IonButton color={"danger"} onClick={() => history.goBack()} style={{ width: '50%', float: 'left' }} >
                                    Cancelar
                                </IonButton>
                                <IonButton onClick={saveDetail} style={{ width: '50%', float: 'right' }} >
                                    Guardar
                                </IonButton>
                            </div>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <ReactDatePicker selected={startDate} onChange={(date: any) => setStartDate(date)} />
                        </IonCol>
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

            <IonModal trigger="select-category" ref={modalCategory}>
                <CategoryListComponent onSelectionChange={onCategoryChange} onSelectionCancel={() => modalCategory.current?.dismiss()} />
            </IonModal>

            <IonModal trigger="select-subcategory" ref={modalSubcategory}>
                <SubcategoryListComponent onSelectionChange={onSubCategoryChange} subcategory={selectedCategory.subcategory} onSelectionCancel={() => modalSubcategory.current?.dismiss()} />
            </IonModal>
        </>
    );
}

export default AddDetail;