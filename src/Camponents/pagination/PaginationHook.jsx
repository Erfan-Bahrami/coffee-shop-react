import React from "react";
import clsx from "clsx";

const PaginationHook = ({
  currentPage,
  pageCount,
  changePage,
  nextPage,
  prevPage,
}) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-8" dir="rtl">
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className={clsx("px-6 py-2 rounded-lg", {
          "opacity-50 cursor-not-allowed": currentPage === 1,
        })}
      >
        قبلی
      </button>

      <div className="flex gap-2">
        {Array.from({ length: pageCount }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => changePage(i + 1)}
            className={clsx("w-10 h-10 rounded-lg", {
              "bg-emerald-600 text-white": currentPage === i + 1,
              "bg-gray-200": currentPage !== i + 1,
            })}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <button
        onClick={nextPage}
        disabled={currentPage === pageCount}
        className={clsx("px-6 py-2 rounded-lg", {
          "opacity-50 cursor-not-allowed": currentPage === pageCount,
        })}
      >
        بعدی
      </button>
    </div>
  );
};

export default PaginationHook;
