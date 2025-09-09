"use client"
import React, {useReducer,useContext,createContext} from "react";

export interface User {
    name: string;
    age: number;
    email: string;
}
type ActionaType =  { type: "SAVE_USER"; payload: User } | 
                    { type: "DELETE_USER"; payload: number } | 
                    { type: "EDIT_USER"; index: number; payload: User };

interface Records {
    users: User[];
}
interface ContextType {
    state: Records;
    dispatch: React.Dispatch<ActionaType>
}

const DataContext = createContext({} as ContextType);

const initialState: Records = {
    users: []
};

export function reducer(state: Records,action: ActionaType): Records{
    
    switch (action.type) {
        case "SAVE_USER":
            const rcds = [...state.users];
            rcds.push(action.payload as User)
            return {...state, users:rcds}

        case "DELETE_USER": {
            const updatedUsers = [...state.users];
            updatedUsers.splice(action.payload as number, 1);
            return { ...state, users: updatedUsers };
        }

        case "EDIT_USER": {
            const editUser = [...state.users];
            editUser[action.index] = action.payload;

            return{...state, users: editUser}


        }

        default:
        return state;
    }
}

export const DataProvider = ({children}:{children:React.ReactNode})=>{
    const [state,dispatch] = useReducer(reducer,initialState);
    return (
        <DataContext value={{state, dispatch}}>
            {children}
        </DataContext>
    )

}

export const useData=()=>{
    return useContext(DataContext);
}