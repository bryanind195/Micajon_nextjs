import Head from 'next/head'

const Layout = ({children, pagina}) => {
  return (
    <div>
        <Head> 
            <title>Mi Cajom - {pagina} </title> 
            <meta name='description' content='Sitio Web de venta de Relojes' />
        </Head>
        
         {children}
    </div>
  )
}

export default Layout