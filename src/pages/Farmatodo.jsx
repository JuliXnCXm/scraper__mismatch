import React, { useEffect, useMemo, useState } from 'react'
import '../Store.css'
import farmatodo from '../farmatodo.json'
// import carulla from '../carulla.json'
// import lareabaja from '../larebaja.json'
// import olimpica from '../olimpica.json'
// import hipermar from '../hipermar.json'

import { useLocation } from 'react-router';
const Store = () => {

  const [localData, setLocalData] = useState(farmatodo);
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState("")
  const [skip, setSkip] = useState(10)
  const [data, setData] = useState([]);
  const { pathname } = useLocation();
  const itemsPerPage = 10;

  useEffect(() => {
    switch (pathname.split("/").at(-1)) {
      case "farmatodo":
        setData(farmatodo);
        break;
      // case "hipermar":
      //     setData(hipermar)
      //     break
      // case "olimpica":
      //     setData(olimpica)
      //     break
      // case "carulla":
      //     setData(carulla)
      //     break
      default:
        setData("");
        break;
    }
  }, [pathname]);


  useMemo(() => {
      const result = data.filter((product) => {
        return product.nombres_productos.toLowerCase().includes(query);
      });
      setFilteredData(result);
  }, [data, query]);


  useEffect(() => {
    setData([
      ...data,
      ...localData.slice(data.length, data.length + skip),
    ]);
  }, [skip]);

  const handleScroll = (e) => {
    const { offsetHeight, scrollTop, scrollHeight } = e.target;

    if (offsetHeight + scrollTop === scrollHeight) {
      setSkip(data.length + itemsPerPage);
    }
  };

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
      <button className="exploreLayout--children__searcher-button">
            Search
      </button>
    </div>
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
      <span></span>
    </div>
    </>
  );
}

export default Store