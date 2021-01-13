import React from "react";
import Layout from "../components/Layout";

export default function about() {
    return (
    <Layout page="À propos">
        <h1 className="text-4xl">Qu'est-ce qu'une crypto monnaie ?
</h1>
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
    </Layout>
    );
}
