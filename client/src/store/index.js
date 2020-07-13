import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from "./reducers";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore() {
    const store = createStore(
        persistedReducer,
        compose(applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        ));
    let persistor = persistStore(store)
    /*
    const store = createStore(
        rootReducer,
        compose(applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        ));
    */

    return { store, persistor };
}