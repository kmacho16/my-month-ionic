import { airplaneSharp, alertCircleSharp, americanFootballSharp, bagHandle, bagSharp, bedSharp, bonfireSharp, busSharp, carSharp, cardOutline, cartOutline, cashOutline, cashSharp, fastFoodOutline, flowerOutline, hammerOutline, homeSharp, medkitSharp, pawSharp, planetSharp, restaurantSharp, shirtOutline, trailSignOutline, walletOutline } from 'ionicons/icons';
import styles from './categories.module.css';

export const categories = [

    {
        value: "retiro",
        text: "Retiro",
        styles: styles.retiro,
        icon: cashOutline,
        color: "#D592CB",
        subcategory: [
            {
                value: "retiro",
                text: "Retiro",
                styles: styles.retiro,
                icon: cashOutline,
            }
        ]
    },
    {
        value: "hogar",
        text: "Hogar",
        styles: styles.hogar,
        icon: homeSharp,
        color: '#6D9DD1',
        subcategory: [
            {
                value: "servicios",
                text: "Servicios",
                styles: styles.hogar,
                icon: homeSharp
            },
            {
                value: "gasolina",
                text: "Gasolina",
                styles: styles.hogar,
                icon: carSharp
            },
            {
                value: "mejoras",
                text: "Mejoras",
                styles: styles.hogar,
                icon: bagHandle
            },
            {
                value: "arreglos",
                text: "Arreglos",
                styles: styles.hogar,
                icon: hammerOutline
            }
        ]
    },
    {
        value: "mercado",
        text: "Mercado",
        styles: styles.mercado,
        icon: cartOutline,
        color: '#F7469E',
        subcategory: [
            {
                value: "mensual",
                text: "Mensual",
                styles: styles.mercado,
                icon: cartOutline
            },
            {
                value: "diario",
                text: "Diario",
                styles: styles.mercado,
                icon: cartOutline
            }
        ]
    },
    {
        value: "obligaciones",
        text: "Obligaciones",
        styles: styles.obligaciones,
        icon: walletOutline,
        color: "#EEE03E",
        subcategory: [
            {
                value: "cris",
                text: "Cris",
                styles: styles.obligaciones,
                icon: walletOutline
            },
            {
                value: "papas",
                text: "Papás",
                styles: styles.obligaciones,
                icon: walletOutline
            },
            {
                value: "otros",
                text: "Otros",
                styles: styles.obligaciones,
                icon: walletOutline
            }
        ]
    },
    {
        value: "celeste",
        text: "Celeste",
        styles: styles.celeste,
        icon: flowerOutline,
        color: "#D580FD",
        subcategory: [
            {
                value: "comida",
                text: "Comida",
                styles: styles.celeste,
                icon: restaurantSharp,
            },
            {
                value: "salud",
                text: "Salud",
                styles: styles.celeste,
                icon: medkitSharp,
            },
            {
                value: "ropa",
                text: "Ropa",
                styles: styles.celeste,
                icon: shirtOutline,
            },
            {
                value: "otros",
                text: "Otros",
                styles: styles.celeste,
                icon: flowerOutline,
            }
        ]
    },
    {
        value: "mascotas",
        text: "Mascotas",
        styles: styles.mascotas,
        icon: pawSharp,
        color: "#CF5949",
        subcategory: [
            {
                value: "comida",
                text: "Comida",
                styles: styles.mascotas,
                icon: pawSharp,
            },
            {
                value: "salud",
                text: "Salud",
                styles: styles.mascotas,
                icon: medkitSharp,
            },
            {
                value: "otros",
                text: "Otros",
                styles: styles.mascotas,
                icon: pawSharp,
            }
        ]
    },
    {
        value: "restaurante",
        text: "Restaurante",
        styles: styles.restaurante,
        icon: fastFoodOutline,
        color: "#dee373",
        subcategory: [
            {
                value: "casual",
                text: "Casual",
                styles: styles.restaurante,
                icon: fastFoodOutline,
            },
            {
                value: "espacial",
                text: "Espacial",
                styles: styles.restaurante,
                icon: fastFoodOutline,
            },
            {
                value: "emergencia",
                text: "Emergencia",
                styles: styles.restaurante,
                icon: fastFoodOutline,
            }
        ]
    },
    {
        value: "ocio",
        text: "Ocio",
        styles: styles.ocio,
        icon: trailSignOutline,
        color: "#F76C27",
        subcategory: [
            {
                value: "actividades",
                text: "Actividades",
                styles: styles.ocio,
                icon: trailSignOutline,
            },
            {
                value: "accesorios",
                text: "Accesorios",
                styles: styles.ocio,
                icon: trailSignOutline,
            },
            {
                value: "otros",
                text: "Otros",
                styles: styles.ocio,
                icon: trailSignOutline,
            }
        ]
    },
    {
        value: "deudas",
        text: "Deudas",
        styles: styles.deudas,
        icon: cardOutline,
        color: "#E73F3F",
        subcategory: [
            {
                value: "tarjetas",
                text: "Tarjetas",
                styles: styles.deudas,
                icon: cardOutline,
            },
            {
                value: "multas",
                text: "Multas",
                styles: styles.deudas,
                icon: cardOutline,
            },
            {
                value: "personales",
                text: "Personales",
                styles: styles.deudas,
                icon: cardOutline,
            },
            {
                value: "otros",
                text: "Otros",
                styles: styles.deudas,
                icon: cardOutline,
            }
        ]
    },
    {
        value: "income",
        text: "ingresos",
        styles: styles.income,
        icon: cashSharp,
        color: "#009111",
        subcategory: [
            {
                value: "salario",
                text: "Salario",
                styles: styles.otros,
                icon: alertCircleSharp,
            },
            {
                value: "otros",
                text: "Otros",
                styles: styles.otros,
                icon: alertCircleSharp,
            }
        ]
    },
    {
        value: "otros",
        text: "Otros",
        styles: styles.otros,
        icon: alertCircleSharp,
        color: "#7E45D3",
        subcategory: [
            {
                value: "otros",
                text: "Otros",
                styles: styles.otros,
                icon: alertCircleSharp,
            }
        ]
    },
    {
        value: "viajes",
        text: "Viajes",
        styles: styles.viajes,
        icon: airplaneSharp,
        color: "#3aa25a",
        subcategory: [
            {
                value: "comida",
                text: "Comida",
                styles: styles.viajes,
                icon: restaurantSharp,
            },
            {
                value: "compras",
                text: "Compras",
                styles: styles.viajes,
                icon: bagSharp,
            },
            {
                value: "hospedaje",
                text: "Hospedaje",
                styles: styles.viajes,
                icon: bedSharp,
            },

            {
                value: "tours",
                text: "Tours",
                styles: styles.viajes,
                icon: bonfireSharp,
            },

            {
                value: "transporte",
                text: "Transporte",
                styles: styles.viajes,
                icon: busSharp,
            },
            {
                value: "salud",
                text: "Salud",
                styles: styles.viajes,
                icon: medkitSharp,
            },
        ]
    },
]


export const getByValue = (value: string) => {
    return categories.find(i => i.value == value);
}