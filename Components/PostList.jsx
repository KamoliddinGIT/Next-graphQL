import moment from 'moment/moment'
import React from 'react'

const PostList = ({author, categories, excerpt, featuredImage}) => {
  const {createdAt} = categories

  return (
    <div>
      <h1 className='text-red-200 text-center font-medium text-xl'>{categories[0].name}</h1>
        <div className='flex justify-center items-center'>
        
        <div className='w-1/2 flex items-center gap-3'>
            <img className="w-12 h-12 rounded-full" src={author.photo.url} alt="" />
            <h5 className="text-indigo-400">{author.name}</h5>
            <span className='mx-3 text-indigo-200'>{moment(createdAt).format("MMM DD, YYYY")}</span>
        </div>
        
       </div>
       <p className='text-indigo-50 text-center my-2'>{excerpt}</p>
       <img className='w-44 h-44 m-auto' src={featuredImage.url} alt="" />
    </div>
  )
}

export default PostList