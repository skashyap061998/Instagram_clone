import {applyMiddleware,combineReducers, legacy_createStore} from "redux"
import createSagaMiddelware from "redux-saga"
import { reducer } from "./reducer"
import mySaga from "./sagas"

const sagaMiddelware = createSagaMiddelware()
const rootReducer = combineReducers({reducer})
const initvalue = {}

   const store = legacy_createStore(rootReducer,applyMiddleware(sagaMiddelware))
    sagaMiddelware.run(mySaga)

export {store}