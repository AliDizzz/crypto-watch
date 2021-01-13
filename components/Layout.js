import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, page }) {
    return (
        <div className="bg-blue-50 pt-5 text-center min-h-screen">
            <Head>
                <title>{page}</title>
            </Head>
                <header className="container-lg">
                    <h1 className="text-5xl mb-2">CRYPTO WATCH</h1>
                    <div className="inline-grid grid-cols-2 gap-x-10 p-4">
                        <Link rel="stylesheet" href="/">
                            <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
                                Accueil
                            </button>
                        </Link>
                        <Link rel="stylesheet" href="/about">
                            <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
                                À propos
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Image 
                        src="/main.jpg" 
                        alt="footer-pic" 
                        width="400" height="50" 
                        className="rounded-3xl object-cover"
                        quality={50}
                        />
                    </div>
                </header>
        </div>
    )
}
