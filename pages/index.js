import { motion } from "framer-motion";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home({ res }) {

  return (
      <Layout page="Crypto Watch - Accueil" >
        <ul className="flex justify-center flex-wrap py-10 space-x-1 space-y-1">
          {res.map((crypto, index) => (
            <motion.li 
            key={index} 
            className="
            bg-gradient-to-t from-yellow-500 via-yellow-300 to-yellow-500
            hover:shadow-md 
            box-content h-50 w-32 p-4 
            border-black border-4
            rounded-3xl
            " 
            whileHover={{
              position: 'relative',
              zIndex: 1,
              scale: [1, 1.4, 1.2],
              rotate: [0, 5, -5, 0],
              transition: {
                duration: .4
              },
            }}
            >
              
              <Link href={`/${crypto.id}`}> 
                <a className="rounded-md">
                  <div className="text-center">
                    <img 
                    src={crypto.logo_url} 
                    alt={crypto.name} 
                    className="w-20 h-20 mx-auto mb-6" 
                    />
                  </div>
                  <h2 className="text-2xl mb-6 uppercase tracking-wider">
                    {crypto.name} 
                  </h2>
                  <p>Rang actuel <span className="font-bold">{crypto.rank}</span></p>

                  <p>
                    Delta : {""}
                    <span className="font-bold"> {parseFloat(crypto.rank_delta)} </span>

                    {crypto.rank_delta < 0 ? (
                          <span className="text-red-500"> &#x2798;</span>
                        ) : (
                          <span className="text-green-500"> &#x279A;</span>
                        )  }
                      
                  </p>

                  <h3 className="font-bold text-2xl mb-4">
                    {parseFloat(crypto.price).toFixed(2)} €
                  </h3>

                  <p>
                    1 jour : {""}
                    <span className="font-bold">
                      {parseFloat(crypto['1d'].price_change_pct * 100).toFixed(2) + "%"}
                    </span>{crypto["1d"].price_change_pct < 0 ? (
                      <span className="text-red-500"> &#x2798;</span>
                    ) : (
                      <span className="text-green-500"> &#x279A;</span>
                    )}
                  </p>

                  <p>
                    1 mois : {""}
                    <span className="font-bold">
                      {parseFloat(crypto['30d'].price_change_pct * 100).toFixed(2) + "%"}
                    </span>{crypto["30d"].price_change_pct < 0 ? (
                      <span className="text-red-500"> &#x2798;</span>
                    ) : (
                      <span className="text-green-500"> &#x279A;</span>
                    )}
                  </p>

                  <p>
                    1 an : {""}
                    <span className="font-bold">
                      {parseFloat(crypto['365d'].price_change_pct * 100).toFixed(2) + "%"}
                    </span>{crypto["365d"].price_change_pct < 0 ? (
                      <span className="text-red-500"> &#x2798;</span>
                    ) : (
                      <span className="text-green-500"> &#x279A;</span>
                    )}
                  </p>
                </a>
              </Link>
            </motion.li>
          ))}
        </ul>
      </Layout>
  )
}

//server side rendered
export async function getStaticProps(context) {
  try {
    const res = await fetch(
      `https://api.nomics.com/v1/currencies/ticker?key=2a131e8732f83eebe345a11e64b7f52d&ids=BTC,ETH,XRP,ADA,LTC,LINK,BCH,DOT,XLM,USDT&interval=1d,30d,365d&convert=EUR`
    ).then((res) => res.json());
    return {
      props: { res }
    }
  } catch (err) {
    console.error(err);
  }
}