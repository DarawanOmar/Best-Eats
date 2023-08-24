import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../config/firebase';
import { Link } from 'react-router-dom';
import format  from 'date-fns/format';

import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"

import {addDoc, collection, getDocs} from 'firebase/firestore'
import {db} from '../config/firebase'
import DisplayFeedBackPost from './DisplayFeedBackPost';

import {Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const FeedBack = () => {
    const darkValue = useSelector((state)=>state.dark.isDark);
    const [postList, setPostList] = useState(null)
    const[user] = useAuthState(auth)

    const schema = yup.object().shape({
        title : yup.string().required("Please Fill Out Before Click The Send ")
    })

    const {register, handleSubmit, formState:{errors}, reset} = useForm({
        resolver: yupResolver (schema)
    })

    const postRef = collection(db,"postFeedBack")

    const getPosts = async () => {
        const data = await getDocs(postRef)
        setPostList(data.docs.map((doc) => ({...doc.data(),docId:doc.id})));
    }
     useEffect(()=>{
        getPosts()
     },[])

     const handleOnSubmit = async (data) => {
        if (user) {
            const newPost = {
                title: data.title,
                username: user.displayName,
                userId: user.uid,
                image: user.photoURL,
                date: format(new Date(), "MM/dd/yyyy p")
            }
            await addDoc(postRef, newPost);
            setPostList(prev => [...prev, { ...newPost, docId: user.uid }]);
            reset();
            toast.success('FeedBack Send SuccessFully');
        } else {
            toast.error('User not authenticated');
        }
    }



  return (

    <div className={darkValue ? 'max-w-6xl mx-auto font-serif min-h-screen ' : 'max-w-6xl mx-auto font-serif '}>
        {user  ? (
        <>
            <div className="">
                <div className='text-center'>
                    <div className='flex justify-center items-center '>
                        <h1 className='text-lg md:text-2xl font-bold italic mr-3'>Hello Dear {user?.displayName}</h1>
                        <img src={user?.photoURL} alt={user?.displayName} className='w-10 h-10 rounded-full' />
                    </div>
                    <p className='text-md md:text-lg text-gray-400'>Thank You For Choosn Us Now We Wanna Get Your FeedBack About Our Application</p>
                </div>
                <form onSubmit={handleSubmit(handleOnSubmit)} className="flex flex-col justify-center items-center p-4">
                    <label className='py-2'>Write Your FeedBack Here</label>
                    {errors.title && <p className=' top-44 translate-y-0 duration-500 ease-in-out bg-red-500 p-2 text-white rounded-md my-1'>{errors.title?.message}</p>}
                    <textarea {...register("title")} type="text" className={darkValue ? 'text-black w-full md:w-[800px] h-32 p-2 rounded-md bg-zinc-200 focus:outline-none  placeholder:text-center shadow-xl' : 'w-full md:w-[800px] h-32 p-2 rounded-md bg-neutral-200 focus:outline-none  placeholder:text-center shadow-xl'} placeholder='Write FeedBack'/>
                    <button className='btn-order md:btn-hover mt-4 text-lg px-6'>Send</button>
                </form>
            </div>
            <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">

                {postList?.map(post => {
                    return <DisplayFeedBackPost key={post.docId} {...post} />
                })}
            </div>
            <ToastContainer
                position='top-right'
                theme='light'
                transition={Bounce}
            />
        </>
        ) : (
            <div className=" flex flex-col justify-center items-center">
                <h1 className=' md:text-2xl font-bold italic '> Please Login For Submiting Your FeedBack</h1>
                <Link to='/login' className='btn-order md:btn-hover'>Login</Link>
            </div>
        )}
    </div>
  )
}

export default FeedBack