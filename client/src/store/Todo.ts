import { createAction, handleActions } from 'redux-actions';

// ACTION TYPES
const CREATE = 'CREATE';
const REMOVE = 'REMOVE';
const TOGGLE = 'TOGGLE';

// PAYLOAD TYPES
export interface ICreatePayload {
    title: string;
}
export interface IRemovePayload {
    id: number;
}
export interface ITogglePayload {
    id: number;
}

// ACTIONS
export const createTodo = (title: string) => {
    return createAction<ICreatePayload>(CREATE)({ title });
};

export const removeTodo = (id: number) => {
    return createAction<IRemovePayload>(REMOVE)({ id });
};

export const toggleTodo = (id: number) => {
    return createAction<ITogglePayload>(TOGGLE)({ id });
};

export interface ITodoState {
    create: object | null;
    remove: object | null;
    toggle: object | null;
}

// INITIAL STATE
const initialState: ITodoState = {
    create: null,
    remove: null,
    toggle: null,
};

// REDUCERS
export default handleActions(
    {
        [CREATE]: state => {
            return state;
        },
        [REMOVE]: (state, action) => {
            return state;
        },
        [TOGGLE]: (state, action) => {
            return state;
        },
    },
    initialState,
);
