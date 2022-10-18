import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'setIsAuth':
            return {
                ...state,
                isAuth: true,
            }
        case 'delIsAuth':
            return {
                ...state,
                isAuth: false,
            }
              
        default: return state;
    }
}

const useGlobalState = () => {
    const [state, dispatch] = useReducer(reducer, {
        isAuth: false,
    })
    return { state, dispatch }
};

export default useGlobalState;