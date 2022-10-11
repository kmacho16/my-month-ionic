import { deleteResumes, getAll, post } from "../services/resumes.service";
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { callGetAll, setResumes, STATE_NAME } from "../state/resumes.slice";
import { DONE, FAILED } from "../interface/status.interface";
import ResumeItem from "../interface/resumeItem.interface";
import { PayloadAction } from "@reduxjs/toolkit";

function* onGetAll(){
    try{
        const {Items} =  yield call(getAll);
        const list:ResumeItem[] = [];
        Items.map((item:any) =>{
            let newItem: ResumeItem = {
                id : item._id,
                balance: item.balance,
                month: item.month,
                expenses: item.expenses
            }
            list.push(newItem);
        })
        yield put(setResumes({loaded: true, resumes: list, status: DONE}))
    }catch(e){
        yield put(setResumes({loaded: true, resumes: [], status: FAILED}))
    }
}

function* onCallPostResume(action: PayloadAction<{month: string, balance: string}>) {
    try{
        const {message} = yield call(post, action.payload);
        yield put(callGetAll())
    }catch(e){
        console.log("err", e)
    }
}

function* onCallDeleteResume(action: PayloadAction<{id: string}>){
    const {message} = yield call(deleteResumes, action.payload.id);
    yield put(callGetAll())
}

export default [
    takeEvery(`${STATE_NAME}/callGetAll`, onGetAll),
    takeEvery(`${STATE_NAME}/callPostResume`, onCallPostResume),  
    takeEvery(`${STATE_NAME}/callDeleteResume`, onCallDeleteResume),        
];