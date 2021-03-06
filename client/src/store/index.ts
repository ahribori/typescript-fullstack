import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import todo, { ITodoState } from './Todo';

export interface IRootState {
    todo: ITodoState;
}

const appReducer = combineReducers<IRootState>({
    todo,
});

const rootReducer = (state, action) => {
    if (action.type === 'auth/LOGOUT') {
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
};

export function initializeStore() {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunkMiddleware)),
    );
}
