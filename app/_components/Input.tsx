"use client"

import { useData } from "./Store/DataProvider";
import React, { useState } from "react";

function Input() {

       interface user {
              rollNo: string;
              name: string;
              age: string;
              email: string;
       }
       const initialData: user = {rollNo:"",name:"",age:"",email:""};

       const {dispatch} = useData();
       const [user,setUser] = useState(initialData);

       const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
              setUser({...user,[e.target.name]:e.target.value})
       }
       
       const handleSave = ()=>{
              const dataSave = {
                     ...user,
                     rollNo: Number(user.rollNo),
                     age: Number(user.age)
              };
              if(dataSave.age > 0 && dataSave.rollNo > 0) dispatch({type: "SAVE_USER", payload: dataSave});
              setUser(initialData);
       }

  return (
    <div className="border-2 rounded-3xl w-xl mt-5 m-auto">
          <input type="number" name="rollNo" value={user.rollNo} placeholder="Enter Roll No" 
                 onChange={handleChange}
                 className="flex m-auto mt-14 border-1 w-70 h-13 px-5 rounded-xl"
          />
          <input type="text" name="name" value={user.name} placeholder="Enter Name" 
                 className="flex m-auto mt-7 border-1 w-70 h-13 px-5 rounded-xl"
                 onChange={handleChange}
          />
          <input type="number" name="age" value={user.age} placeholder="Enter Age" 
                 className="flex m-auto mt-7 border-1 w-70 h-13 px-5 rounded-xl"
                 onChange={handleChange}
          />
          <input type="email" name="email" value={user.email} placeholder="Enter Email"  
                 onChange={handleChange}
                 className="flex m-auto mt-7 border-1 w-70 h-13 px-5 rounded-xl"
          />
          <button
              onClick={handleSave}
              className="flex m-auto mt-7 mb-14 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">
              Save Data
          </button>
      </div>
  )
}

export default Input;