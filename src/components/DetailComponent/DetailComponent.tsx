import { IonCard, IonCardContent, IonCardHeader, IonCol, IonGrid, IonRow } from "@ionic/react";
import { title } from "process";
import { FC } from "react";
import DetailItem from "../../interface/detailItem.interface";
import styles from './DetailComponent.module.css';

const DetaillComponent: FC<{ item: DetailItem }> = ({ item }) => {
    const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })

    const categories:any = {
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
                    {item.titulo}
                    <span style={{ float: "right" }}>{formatterPeso.format(item.valor)}</span>
                </IonCardHeader>
                <IonCardContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="3">{item.fecha.toLocaleDateString("pt-BR")}</IonCol>
                            <IonCol size="9"></IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>
        </>
    )
}

export default DetaillComponent;