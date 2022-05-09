import { createStore,applyMiddleware,compose } from "redux"
import { Reducer } from "./reducer"
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const persistConfig = {
    key: 'reducer',
    storage: storage,
    whitelist: ["durationData","user","payTotal","timeline","city","vehicle","rideamount"] // or blacklist to exclude specific reducers
 };

 const presistedReducer = persistReducer(persistConfig, Reducer );


const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(presistedReducer,createComposer(applyMiddleware(thunk)))
const persistor = persistStore(store);
export { persistor , store };