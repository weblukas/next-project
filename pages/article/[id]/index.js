import React from 'react'
import Link from 'next/link'

const article = (article) => {

   
    
    return (
        <div style={{padding: "100px", textAlign: 'center'}}>
             <h1 >    pacz co żeś kliknoł ciulu </h1>
             <Link href="/"><button style={{background: "red", border: "none", padding: "20px", fontSize: "20px", cursor: "pointer"}}>COFAJ SIĘ, RZWAWO </button></Link>
             <h3>{article.title}</h3>
        </div>
    )
}

export const getStaticPaths = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=1')
    const articles = await res.json()

    return{
        paths: {params: {id: '1'}}
    }
}


export const getStaticProps = async ()=>{
    const getPosts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=1')
    const article = await getPosts.json()

    return {
        props: {
            article
        }
    }
}

export default article

