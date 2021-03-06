import Layout from "../components/Layout";

export default function Currency({res}) {
    
    return (
        <div>
            <Layout page={'Page' + res.name}>
                <div 
                className="
                relative 
                hover:shadow md p-8 
                border border-blue-300 sm:rounded-3xl 
                bg-gray-200 md:w-auto 
                flex-wrap 
                mx-5"
                >
                        <h2 className="text-2xl mb-6 uppercase tracking-wider">{res.name}</h2>
                    <div>
                        <img 
                        src={res.logo_url} 
                        alt={res.name} 
                        className="float-left w-20 h-20 mx-auto mb-6"
                        />
                    </div>
                    <p>{res.description}</p>
                    <p className="pt-5 text-blue-500">
                        <a href={res.reddit_url} target="_blank">{res.reddit_url}</a>
                    </p>
                </div>
            </Layout>
        </div>
    )
}

export async function getServerSideProps({query}) {
    console.log(query.currency);
    try {
        const res = await fetch(
            `https://api.nomics.com/v1/currencies?key=2a131e8732f83eebe345a11e64b7f52d&ids=${query.currency}&attributes=id,name,logo_url,description,reddit_url`
            )
        const result = await res.json();

        return {
            props: { res: result[0]}
        }
    } catch (err) {
        console.error(err)
    }
}