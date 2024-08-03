import React from "react";
import Heading from "./Heading";

const cities = [
  { id: 1, name: "New York", country: "USA" },
  { id: 2, name: "Tokyo", country: "Japan" },
  { id: 3, name: "London", country: "UK" },
  { id: 4, name: "Paris", country: "France" },
  { id: 5, name: "Shanghai", country: "China" },
  { id: 6, name: "Dubai", country: "UAE" },
  { id: 7, name: "Singapore", country: "Singapore" },
  { id: 8, name: "Hong Kong", country: "China" },
  { id: 9, name: "Los Angeles", country: "USA" },
  { id: 10, name: "Sydney", country: "Australia" },
  { id: 11, name: "Rome", country: "Italy" },
  { id: 12, name: "Berlin", country: "Germany" },
  { id: 13, name: "Bangkok", country: "Thailand" },

  { id: 14, name: "Moscow", country: "Russia" },
  { id: 15, name: "Mumbai", country: "India" },
  { id: 16, name: "Istanbul", country: "Turkey" },
  { id: 17, name: "Seoul", country: "South Korea" },
  { id: 18, name: "Toronto", country: "Canada" },
  { id: 19, name: "San Francisco", country: "USA" },
  { id: 20, name: "Barcelona", country: "Spain" },
  { id: 21, name: "Barcelona", country: "Spain" },
];

const PopulerCities = () => {
  return (
    <div>
      <Heading props={"Populer Cities"} />
      <div className="bg-white p-10 rounded-md mt-3 grid grid-cols-2 sm:grid-cols-3">
        {cities.map((city) => (
          <div className="border-b py-3" key={city.id}>
            <p className="text-lg text-primary">{city.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopulerCities;
