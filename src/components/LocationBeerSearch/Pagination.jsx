import React from "react";

export default function Pagination({
  breweriesPerPage,
  totalBreweries,
  paginate,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBreweries / breweriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div>
        {pageNumbers.map((number) => {
          return (
            <button key={number} onClick={() => paginate(number)}>
              {number}
            </button>
          );
        })}
      </div>
    </div>
  );
}
