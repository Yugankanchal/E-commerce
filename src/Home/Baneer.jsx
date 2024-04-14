import React, { useState } from "react";
import productData from "../products.json";
import { Link } from "react-router-dom";
import SelectedCategory from "../components/SelectedCategory";

function Baneer() {
  const title = (
    <h2>
      Search Your One of the <span style={{ color: "red" }}>thousands</span> of
      Products
    </h2>
  );
  const des = "We have the largest collection of Products";
  const bannerList = [
    {
      iconName: "icofont-users-alt-4",
      text: "1.5 Million Customers",
    },
    {
      iconName: "icofont-notification",
      text: "More then 2000 Marchent",
    },
    {
      iconName: "icofont-globe",
      text: "Buy Anything Online",
    },
  ];
  const [searchInput, setsearchInput] = useState("");
  const [filterProducts, setfilterProducts] = useState(productData);
  //   filteration for search functionality
  function handleSearch(e) {
    const searchTerm = e.target.value;
    setsearchInput(searchTerm);
    const filtered = productData.filter((products) =>
      products.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setfilterProducts(filtered);
  }
  return (
    <>
      <div className="banner-section style-4">
        <div className="cointainer">
          <div className="banner-content">
            {title}
            <form action="">
              <SelectedCategory />
              <input
                type="text"
                id="Search"
                name="search"
                placeholder="search your product"
                value={searchInput}
                onChange={handleSearch}
              />
            </form>
            <p>{des}</p>
            <ul className="lab-ul">
              {searchInput &&
                filterProducts.map((products) => (
                  <li key={products.id}>
                    <Link to={`/shop.${products.id}`}>{products.name}</Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Baneer;
