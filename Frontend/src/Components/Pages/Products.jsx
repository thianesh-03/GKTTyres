import { useState, useEffect } from "react";
import Goodyear from "../Data/Goodyear.json";
import Kelly from "../Data/Kelly.json";
import Michelin from "../Data/Michelin2.json";
 
function Products() {
  const [selectedBrand, setSelectedBrand] = useState("goodyear");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    switch (selectedBrand) {
      case "goodyear":
        setProducts(Goodyear?.tyres || []);
        break;
      case "kelly": 
        setProducts(Kelly?.tyres || []);
        break;
      case "michelin":
        setProducts(Michelin?.tyres || []);
        break;
      default:
        setProducts([]);
    }
  }, [selectedBrand]);

  return (
    <div className="container mt-4">
      <h2
        className="font-integral font-primary"
        style={{
          fontSize: "35px",
          marginTop: "25px",
          marginBottom: "30px",
          color: "#0768BD",
        }}
      >
        Select a Brand
      </h2>
      <div className="btn-group" role="group">
        <input
          type="radio"
          className="btn-check"
          id="goodyear"
          name="brand"
          value="goodyear"
          checked={selectedBrand === "goodyear"}
          onChange={() => setSelectedBrand("goodyear")}
        />
        <label className="btn btn-outline-primary" htmlFor="goodyear">
          Goodyear
        </label>

        <input
          type="radio"
          className="btn-check"
          id="kelly"
          name="brand"
          value="kelly"
          checked={selectedBrand === "kelly"}
          onChange={() => setSelectedBrand("kelly")}
        />
        <label className="btn btn-outline-primary" htmlFor="kelly">
          Kelly
        </label>

        <input
          type="radio"
          className="btn-check"
          id="michelin"
          name="brand"
          value="michelin"
          checked={selectedBrand === "michelin"}
          onChange={() => setSelectedBrand("michelin")}
        />
        <label className="btn btn-outline-primary" htmlFor="michelin">
          Michelin
        </label>
      </div>

      <div className="row mt-4">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div
              key={product.id || `${selectedBrand}-${index}`}
              className="col-md-4"
            >
              <div className="card mb-4">
                <img
                  src={product.Image}
                  className="card-img-top"
                  alt={product.Name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.Name}</h5>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">
            No products available for {selectedBrand}.
          </p>
        )}
      </div>
    </div>
  );
}

export default Products;
