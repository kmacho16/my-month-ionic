import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import DetailItem from "../interface/detailItem.interface";
import { IDLE, Status } from "../interface/status.interface";

export const STATE_NAME = "DETAILS";

export interface State {
    status: Status,
    details: DetailItem[],
    uuid?: string,
    detailStats?: [],
    expenses:number,
    credit:number,
    isClosed?:boolean,
    balance: number,
    incomes: number,
    loaded: boolean
}

const initialState: State ={
    status: IDLE, 
    loaded: false,
    expenses: 0,
    credit: 0,
    balance: 0,
    incomes:0,
    details: []
}

export const detailsSlice = createSlice({
    name: STATE_NAME,
    initialState,
    reducers: {
        callDetails: (state:State, action: PayloadAction<string>) => {},
        setDetails: (state:State, action: PayloadAction<State>) => {
            state.details = action.payload.details;
            state.uuid = action.payload.uuid;
            state.loaded = action.payload.loaded;
            state.status = action.payload.status;
            state.isClosed = action.payload.isClosed;
            state.credit = action.payload.credit;
            state.expenses = action.payload.expenses;
            state.incomes = action.payload.incomes;
            state.balance = action.payload.balance;
        },
        callPostDetails: (state:State, action: PayloadAction<{id:string, body:any}>) => {},
        callDeleteDetail: (state:State, action: PayloadAction<{id:string, idDetail:any}>) => {},
    },
});

export const {callDetails, setDetails, callPostDetails, callDeleteDetail} = detailsSlice.actions;
export default detailsSlice.reducer;




