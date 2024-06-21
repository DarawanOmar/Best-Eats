import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { auth, db } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import {BiSolidLike} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import {RiEdit2Fill} from 'react-icons/ri'
import { Link } from 'react-router-dom';
import CustomModel from './CustomModel';

const DisplayFeedBackPost = ({username, image, title, date, docId, userId,showDeleteNotification, handelDeletePost}) => {
    const darkValue = useSelector((state)=>state.dark.isDark);

    const [likes, setLikes] = useState([])
    const[showModelLogin,setShowModelLogin] = useState(false)

    const[user] = useAuthState(auth)
    const likeRef = collection(db,"likes")

    const addLike = async () => {
      if (user) {
          const newLike = { userId: user.uid, postId: docId };
          const docRef = await addDoc(likeRef, newLike);
          setLikes(prev => [...prev, { ...newLike, likeId: docRef.id }]);
      }
  }
    
    const likesQuery = query(likeRef,where("postId","==",docId))

    const getLikes = async () => {
      const data = await getDocs(likesQuery)
      setLikes(data.docs.map(doc => ({userId: doc.data().userId, likeId: doc.id})))  // doc.id : brtya la id Docomentaka
    }
    useEffect(()=>{
      getLikes()
    },[])

    const hasUserLiked = likes.find(like => like.userId === user?.uid)

    const unlike = async () => {
      if (user) {
          try {
              const likeToDeleteQuery = query(likeRef, where("postId", "==", docId), where("userId", "==", user.uid));
              const likeToDeleteData = await getDocs(likeToDeleteQuery);
              const likeId = likeToDeleteData.docs[0].id;
              await deleteDoc(doc(likeRef, likeId));
              setLikes(prev => prev.filter(like => like.likeId !== likeId));
          } catch (error) {
              console.log(error.message);
          }
      } 

    }
    const deletePost = async () => {
      try {
          await deleteDoc(doc(db,"postFeedBack",docId))
          showDeleteNotification()
          handelDeletePost(docId)
      } catch (error) {
          console.log(error);
      }
  }
  return (
    <div className={darkValue ? "flex flex-col shadow-xl p-4 rounded-md bg-neutral-900" : "flex flex-col shadow-xl p-4 rounded-md bg-neutral-200"}>
                <div className="flex justify-between items-center space-x-4 py-2 border-b-2 border-orange-500">
            <div className='flex items-center space-x-2'>
                <h1 className=' text-lg font-bold italic'>{username}</h1>
                <img src={image} alt={username} className='w-8 h-8 rounded-full' />
            </div>
            {user?.uid === userId ? (

            <div className="flex space-x-2">
                <button onClick={() => setShowModelLogin(prev => !prev)} className='text-xl hover:text-red-500 duration-500'> <MdDelete/> </button>
                {docId && <Link  to={`/upatepostfeddback/${docId}`} className='text-xl hover:text-green-500 duration-500'> <RiEdit2Fill/> </Link>}
            </div>
            ): null}

            {showModelLogin && 
            <CustomModel 
              title={"Eat"} 
              closeX={"x"} 
              text={"Are You Sure Want Delete Post ? "} 
              yes={"Yes"} 
              no={"No"} 
              closeFunctionality={() => setShowModelLogin(prev => !prev)}
              yesFunctionality={() => deletePost()}
            />}
           
        </div>
                <div className="my-2">
                    {title}
                </div>
                <div className="flex justify-between items-center">
                  {hasUserLiked ? (
                    <button onClick={unlike} className='flex items-center'> <span className='text-blue-500'><BiSolidLike/></span> 
                      {likes.length > 0 && <h1>{likes?.length}</h1> } 
                    </button>
                  ) : (
                    <button onClick={addLike} className='flex items-center'> <span className='text-gray-500'><BiSolidLike/></span>
                      {likes.length > 0 && <h1>{likes?.length}</h1> } 
                     </button>
                  )}
                  {date}
                </div>
               
            </div>
  )
}

export default DisplayFeedBackPost