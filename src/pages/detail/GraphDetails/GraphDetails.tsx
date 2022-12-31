import { IonCheckbox, IonCol, IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import { FC, useEffect, useState } from "react";
import Title from "../../../components/Title/Title";
import { PieChart, Pie, Cell } from 'recharts';

import styles from './GraphDetails.module.css'
import { useParams } from "react-router";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { formatterPeso } from "../../../utils/formatter";


const GraphDetails: FC<any> = () => {
    let { id } = useParams<{ id: string }>();
    const [data, setData] = useState<any>([])
    const [total, setTotal] = useState(0);
    const [group, setGroup] = useState();

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
        const keys = Object.keys(group);
        const data: any[] = [];
        keys.forEach(item => {
            const percent = (Number(group[item]) * 100) / total;
            const element = { name: item, value: group[item], percent: parseFloat(percent.toFixed(1)), show: true }
            data.push(element);
        });
        data.sort((a, b) => a.value > b.value ? -1 : 1);
        setData(data);
    }

    useEffect(() => {
        groupBy(detailState.details, "categoria");
    }, []);

    useEffect(()=>{
        console.log("datXXXa",data);
    },[data])

    useEffect(() => {
        console.log("gro", group);
        if (group) {
            transformData(group);
        }
    }, [group]);

    const COLORS: any = {
        'ocio': "#F76C27",
        'obligaciones': "#EEE03E",
        'deudas': "#E73F3F",
        'retiro': "#D592CB",
        'hogar': "#6D9DD1",
        'mercado': "#F7469E",
        'otros': "#7E45D3",
        'mascotas': "#CF5949",
        'celeste': "#D580FD",
        'TC': "#D580FD",
        'restaurante': "#dee373",
    }

    return (
        <>
            <IonPage>
                <IonContent>
                    <Title title="Resumen" back={true} />
                    <PieChart width={800} height={200}>

                        <Pie
                            data={data.filter((i: any) => i.show)}
                            cx={180}
                            cy={100}
                            outerRadius={80}

                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.filter((i: any) => i.show).map((entry: any, index: any) => (
                                
                                <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                            ))}
                        </Pie>
                    </PieChart>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <table style={{ width: "100%" }}>
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
                                        {data.map((item: any, index: any) => (
                                            <tr key={`tr-${index}`} className={index % 2 == 0 ? styles.gray_background : ''} style={{ textAlign: "center", height: "25px" }}>
                                                <td><IonCheckbox checked={item.show} onIonChange={(e) => {

                                                    setData((prev: any) => {
                                                        prev[index] = { ...item, show: e.detail.checked };
                                                        console.log(prev);
                                                        return [...prev];
                                                    })
                                                }} slot="start"></IonCheckbox></td>
                                                <td style={{ textTransform: "capitalize" }}>{item.name}</td>
                                                <td>{formatterPeso.format(item.value)}</td>
                                                <td>{item.percent}%</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>
        </>
    );

}

export default GraphDetails;