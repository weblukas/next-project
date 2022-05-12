import React from 'react'
import PostListStyle from '../styles/PostList.module.css'
import styles from '../styles/Home.module.css'
import SinglePost from './SinglePost';


const PostList = ({posts}) => {
   
     return ( 
        <div className={PostListStyle.grid}> 
          
           <SinglePost posts={posts} />
          
       

        </div>
       )
    
}

export default PostList
