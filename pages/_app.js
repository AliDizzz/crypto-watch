import '../styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'; //80.7k (gzipped: 26.7k)

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        },
        pageExit: {
          backgroundColor: 'white',
          filter: `grayscale()`,
          opacity: 0
        }
      }}>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
