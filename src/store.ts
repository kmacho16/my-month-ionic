import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import resumesSlice from './state/resumes.slice'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects';
import resumesSagas from './sagas/resumes.sagas';
import detailsSagas from './sagas/details.sagas';
import detailsSlice from './state/details.slice';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga () {
  yield all([
    ...resumesSagas,
    ...detailsSagas
  ])
}


export const store = configureStore({
    reducer: {
      resumes: resumesSlice,
      details: detailsSlice,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga)
  
  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<typeof store.getState>
  // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
  export type AppDispatch = typeof store.dispatch