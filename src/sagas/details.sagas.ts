import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import DetailItem from "../interface/detailItem.interface";
import { DONE, FAILED } from "../interface/status.interface";
import { getDetails } from "../services/detail.service";
import { setDetails, STATE_NAME } from "../state/details.slice";

function* onCallDetails (action:PayloadAction<string>) {
    try{
        const {Item} = yield call(getDetails, action.payload);
        console.log("detauls", Item);
        const items:DetailItem[] = [];
        yield Item.details.forEach((detail:any)=>{
             let aux: DetailItem = {
                id : detail._id,
                categoria: detail.category,
                titulo: detail.title,
                valor: detail.value,
                fecha: detail.date,
                descripcion: detail.description
             }
             items.push(aux)
            //PENDIENTE CReAR NUEVO ELEMENTO PARA EL STATE DETAIL
        });
        console.log("eee", items);  
        yield put(setDetails({uuid: Item._id,status: DONE, details: items, loaded: true}))
    }catch(e){
        console.log("err", e)
        yield put(setDetails({uuid: "",status: FAILED, details: [], loaded: true}))
    }
}

export default [
    takeEvery(`${STATE_NAME}/callDetails`, onCallDetails),
]