import { doc, getDoc, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../config/firebase'

import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"
import { useAnimelContext } from '../context/AnimelContext';

const UpdatePost = () => {
    const {showUpdateNotification} = useAnimelContext()
    const {docId} = useParams()
    const [dataBack, setDataBack] = useState('')
    const navigate = useNavigate()
    const schema = yup.object().shape({
        title : yup.string().required("Please Fill Out Before Click The Send ")
    })

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver (schema)
    })


    const getPost = async () => {
        const postRef = doc(db,"postFeedBack",docId)
        const data = await getDoc(postRef)
        const splitObj = data.data()
        setDataBack(splitObj.title)
    }
    useEffect(()=>{
        getPost()
    },[])
    console.log(dataBack);

    const handleOnSubmit = async (data) => {
        const updateRef = doc(db,"postFeedBack",docId)
        await updateDoc(updateRef,{
            title:data.title
        })
        navigate('/feedback')
        showUpdateNotification()

    }
  return (
    <div><div className="">
    <div className='text-center'>
        <p className='text-md md:text-lg text-gray-400'>You Can Update Your FeedBack Here!</p>
    </div>
    <form onSubmit={handleSubmit(handleOnSubmit)} className="flex flex-col justify-center items-center p-4">
        <label className='py-2'>Write Your Update FeedBack Here</label>
        {errors.title && <p className=' top-44 translate-y-0 duration-500 ease-in-out bg-red-500 p-2 text-white rounded-md my-1'>{errors.title?.message}</p>}
        <textarea value={dataBack} {...register("title")} onChange={(e) => setDataBack(e.target.value)}  type="text" className='w-full text-center md:w-[800px] h-32 p-2 rounded-md bg-neutral-200 focus:outline-none placeholder:text-center shadow-xl' placeholder='Write FeedBack'/>
        <button className='btn-order md:btn-hover mt-4 text-lg px-6'>Update</button>
    </form>
</div></div>
  )
}

export default UpdatePost