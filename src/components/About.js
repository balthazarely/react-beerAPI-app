import React, {useState, useEffect} from "react";
 
function App() {
 const [favorites, setFavorites] = useState([
    {
      brewery_type: "micro",
      city: "Wasilla",
      country: "United States",
      id: 55,
      latitude: "61.5752695",
      longitude: "-149.4127103",
      name: "Bearpaw River Brewing Co",
      phone: "",
      postal_code: "99654-7679",
      state: "Alaska",
      street: "4605 E Palmer Wasilla Hwy",
      updated_at: "2018-08-23T23:20:40.743Z",
      website_url: "http://bearpawriverbrewing.com",
    },
    {
      brewery_type: "micro",
      city: "Denver",
      country: "United States",
      id: 1516,
      latitude: "39.7615104",
      longitude: "-104.9812181",
      name: "Ratio Beerworks",
      phone: "3102669264",
      postal_code: "80205-2309",
      state: "Colorado",
      street: "2920 Larimer St",
      updated_at: "2018-08-24T00:24:20.330Z",
      website_url: "http://ratiobeerworks.com",
    },
    {
      brewery_type: "large",
      city: "Denver",
      country: "United States",
      id: 1239,
      latitude: "39.7735561",
      longitude: "-104.9769417",
      name: "Blue Moon Brewery",
      phone: "",
      postal_code: "80216-3632",
      state: "Colorado",
      street: "3750 Chestnut Pl",
      updated_at: "2018-08-24T00:05:51.775Z",
      website_url: "",
    },
    {
      brewery_type: "micro",
      city: "Bellingham",
      country: "United States",
      id: 7558,
      latitude: "48.7635508571429",
      longitude: "-122.486221142857",
      name: "Menace Brewing",
      phone: "3605954059",
      postal_code: "98225-2406",
      state: "Washington",
      street: "2529 Meridian St",
      updated_at: "2018-08-24T16:36:51.570Z",
      website_url: "",
    },
  ]);


 
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState();
 
  // exclude column list from filter
  const excludeColumns = ["id", "color"];
 
  // handle change event of search input
  const handleFilterInput = value => {
    setSearchText(value);
    filterData(value);
  };
 
  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(favorites);
    else {
      const filteredData = favorites.filter(item => {
        return Object.keys(item).some(key =>
          excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  }


    useEffect(() => {
        setData(favorites)
    }, [])


 
 
  return (
    <div className="App">
      Search: <input
        style={{ marginLeft: 5 }}
        type="text"
        placeholder="Type to search..."
        value={searchText}
        onChange={e => handleFilterInput(e.target.value)}
      />
      <div className="box-container">
        {data && data.map((d, i) => {
          return <div key={i} className="box" style={{ backgroundColor: d.color }}>
            <b>Name: </b>{d.name}<br />
             <b>city: </b>{d.city}<br />
              <b>state: </b>{d.state}<br />
              <br/>
       
          </div>
        })}
        <div className="clearboth"></div>
        {/* {data.length === 0 && <span>No records found to display!</span>} */}
      </div>
    </div>
  );
}
 
export default App;