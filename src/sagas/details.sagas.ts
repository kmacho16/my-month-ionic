import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import DetailItem from "../interface/detailItem.interface";
import { DONE, FAILED } from "../interface/status.interface";
import { getDetails, postDetails } from "../services/detail.service";
import { setDetails, STATE_NAME } from "../state/details.slice";

function* onCallDetails(action: PayloadAction<string>) {
    try {
        const { Item } = yield call(getDetails, action.payload);
        const items: DetailItem[] = [];
        yield Item.details.forEach((detail: any) => {
            let aux: DetailItem = {
                id: detail._id,
                categoria: detail.category,
                titulo: detail.title,
                valor: detail.balance,
                fecha: detail.date,
                descripcion: detail.description
            }
            items.push(aux)
            //PENDIENTE CReAR NUEVO ELEMENTO PARA EL STATE DETAIL
        });
        yield put(setDetails({ uuid: Item._id, status: DONE, details: items, loaded: true }))
    } catch (e) {
        yield put(setDetails({ uuid: "", status: FAILED, details: [], loaded: true }))
    }
}

function* onCallPostResume(action: PayloadAction<{ id: string, body: any }>) {
    try {
        console.log("payload", action.payload);
        const { Item } = yield call(postDetails, action.payload.id, action.payload.body);
        console.log("items", Item);
    } catch (e) {
        console.log("error", e);
    }

}

export default [
    takeEvery(`${STATE_NAME}/callDetails`, onCallDetails),
    takeEvery(`${STATE_NAME}/callPostDetails`, onCallPostResume),
]