import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': { // by name
            if(action.payload === 'up'){
                return state.sort((a, b) => {
                    if (a.name > b.name) return 1
                    if (a.name < b.name) return -1
                    return 1
                })
            }
            if(action.payload === 'down'){
                return state.sort((a, b) => {
                    if (a.name > b.name) return -1
                    if (a.name < b.name) return 1
                    return -1
                })
            }
            return state
            // state.sort( (a, b){
            //     if(action.payload === 'up'){
            //         (a.name > b.name) return 1
            //         })
            // }
            // return {...state} // need to fix
        }
        case 'check': {
            let newState =
            state.filter(u => u.age >= action.payload) // need to fix
            return newState.reverse()
        }
        default:
            return state
    }
}
