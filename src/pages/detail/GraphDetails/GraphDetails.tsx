import { IonCheckbox, IonCol, IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import { FC, useEffect, useState } from "react";
import Title from "../../../components/Title/Title";

import styles from './GraphDetails.module.css'
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { formatterPeso } from "../../../utils/formatter";
import { getByValue } from "../../../utils/categories";
ChartJS.register(ArcElement, Tooltip, Legend);


const GraphDetails: FC<any> = () => {
    const [data, setData] = useState<any>([]);
    const [mData, setMdata] = useState<any>({});
    const [total, setTotal] = useState(0);
    const [group, setGroup] = useState();
    const [isLoad, setLoad] = useState<boolean>(false);



    const detailState = useSelector((state: RootState) => state.details);

    const groupBy = (array: any[], key: string) => {
        const group: any = {};
        let total = 1;
        array.forEach((item) => {
            total += Number(item.valor);
            if (group[item[key]] > -1) {
                group[item[key]] = (group[item[key]] + Number(item.valor));
            } else {
                group[item[key]] = Number(item.valor);
            }
        });
        setTotal(total);
        setGroup(group)
        return group;
    }

    const transformData = (group: any) => {
        const labels = Object.keys(group);
        const data: any[] = [];
        const backgroundColor: any[] = [];
        const borderColor: any[] = [];
        labels.forEach(item => {
            if (item != 'income') {

                //const percent = (Number(group[item]) * 100) / total;
                //const element = { name: item, value: group[item], percent: parseFloat(percent.toFixed(1)), show: true }
                data.push(Number(group[item]));
                backgroundColor.push(`${getByValue(item)?.color}87`);
                borderColor.push(getByValue(item)?.color);
            }
        });
        const mData = {
            labels,
            datasets: [
                {
                    label: "categorias",
                    data,
                    backgroundColor,
                    borderColor,
                    borderWidth: 1
                }
            ]
        }
        setMdata(mData);
        setData(data);
    }

    useEffect(() => {
        groupBy(detailState.details, "categoria");
    }, []);

    useEffect(() => {
        if (mData.labels) {
            setLoad(true);
            console.log("mData", mData.datasets[0].data);

        }

    }, [mData])

    useEffect(() => {
        if (group) {
            console.log("gro", group);
            transformData(group);
        }
    }, [group]);

    return (
        <>
            <IonPage>
                <IonContent>
                    <Title title="Resumen" back={true} />
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                {isLoad && <table style={{ width: "100%" }}>
                                    <thead>
                                        <tr>
                                            <th>Mostrar</th>
                                            <th>
                                                Categoria
                                            </th>
                                            <th>
                                                Total
                                            </th>

                                            <th>
                                                Porcentaje
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {mData.labels.map((item: any, index: any) => (
                                            <tr key={`tr-${index}`} className={index % 2 == 0 ? styles.gray_background : ''} style={{ textAlign: "center", height: "25px" }}>
                                                <td><IonCheckbox checked={item.show} onIonChange={(e) => {
                                                    setData((prev: any) => {
                                                        prev[index] = { ...item, show: e.detail.checked };
                                                        return [...prev];
                                                    })
                                                }} slot="start"></IonCheckbox></td>
                                                <td style={{ textTransform: "capitalize" }}>{item}</td>
                                                <td>{formatterPeso.format(mData.datasets[0].data[index])}</td>
                                                <td>{((Number(mData.datasets[0].data[index]) * 100) / total).toFixed(2)}%</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>}
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    {isLoad && <Pie data={mData}  options={{plugins:{tooltip:{enabled:true}}}}/>}

                </IonContent>
            </IonPage>
        </>
    );

}

export default GraphDetails;