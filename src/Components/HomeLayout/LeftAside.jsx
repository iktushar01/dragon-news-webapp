import React, { Suspense } from "react";
import Categories from "../Categories";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center  h-40">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <Categories />
      </Suspense>
    </div>
  );
};

export default LeftAside;
