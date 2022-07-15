import Head from 'next/head'
import Header from './Header'

const Layout = ({children, pagina}) => {
  return (
    <div>
        <Head> 
            <title>Mi Cajom - {pagina} </title> 
            <meta name='description' content='Sitio Web de venta de Relojes' />
        </Head>
        
        <Header/>
         {children}
    </div>
  )
}

export default Layout