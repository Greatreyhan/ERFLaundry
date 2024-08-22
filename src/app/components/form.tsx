'use client'
import React from 'react'
import { MdTag } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdApps } from "react-icons/md";
import { useEffect, useState } from "react";
import { db } from "../firebaseconf";
import { ref, set } from "firebase/database";
import Link from 'next/link';

const Form = () => {
    const [rfid, setRfid] = useState('')
    const [alias, setAlias] = useState('')
    const [type, setType] = useState('')

    const writeData = () => {
        const dataRef = ref(db, "list/"+Date.now()); // Change the path accordingly
        set(dataRef, {
          rfid: rfid,
          alias: alias,
          type: type,
        });
      };

    const handleSubmit = (e:any) =>{
        e.preventDefault()
        writeData();
        console.log(rfid,alias,type)
    }
    return (
        <div className='w-full h-screen flex justify-center items-center'>
        <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow  sm:px-6 md:px-8 lg:px-10">
            <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl ">
                Tambahkan Item Baru
            </div>
            <div className="mt-8">
                <form action="#" autoComplete="off">
                    <div className="flex flex-col mb-2">
                        <div className="flex relative ">
                            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                <MdTag />
                            </span>
                            <input type="text" onChange={(e)=>setRfid(e.currentTarget.value)} value={rfid} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="RFID" />
                        </div>
                    </div>
                    <div className="flex flex-col mb-2">
                        <div className="flex relative ">
                            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                <MdDriveFileRenameOutline />
                            </span>
                            <input type="text" onChange={(e)=>setAlias(e.currentTarget.value)} value={alias} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Alias" />
                        </div>
                    </div>
                    <div className="flex flex-col mb-6">
                        <div className="flex relative ">
                            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                <MdApps />
                            </span>
                            <input type="text" onChange={(e)=>setType(e.currentTarget.value)} value={type} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Type" />
                        </div>
                    </div>

                    <div className="flex w-full">
                        <button onClick={(e)=>handleSubmit(e)} type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Tambahkan
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex items-center justify-center mt-6">
                <Link href="/" >Back</Link>
            </div>
        </div>
        </div>
    )
}

export default Form