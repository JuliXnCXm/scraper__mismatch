import React, { useCallback, useEffect, useMemo, useState } from 'react'
import '../styles/Store.css'
import SpinnerLoader from '../SpinnerLoader';
import { useLocation } from 'react-router';

const Store = () => {
  const { pathname } = useLocation();
  const [skip, setSkip] = useState(10);
  const switchLocalData = () => {
    switch (pathname.split("/").at(-1)) {
      case "farmatodo":
        return require("../localData/farmatodo.json");
      case "olimpica":
        return require("../localData/olimpica.json");
      case "carulla":
        return require("../localData/carulla.json")
      case "hipermar":
        return "";
      default:
        return require("../localData/larebaja.json");
    }
  };
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const itemsPerPage = 10;
  const [loading, setLoading] = useState(false);
  const [localData, setLocalData] = useState(switchLocalData())

  useEffect(() => {
    setData([
      ...data,
      ...localData.slice(data.length, data.length + skip),
    ]);
  }, [skip]);

  useMemo(() => {
      const result = data.filter((product) => {
        return product?.nombres_productos?.toLowerCase().includes(query);
      });
      setFilteredData(result);
    }, [data, query]);

  const handleScroll = (e) => {
    const { offsetHeight, scrollTop, scrollHeight } = e.target;

    if (offsetHeight + scrollTop === scrollHeight) {
      setSkip(data.length + itemsPerPage);
    }
  };

  const handleSearch = (e) => {
    setLoading(true)
    const result = localData.filter((product) => {
      return product.nombres_productos.toLowerCase().includes(query);
    });
    setFilteredData(result);
    setTimeout(() =>{
      setLoading(false)
    }, 3000)
  }

  return (
    <>
    <div className="exploreLayout--children__searcher">
        <div className="exploreLayout--children__searcher-icon">
            <span className="material-icons material-icons-outlined">
            search
            </span>
        </div>
        <input
            className="exploreLayout--children__searcher-input"
            type="text"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
        />
      <button className="exploreLayout--children__searcher-button" onClick={handleSearch}>
            Search
      </button>
    </div>
    {loading ?
    <SpinnerLoader />
    :
    <div onScroll={handleScroll} id="grid--container">
        {filteredData?.map((element, idx) => {
          return (
            <div key={idx} id="product--container">
              <img src={element?.imagenes} alt="" />
              <div>
                <span>Nombre: {element?.nombres_productos}</span>
                <span>Categoria: {element?.categoria}</span>
                <span>Precio: {element?.precios}</span>
              </div>
            </div>
          );
        })}
    </div>
    }
    </>
  );
}

export default Store