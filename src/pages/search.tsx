import { useState } from "react"
import ProductCard from "../components/productCard";


const Search = () => {

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const addToCart = () => { }
  
  const isNextPage = true;
  const isPrevPage = true;

  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">Default</option>
            <option value="asx">Price (low to High)</option>
            <option value="dsc">Price (High to low)</option>
          </select>
        </div>

        <div>
          <h4>Max Price : {maxPrice || " "}</h4>
          <input
            type="range"
            min={100}
            max={100000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        <div>
          <h4>Select Category</h4>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="">Sample 1</option>
            <option value="">Sample 2</option>
          </select>
        </div>
      </aside>
      <main>
        <h1>Products </h1>
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="search-product-list">
          <ProductCard
            productId="abcd"
            name="macbook"
            photo="https://m.media-amazon.com/images/I/71WkDp--uqL._SX679_.jpg"
            price={213000}
            stock={30}
            handler={addToCart}
          />
        </div>

        <article>
          <button 
            disabled = {!isPrevPage}
            onClick={() => setPage((prev) => prev - 1)}>Prev</button>
          <span>
            {page} of {4}
          </span>
          <button
            disabled = {!isNextPage}
            onClick={() => setPage((prev) => prev + 1)}>Next </button>
        </article>
      </main>
    </div>
  );
}

export default Search