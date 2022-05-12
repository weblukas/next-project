import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
const SinglePost = ({posts}) => {

    
    return (
        <>
            {posts.map((post)=><div key = {post.id} className={styles.postContainer}>
             <Link href={`/article/${post.id}`}><a><h3>{post.title} &rarr;</h3></a></Link>
                <p>{post.body}</p>
            </div>)}
        </>
    )
}

export default SinglePost
