import { Footer, Navbar, PostCart, PostItem, PostList } from "@/Components";
import { getPosts } from "@/services";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {

  const [data, setData] = useState([])

  useEffect(()=> {
      getPosts().then((data) => setData(data.postsConnection.edges))
  }, [])
  
  return (
    <>
        <Navbar />
        <PostCart data={data}/>
        {/* <Footer /> */}
    </>
  )
}
