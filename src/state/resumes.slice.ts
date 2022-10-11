import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ResumeItem from "../interface/resumeItem.interface";
import { IDLE, Status } from "../interface/status.interface";

export const STATE_NAME = "RESUMES";

export interface State {
    status: Status;
    resumes: ResumeItem[];
    loaded: boolean;
};

const initialState : State = {
    status: IDLE,
    resumes: [],
    loaded: false
}

export const resumesSlice = createSlice({
    name: STATE_NAME,
    initialState,
    reducers: {
        callGetAll: () => {},
        setResumes: (state, action: PayloadAction<State>) => {
            state.loaded = action.payload.loaded;
            state.resumes = action.payload.resumes;
            state.status = action.payload.status;
        },
        callPostResume: (state, action: PayloadAction<{month: string, balance: string}>) => {},
        callDeleteResume: (state:State, action: PayloadAction<{id:string}>) => {},
    }
})

export const {callGetAll, setResumes,callPostResume,callDeleteResume} = resumesSlice.actions;
export default resumesSlice.reducer;