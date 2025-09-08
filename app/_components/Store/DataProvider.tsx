"use client"
import React, {useReducer,useContext,createContext} from "react";
const DataContext = createContext({} as ContextType);

interface User {
    rollNo: number;
    name: string;
    age: number;
    email: string;
}
interface ActionaType {
  type: "SAVE_USER" | "DELETE_USER";
  payload: User | number;
}
interface StateType {
    users: User[];
}
interface ContextType {
    state: StateType;
    dispatch: React.Dispatch<ActionaType>
}

const initialState: StateType = {
    users: []
};

export function reducer(state: StateType,action: ActionaType): StateType{
    
    switch (action.type) {
        case "SAVE_USER":
            return { ...state, users: [...state.users, action.payload as User]     
        };

        case "DELETE_USER": {
            // copy banayi
            const updatedUsers = [...state.users];
            // payload index ko splice se remove kiya
            updatedUsers.splice(action.payload as number, 1);

            return { ...state, users: updatedUsers };
        }

        default:
        return state;
    }
}

export const DataProvider = ({children}:{children:React.ReactNode})=>{
    const [state,dispatch] = useReducer(reducer,initialState);
    console.log(state);
    return (
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    )

}

export const useData=()=>{
    return useContext(DataContext);
}