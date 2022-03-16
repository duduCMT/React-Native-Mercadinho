import React, { createContext, useEffect, useReducer } from 'react'
import { UserStorageService } from '../service/UserStorageService'

const UserContext = createContext({})
const initialState = { user: {} }

const actions = {
    setUser: (state, action) => {
        const user = action.payload
        return {
            ...state,
            user,
        }
    },
    logout: (state, action) => {
        const user = {}
        UserStorageService.removeUser()
        return {
            ...state,
            user,
        }
    },
    addLocalUser: (state, action) => {
        const user = action.payload
        UserStorageService.addUser(user.email, user.password)
        return {
            ...state,
            user,
        }
    },
}

export const SET_USER = 'set_user'
export const ADD_LOCAL_USER = 'add_local_user'
export const LOGOUT = 'logout'

export function UserProvider({ children }) {
    function reducer(state, action) {
        switch (action.type) {
            case SET_USER:
                return actions.setUser(state, action)
            case ADD_LOCAL_USER:
                return actions.addLocalUser(state, action)
            case LOGOUT:
                return actions.logout(state, action)
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;