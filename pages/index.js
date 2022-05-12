import Head from 'next/head'
import Nav from '../components/Nav'
import PostList from '../components/PostList';
import styles from '../styles/Home.module.css'

export default function Home( {posts} ) {

 console.log(posts);
  return (
    <div className={styles.container}>
    <Head>
      <title>moja nexta</title>
    </Head>


      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome in my page
        </h1>

       <PostList posts={posts} />

      </main>

    

      <footer className={styles.footer}>
        Lukas
      </footer>
    </div>
  )
}

// https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>


export const getStaticProps = async()=>{
  const res = await fetch(('https://jsonplaceholder.typicode.com/posts?_limit=6'))
  const posts = await res.json()

  return{
    props: { posts }
  }
}