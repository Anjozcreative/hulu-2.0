//import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Results from '@/components/Results'
import Head from 'next/head'
import requests from '../util/requests'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ results }) {
  console.log(results)
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Nav />
      <Results />
    </div>

  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre
  try {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json' }
    };

    const response = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`);

    const data = await response.json();
    console.log(data);

    // pass fetched data as props to the component
    return {
      props: {
        results: response.results || []
      }
    };
  } catch (error) {
    console.error('Error fetching data during server-side rendering:', error)

    return {
      props: {
        results: []
      }
    };
  }
}