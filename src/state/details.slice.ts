import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import DetailItem from "../interface/detailItem.interface";
import { IDLE, Status } from "../interface/status.interface";

export const STATE_NAME = "DETAILS";

export interface State {
    status: Status,
    details: DetailItem[],
    uuid?: string,
    loaded: boolean
}

const initialState: State ={
    status: IDLE, 
    loaded: false,
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
        },
        callPostDetails: (state:State, action: PayloadAction<{id:string, body:any}>) => {},
        callDeleteDetail: (state:State, action: PayloadAction<{id:string, idDetail:any}>) => {},
    },
});

export const {callDetails, setDetails, callPostDetails, callDeleteDetail} = detailsSlice.actions;
export default detailsSlice.reducer;




