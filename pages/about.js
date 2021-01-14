import React from "react";
import Layout from "../components/Layout";

export default function about() {
    return (
    <Layout page="À propos">
        
        <div className="
        bg-gray-200 md:w-auto 
        border border-black sm:rounded-3xl 
        ">
        <br/>
        <h1 className="text-5xl">Qu'est-ce qu'une crypto monnaie ?</h1>
        <br />
        <p>
        Le terme crypto monnaie désigne à la fois une monnaie virtuelle et le
        système de paiement de pair à pair qui l'accompagne. Il s'agit de
        monnaies virtuelles sans supports physiques, non régulées par un organe
        central et dont la valeur n'est pas indexée à une devise légale ou une
        matière première.
        </p>
        <br />
        <h1 className="text-4xl">Comment investir sur une crypto monnaie ?</h1>
        <p>
        Vous pouvez investir dans une crypto monnaie en achetant des jetons via 
        une plateforme spécialisée. Vous pouvez aussi faire du trading de crypto 
        devises via un courtier en ligne comme eToro en investissant dans un 
        produit dérivé qui a pour sous-jacent une monnaie virtuelle. Attention 
        dans tous les cas à ne consacrer à ce type d'investissement qu'une toute 
        petite partie de votre patrimoine.
        </p>
        <br />
        <h1 className="text-4xl">Comment marche la crypto monnaie ?</h1>
        <p>
        Ce qui s'apparente à la banque gérée par des êtres humains dans le système
        monétaire classique équivaut dans celui des cryptomonnaies à un réseau 
        dirigé par un protocole informatique réparti partout dans le monde via des 
        ordinateurs. ... Chaque ordinateur renfermant une copie d'une blockchain 
        représente un nœud du réseau.
        </p>
        <br />
        <h1 className="text-4xl">Est-ce que le Bitcoin rapporte ?</h1>
        <p>
        Pour son premier cours connu, en 2010, un bitcoin valait moins d'un dollar. 
        Et début 2017 il s'échangeait pour environ 1.000 dollars, avant de 
        s'envoler en fin d'année et d'enregistrer une rentabilité annuelle 
        de 1.303 % !
        </p>
        <br />
        <h1 className="text-4xl">Est-il trop tard pour investir dans le Bitcoin ?</h1>
        <p>
        A chaque nouveau sommet du BTC, beaucoup de gens ont pensé qu'il était 
        trop tard pour investir. Cela s'est produit lorsque les cours ont atteint 
        10€, 50€, 200€, 1.000€, etc. ... Et si les perspectives du bitcoin ne sont 
        pas les plus intéressantes, il est toujours possible d'investir dans des 
        altcoins.
        </p><br/>
        </div>
        
    </Layout>
    );
}
