import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import Card from "./card";

export default function FetchData() {
  const { address } = useAccount();
  const [data, setData] = useState<any[]>([]);

    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "X-API-Key": "test",
      },
    };

    useEffect(() => {
      fetch(
        `https://deep-index.moralis.io/api/v2/${address}/nft?chain=polygon&format=decimal&token_addresses=0x1Ed25648382c2e6Da067313e5DAcb4F138Bc8b33&token_addresses=0x3cd266509d127d0eac42f4474f57d0526804b44e`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          setData(response.result);
        })
        .catch((err) => console.error(err));
    }, [])

  return (
    <section>
      {data.map(nft => {
        return (
          <Card uri={nft} key={nft.block_number_minted} />
        )
      })}
    </section>
  );
}
