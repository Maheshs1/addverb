import logo from './logo.svg';
import './App.css';
import Country from './components/Country';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';

function App() {

  const [countries, setCountries] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getCountries = async() => {
    setRefresh(true);
    setCountries([]);
    const req = await fetch("https://restcountries.com/v3.1/region/asia");
    const data = await req.json();
    const countries = data.map((data) => {
      return {
        name:data.name.common,
        capital:data.capital?data.capital[0]:"",
        region:data.region,
        subRegion:data.subregion,
        population:String(data.population).split("").reverse().reduce((whole,curr,index)=>{
          if(index==3)return whole+","+curr
          else if(index!=1 && index%2==1)return whole+","+curr
          return whole+curr;
        },"").split("").reverse().join(""),
        languages:Object.keys(data.languages).map(lang=>data.languages[lang]+","),
        borders:data.borders?data.borders.map(border=>border+","):"",
        flags:data.flags.png
      }
    })
    console.log(countries);
    setRefresh(false);
    setCountries(countries);
  }

  useEffect(()=> {
    getCountries();
  },[])

  return (
    <div className="App">
      <h1>Countries</h1>      
      <hr />
      {refresh?<Loader />:<button onClick={getCountries} className='refresh-btn'>Refresh</button>}
      <br/>
      { countries.map(country => <Country {...country} />) }
    </div>
  );
}

export default App;
