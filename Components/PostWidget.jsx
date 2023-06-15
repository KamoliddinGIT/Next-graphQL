import { getRecentPosts } from '@/services'
import { data } from 'autoprefixer'
import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const PostWidget = ({Category, slug}) => {
  const [recentPosts, setRecentPosts] = useState([])
  useEffect(()=> {
    getRecentPosts().then(data=> {
      setRecentPosts(data.posts)
    })
  }, [slug])
  console.log(recentPosts);
  return (
    <div className='flex flex-col post items-center w-1/4 border rounded-2xl   text-gray-300 gap-7'>
        <h3 className='border-b-2 w-36 text-center my-5 '>Recent Posts</h3>
        {
          recentPosts.map(post=> (
            <div className='postItem w-56 h-12 flex items-center' key={post.slug}>
              <div>
                <img className='w-14 h-14 rounded-full' src={post.featuredImage.url} alt={post.title} />
              </div>
              <div className='mx-5 '>
                  <h3 className='text-gray-200'>{moment(post.createdAt).format("MMM DD, YYYY")}</h3>
                  <Link href={`/post/${post.slug}`} className='text-blue-500'>{post.slug}</Link>
              </div>
            </div>
          ))
        }

    </div>
  )
}

export default PostWidget