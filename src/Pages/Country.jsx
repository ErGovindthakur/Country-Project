import { useEffect, useState, useTransition } from "react";
import { getCountriesData } from "../api/PostApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/Layout/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries,setCountries] = useState([])

  const [search,setSearch] = useState()
  const [filter,setFilter] = useState('all')

  useEffect(() => {
    startTransition(async () => {
      const response = await getCountriesData();
     //  console.log(response.data)
      setCountries(response.data)
    });
  }, []);

  if (isPending) return <Loader />;

//   console.log(search,filter)


  // Here is the main logic
  // Applying search functionality
  const searchCountry = (country) => {
     if(search){
          return country.name.common.toLowerCase().includes(search.toLowerCase())
     }
     return country;
  }

  // Applying filter functionality
  const filterCountryRegion = (country) => {
    if(filter === 'all'){
         return country
    }
    return country.region === filter
  }
  const filterCountries = countries.filter((country) => searchCountry(country)
   && filterCountryRegion(country))


  return (
    <>
      <section className="country-section container">
      <SearchFilter
      search={search}
      setSearch={setSearch}
      filter={filter}
      setFilter={setFilter}
      countries={countries}
      setCountries={setCountries}
       />
      <ul className="grid grid-four-cols">
      {
          filterCountries.map((country,index) => {
               return(
                    <CountryCard country={country} key={index} />
               )
          })
      }
      </ul>
      </section>
    </>
  );
};
