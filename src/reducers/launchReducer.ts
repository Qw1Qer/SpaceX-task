import type {LaunchState, LaunchAction} from '../types/launch';

export const initialState: LaunchState = {
    launches: [],
    selectedLaunch: null,
    isLoading: false,
    isModalOpen: false,
};

export const launchReducer = (state: LaunchState, action: LaunchAction): LaunchState => {
    switch (action.type) {
        case 'SET_LAUNCHES':
            return { ...state, launches: action.payload };
        case 'SET_LOADING':
            return { ...state, isLoading: action.payload };
        case 'SELECT_LAUNCH':
            return { ...state, selectedLaunch: action.payload, isModalOpen: true };
        case 'CLOSE_MODAL':
            return { ...state, isModalOpen: false, selectedLaunch: null };
        default:
            return state;
    }
};