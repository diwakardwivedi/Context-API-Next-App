import React from 'react'
import { useData } from './Store/DataProvider'
import Link from 'next/link';

function ProfileCard() {
    const {state, dispatch} = useData();
    const len = state.users.length;

  return (
    <>
        <div className="flex flex-wrap gap-4 justify-start ml-5 mt-8">
            {
                len === 0 && (
                <div className="text-gray-500">No profiles found.</div>
            )}
            {
                state.users.map((user, id)=>(
                    <div key={id} className="bg-gray-500 shadow-md rounded-lg p-6 w-72 border border-gray-200">
                        <h2 className="text-xl font-bold mb-2">{user.name}</h2>
                        <p><span className="font-semibold">Age:</span> {user.age}</p>
                        <p><span className="font-semibold">Email:</span> {user.email}</p>
                        <div className='flex'>
                            <Link href={`/edit/${id}`} 
                                className="flex m-auto mt-7 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">
                                <button>Edit</button>
                            </Link>
                            <button className="flex m-auto mt-7 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
                                    onClick={()=>dispatch({type:"DELETE_USER", payload:id})}    
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            }
            
        </div>
    </>
  )
}

export default ProfileCard;