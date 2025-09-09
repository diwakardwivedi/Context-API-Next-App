'use client'
import Link from 'next/link';
import React, {useEffect, useState } from 'react';
import { User } from '../../_components/Store/DataProvider';
import { useParams } from 'next/navigation';
import { useData} from "../../_components/Store/DataProvider";

function EditUser() {
    const {state,dispatch} = useData();

    const {index} = useParams();
    const id = Number(index);
    const user = state.users[id]
    const [edit, setEdit] = useState<User>({name:'',age:0,email:''});

    useEffect(() => {
      setEdit({...user});
    }, [user]);

    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
      setEdit({...edit, [e.target.name]:e.target.value})
    }

    const handleSave=()=>{
      dispatch({
        type: "EDIT_USER",
        index: id,
        payload: edit
      })
    }
  return (
    <>
        <div className="border-2 rounded-3xl w-xl mt-20 m-auto">
          <input type="text" name="name" value={edit.name} placeholder="Enter Name" 
                 className="flex m-auto mt-7 border-1 w-70 h-13 px-5 rounded-xl"
                 onChange={handleChange}
          />
          <input type="number" name="age" value={edit.age} placeholder="Enter Age" 
                 className="flex m-auto mt-7 border-1 w-70 h-13 px-5 rounded-xl"
                 onChange={handleChange}
          />
          <input type="email" name="email" value={edit.email} placeholder="Enter Email"  
                 onChange={handleChange}
                 className="flex m-auto mt-7 border-1 w-70 h-13 px-5 rounded-xl"
          />
          <div className='flex justify-between px-36 mt-7 mb-14'>
            <Link href={"/viewProfile"}>
              <button
              onClick={handleSave}
              className="flex px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">
              Edit Data
            </button>
            </Link>
            <Link href={"/viewProfile"}>
              <button
                  className="flex px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">
                  Cancel
              </button>
            </Link>
          </div>
      </div>
    </>
  )
}

export default EditUser