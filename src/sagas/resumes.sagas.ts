import { getAll } from "../services/resumes.service";
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { setResumes, STATE_NAME } from "../state/resumes.slice";
import { DONE, FAILED } from "../interface/status.interface";
import ResumeItem from "../interface/resumeItem.interface";

function* onGetAll(){
    try{
        const {Items} =  yield call(getAll);
        const list:ResumeItem[] = [];
        console.log("aaa", Items);

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

export default [
    takeEvery(`${STATE_NAME}/callGetAll`, onGetAll)
];