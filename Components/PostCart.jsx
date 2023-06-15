import React from 'react'
import { PostList, PostWidget } from '.'

const PostCart = ({data}) => {
  return (
    <div className='posts bg-gray-900 flex justify-between'>
        
        <PostWidget />
        <div className='flex flex-col w-1/2 justify-center p-5 border rounded-2xl'>
          {
            data.map(item=> (
                <PostList {...item.node} key={item.node}/>
            ))
          }
        </div>
    </div>
  )
}

export default PostCart