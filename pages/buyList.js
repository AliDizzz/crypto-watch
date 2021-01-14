import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";

export default function buyList() {
    return (
        <Layout page="À propos">
            <div
                className="
                bg-gray-200 md:w-auto 
                border border-gray-800 md:rounded-3xl
                "
            >
                <br />
                <h1 className="text-6xl"> Où acheter de la crypto monnaie ? </h1> <br />
                <p>
                    Le terme crypto monnaie désigne à la fois une monnaie virtuelle et le
                    système de paiement de pair à pair qui l 'accompagne. Il s' agit de
                    monnaies virtuelles sans supports physiques, non régulées par un
                    organe central et dont la valeur n 'est pas indexée à une devise
                    légale ou une matière première.{" "}
                </p>{" "}
                <br />
                </div><br/>
                
            <div >
                <table className="table-auto bg-gray-200 border-separate border border-gray-800">
                    <tbody>
                        <tr className="">
                            <td className="bg-yellow-300">
                                <span className="color-black">
                                    <strong> Site </strong>{" "}
                                </span>{" "}
                            </td>{" "}
                            <td className="bg-yellow-300">
                                <span className="color-black">
                                    <strong> Pour qui ? </strong>{" "}
                                </span>{" "}
                            </td>{" "}
                            <td className="bg-yellow-300">
                                <span className="color-black">
                                    <strong> Pour quoi ? </strong>{" "}
                                </span>{" "}
                            </td>{" "}
                            <td className="bg-yellow-300">
                                <span className="color-black">
                                    <strong> Où ? </strong>{" "}
                                </span>{" "}
                            </td>{" "}
                            <td className="bg-yellow-300">
                                <span className="color-black">
                                    <strong> Crypto monnaies disponibles </strong>{" "}
                                </span>{" "}
                            </td>{" "}
                            <td className="bg-yellow-300">
                                <span className="color-black">
                                    <strong> Frais </strong>{" "}
                                </span>{" "}
                            </td>{" "}
                            <td className="bg-yellow-300">
                                <span className="">
                                    <strong> Mode de paiement </strong>{" "}
                                </span>{" "}
                            </td>{" "}
                        </tr>{" "}
                        <tr className="bg-gray-300">
                            
                            <td>
                                <strong> Coinbase </strong>{" "}
                            </td>
                            
                            <td> Débutants </td> <td> Achat / Vente </td>{" "}
                            <td> États - Unis </td> <td> Bitcoin, Ethereum, Litecoin </td>{" "}
                            <td> Taux élevés </td> <td> CB, virements, crypto - monnaie </td>{" "}
                        </tr>{" "}
                        <tr>
                            <td>
                                <strong> eToro </strong>{" "}
                            </td>{" "}
                            <td> Débutants </td> <td> Trading </td> <td> Chypre </td>{" "}
                            <td> Bitcoin, Ethereum, +12 </td> <td> Moyens </td>{" "}
                            <td> CB, virement, PayPal... </td>{" "}
                        </tr>{" "}
                        <tr className="bg-gray-300">
                            <td>
                                <strong> Kraken </strong>{" "}
                            </td>{" "}
                            <td> Expérimentés </td> <td> Echange </td> <td> États - Unis </td>{" "}
                            <td> Bitcoin, Ethereum, +15 </td> <td> Taux faibles </td>{" "}
                            <td> CB et virements </td>{" "}
                        </tr>{" "}
                        <tr>
                            <td>
                                <strong> Binance </strong>{" "}
                            </td>{" "}
                            <td> Expérimentés </td> <td> Trading </td> <td> Asie </td>{" "}
                            <td> Bitcoin, +200 </td> <td> Taux faibles </td>{" "}
                            <td> Crypto - monnaie uniquement </td>{" "}
                        </tr>{" "}
                        <tr className="bg-gray-300">
                            <td>
                                <strong> Coinhouse </strong>{" "}
                            </td>{" "}
                            <td> Tous profils </td> <td> Trading, Achat et vente </td>{" "}
                            <td> France </td> <td> Bitcoin et Ethereum </td> <td> Moyens </td>{" "}
                            <td> CB, cartes prépayées... </td>{" "}
                        </tr>{" "}
                    </tbody>{" "}
                </table>{" "}
            </div>{" "}
            
        </Layout>
    );
}
