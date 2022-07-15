import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Mi Cajom - Nosotros</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1> Desde Inicio</h1>

      <Link href='/nosotros'> Ir a Nosotros</Link>

    </div>
  )
}
