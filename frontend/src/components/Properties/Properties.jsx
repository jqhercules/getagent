import React from "react";
import Card from "@components/Card/Card";

function Properties({ data, searchTerm }) {
  return (
    <div className="w-full mt-12">
      {data?.lrProperty.length !== 0 && (
        <div className="text-center mb-12">
          <h1 className="text-2xl">
            Search results for:{" "}
            <span className="italic uppercase">{searchTerm}</span>
          </h1>
        </div>
      )}

      <div
        className={`${
          data?.lrProperty.length === 0
            ? "grid place-items-center"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        }`}
      >
        {data?.lrProperty.length === 0 ? (
          <p className="text-[22px]">No properties found for - {searchTerm}</p>
        ) : (
          data?.lrProperty.map((item, index) => (
            <Card key={item.id} item={item} />
          ))
        )}
      </div>
    </div>
  );
}

export default Properties;
