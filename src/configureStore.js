import { createStore, compose } from 'redux';
import createReducer from './reducers';

export default function configureStore(initialState = {}, history) {
    let composeEnhancers = compose;
    if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
        /* eslint-disable no-underscore-dangle */
        if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
            composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});

        // NOTE: Uncomment the code below to restore support for Redux Saga
        // Dev Tools once it supports redux-saga version 1.x.x
        // if (window.SAGA_MONITOR_EXTENSION)
        //   reduxSagaMonitorOptions = {
        //     sagaMonitor: window.SAGA_MONITOR_EXTENSION,
        //   };
        /* eslint-enable */
    }

   const store = createStore(createReducer(), initialState, composeEnhancers());
    // Make reducers hot reloadable, see http://mxs.is/googmo
    /* istanbul ignore next */
    store.injectedReducers = {}; // Reducer registry
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(createReducer(store.injectedReducers));
        });
    }

    return store;

}

