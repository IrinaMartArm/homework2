import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': { // by name
            let newState = {...state}
            if(action.payload === 'up'){
                return state.slice().sort((a, b) => {
                    if (a.name > b.name) return 1
                    if (a.name < b.name) return -1
                    return 1
                })
            }
            if(action.payload === 'down'){
                return state.slice().sort((a, b) => {
                    if (a.name > b.name) return -1
                    if (a.name < b.name) return 1
                    return -1
                })
            }
            return {...state}
        }
        case 'check': {
            return state.filter(u => u.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
