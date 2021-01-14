import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, page }) {
    return (
        <div className="bg-layoutBgPic bg-cover bg-center pt-5 text-center min-h-screen">
            
            <Head>
                <title>{page}</title>
            </Head>
                <header className="container-lg">
                    <motion.div initial="hidden" animate="visible" variants={{
                        hidden: {
                            scale: .8,
                            opacity: 0
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                delay: .4
                            }
                        },
                    }}>

                    <h1 className="text-5xl mb-2 text-yellow-400">CRYPTO WATCH</h1>
                    </motion.div>
                    <h3>Top 10 des crypto-monnaies les plus connues</h3>
                    <div className="inline-grid grid-cols-2 gap-x-10 p-4">
                        <Link rel="stylesheet" href="/">
                            <button className="bg-gradient-to-t from-black via-yellow-500 to-yellow-500 p-3 m-2 rounded-3xl hover:shadow-md uppercase">
                                Accueil
                            </button>
                        </Link>
                        <Link rel="stylesheet" href="/about">
                            <button className="bg-gradient-to-t from-black via-yellow-500 to-yellow-500 p-3 m-2 rounded-3xl hover:shadow-md uppercase">
                                À propos
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Image 
                        src="/main.jpg" 
                        alt="header-pic" 
                        width="400" height="50" 
                        className="rounded-3xl object-cover"
                        quality={50}
                        />
                    </div>
                </header>
                <main className="pt-4 mx-20">{children}</main>

                <footer className="p-10">
                <Image 
                        src="/main.jpg" 
                        alt="footer-pic" 
                        width="1000" height="50" 
                        className="rounded-3xl object-cover"
                        quality={50}
                        />
                        <ul className="pt-10 pb-4 flex justify-around">
                            <li>À propos</li>
                            <li>Qui sommes-nous</li>
                            <li>From Ali Yildiz - 2021</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Architecto a voluptas iste cumque eos quae asperiores excepturi vel, 
                            incidunt dignissimos totam sit. Rerum dolore accusamus fugiat, 
                            illo numquam accusantium fuga?</p>
                </footer>

                <style jsx>{"p {color: grey;}"}</style>
        </div>
    )
}
