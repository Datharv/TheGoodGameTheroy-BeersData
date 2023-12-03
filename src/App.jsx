import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.punkapi.com/v2/beers");
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredResults);
  }, [searchTerm, data]);


  return (
    <div>
      <h1>Famous Beers | Atharv Darunkar</h1>
      <div style={{ padding: 5, margin: 50, maxWidth: "100%" }}>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: 20,
            width: "80%",
            fontSize: "20px",
            outline: "none",
            border:"none",
            borderRadius: "10px",
            boxShadow: "0px 0px 4px 1px #720e9e",
          }}
        />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 8, md: 12 }}
          >
            {filteredData.map((item) => (
              <Grid item xs={2} sm={4} md={4} key={item.id}>
                <Card
                  name={item.name}
                  description={item.description}
                  image_url={item.image_url}
                  tagline={item.tagline}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </div>
  );
}

export default App;
