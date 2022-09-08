export default function Card(prop) {
  console.log("props 1", prop.uri);
  console.log("props 2", prop.uri.token_uri.toString());
  //   const uri = prop.uri.token_uri;
  const fixUrl = (uri) => {
    // prop.uri.token_uri.includes('https://ipfs')

    return `https://ipfs.moralis.io:2053/ipfs${uri
      .split("ipfs://ipfs/")
      .slice(-1, [0])}`;
  };

  const fixedUri = fixUrl(prop.uri.token_uri);

  return (
    <section>
      {console.log("its fixed", fixedUri)}
      <p>{fixedUri}</p>
      <p>hej</p>
    </section>
  );
}
