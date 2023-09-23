//
// @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,800;1,600&display=swap');
import React from "react";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const st = {
    color: "WHITE",
    fontSize: "50px",
    // fontFamily:"poppins"
  };
  const navigate = useNavigate();
  return (
    <div className="header p-3">
      <div className="row justify-content-center pt-2 pb-1">
        <div className="d-flex justify-content-center mb-3">
          <img
            src="https://www.transparentpng.com/thumb/treasure/gold-treasure-chest-clipart-5.png"
            alt="BigTreasure"
            width="70px"
            className="me-3"
          ></img>
          <h1 className="text-center font_meie_script mt-4" style={st}>
            BigTreasure
          </h1>
        </div>
        <div className="col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex">
          <button
            className="btn btn-success me-4"
            onClick={() => navigate("/")}
          >
            {" "}
            Home
          </button>
          <input
            className="form-control col-xs-12 "
            type="search"
            placeholder="Search..."
          />
          <button
            className="btn btn-success ms-3"
            onClick={() => navigate("/cart")}
          >
            {" "}
            Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
