import { useState } from "react";
import styles from "../styles/Card.module.css";

export default function Card(props: any) {
  const [nft, setNft] = useState(JSON.parse(props.uri.metadata))
  const [nftImage, setNftImage] = useState(nft.image.split("ipfs://")[1])

  return (
    <section className={styles.cardContainer}>
      {nft?.name ? (
        <h1>{nft.name}</h1>
      ) : (
        <h1>No NFT title can be shown.</h1>
      )}
      {nftImage ? (
        <img src={`https://ipfs.io/ipfs/${nftImage}`} />
      ) : (
        <p>No NFT image can be shown.</p>
      )}
    </section>
  );
}
