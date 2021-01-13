import Link from "next/link";
import Layout from "../components/Layout";

export default function Home({ res }) {
  console.log(res)
  return (
      <Layout page="Crypto Watch - Accueil" >
        <ul className="flex flex-wrap justify-around py-10">
          {res.map((crypto, index) => (
            <li 
            key={index} 
            className="relative hover:shadow-md p-8 border border-blue-300 rounded-3xl bg-blue-100 md:w-auto flex-1 my-5 mx-5"
            >
              <Link href="/"> 
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
                  <h3>Rang actuel {crypto.rank}</h3>
                  <h3 className="font-bold text-2xl mb-4">
                    {parseFloat(crypto.price).toFixed(2)} €
                  </h3>
                  <p>
                    1 jour : {""}
                    <span className="font-bold">
                      {parseFloat(crypto['1d'].price_change_pct * 100).toFixed(2) + "%"}
                    </span>{crypto["1d"].price_change_pct < 0 ? (
                      <span className="text-red-500">&#x2798;</span>
                    ) : (
                      <span className="text-green-500">&#x279A;</span>
                    )}
                  </p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
  )
}

//server side rendered
export async function getStaticProps(context) {
  try {
    const res = await fetch(
      "https://api.nomics.com/v1/currencies/ticker?key=2a131e8732f83eebe345a11e64b7f52d&ids=BTC,ETH,XRP,ADA,LTC,LINK,BCH,DOT,XLM,USDT&interval=1d,30d,365d&convert=EUR"
    ).then((res) => res.json());
    return {
      props: { res }
    }
  } catch (err) {
    console.error(err);
  }
}