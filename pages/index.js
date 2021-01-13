import Layout from "../components/Layout";

export default function Home({ res }) {
  console.log(res)
  return (
      <Layout page="Crypto Watch - Accueil" >
        
      </Layout>
  )
}

//server side rendered
export async function getStaticProps(context) {
  try {
    const res = await fetch(
      "https://api.nomics.com/v1/currencies/ticker?key=2a131e8732f83eebe345a11e64b7f52d&ids=BTC,ETH,XRP,AAVE,LTC,3XT,BCH,ADA,BOR&interval=1d,30d,365d&convert=EUR"
    ).then((res) => res.json());
    return {
      props: { res }
    }
  } catch (err) {
    console.log(err);
  }
}