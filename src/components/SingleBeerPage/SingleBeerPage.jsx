import React from "react";

export default function SingleBeerPage({ match }) {
  //   useEffect(() => {
  //     let url = `https://api.openbrewerydb.org/breweries/666`;
  //     Axios.get(url).then((res) => {
  //       console.log(res.data);
  //     });
  //   });

  console.log(match);
  return <div>this is a single beer page {match.params.id}</div>;
}
