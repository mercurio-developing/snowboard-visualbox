import React from "react";

export default () => {
  return (
    <div className="col-xl-12 col-lg-12 col-md-12">
      <div className="row h-50">
        <div className="col-xl-6 col-lg-6 col-md-6 mx-auto mt-5">
          <img
            className="img-fluid"
            src={process.env.PUBLIC_URL + "/assets/loading.gif"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
