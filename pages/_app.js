import '../styles/globals.css'
import Nav from '../components/Nav'
// import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Nav />
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
