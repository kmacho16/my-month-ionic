import { IonCard, IonCardContent, IonCardHeader, IonCol, IonGrid, IonRow } from "@ionic/react";
import { title } from "process";
import { FC, useEffect } from "react";
import DetailItem from "../../interface/detailItem.interface";
import styles from './DetailComponent.module.css';

const DetaillComponent: FC<{ item: DetailItem }> = ({ item }) => {
    const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })

    const categories: any = {
        'ocio': styles.ocio,
        'obligaciones': styles.obligaciones,
        'hogar': styles.hogar,
        'mercado': styles.mercado,
        'otros': styles.otros,
    }

    return (
        <>
            <IonCard>
                <IonCardHeader className={categories[item.categoria]} style={{ fontWeight: "bold" }}>
                    Gasto: {item.titulo}
                    <span style={{ float: "right" }}>{new Date(parseInt(item.fecha)).toLocaleDateString("pt-BR")}</span>
                </IonCardHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol size="4" className={styles.precio}>{formatterPeso.format(item.valor)}</IonCol>
                        <IonCol size="8" className={styles.descripcion}>{item.descripcion}</IonCol>
                    </IonRow>
                </IonGrid>
            </IonCard>
        </>
    )
}

export default DetaillComponent;