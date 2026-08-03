// import clsx from "clsx";
// import React, { useEffect, useState } from "react";

// const Pagination = ({ items, setitems, itemsperpage }) => {
//   const [currentpage, setcurrentpage] = useState(1);
//   const pagecount = Math.ceil(items.length / itemsperpage);

//   useEffect(() => {
//     const startindex = (currentpage - 1) * itemsperpage;
//     const endindex = startindex + itemsperpage;
//     const paginateditems = items.slice(startindex, endindex);

//     console.log(paginateditems);
//   });
//   const changepagehandeler = (pagenumber) => setcurrentpage(pagenumber);
//   return (
//     <div className="pagination bg-zinc-50/40 ">
//       <button
//         className={clsx("pagination-prev-button text-white", {
//           "pages-ended active-tab": currentpage === 1,
//         })}
//         disabled={currentpage === 1}
//         onClick={() => changepagehandeler(currentpage - 1)}
//       >
//         قبلی
//       </button>
//       {/* <button
//         disabled={currentpage === pagecount}
//         onClick={() => changepagehandeler(currentpage + 1)}
//         className={clsx("pagination-prev-button", {
//           "pages-ended active-tab": currentpage === pagecount,
//         })}
//       >
//         بعدی
//       </button> */}

//       <button
//         className={clsx(
//           "px-6 py-2.5 rounded-lg font-DanaMedium text-sm transition-all duration-200",
//           "bg-white dark:bg-zinc-700 text-gray-700 dark:text-gray-200",
//           "hover:bg-gray-100 dark:hover:bg-zinc-600",
//           "border border-gray-200 dark:border-zinc-600",
//           "shadow-sm hover:shadow-md",
//           {
//             "opacity-50 cursor-not-allowed hover:shadow-sm":
//               currentpage === pagecount,
//             "active:scale-95": currentpage !== pagecount,
//           },
//         )}
//         disabled={currentpage === pagecount}
//         onClick={() => changepagehandeler(currentpage + 1)}
//       >
//         بعدی
//       </button>
//     </div>
//   );
// };

// export default Pagination;

// Pagination.jsx
import React, { useEffect, useState } from "react";
import clsx from "clsx";

const Pagination = ({ items, setitems, itemsperpage }) => {
  const [currentpage, setcurrentpage] = useState(1);
  const pagecount = Math.ceil(items.length / itemsperpage);

  const changepagehandeler = (pagenumber) => setcurrentpage(pagenumber);

  useEffect(() => {
    const startindex = (currentpage - 1) * itemsperpage;
    const endindex = startindex + itemsperpage;
    setitems(items.slice(startindex, endindex));
  }, [currentpage, items, itemsperpage]);

  const renderpagenumbet = () => {
    const pagenumbers = [];
    for (let i = 1; i <= pagecount; i++) {
      pagenumbers.push(
        <button
          key={i}
          onClick={() => changepagehandeler(i)}
          className={clsx("pagination-button", {
            "active-tab": currentpage === i,
            "non-active-tab": currentpage !== i,
          })}
        >
          {i}
        </button>,
      );
    }

    return pagenumbers;
  };
  return (
    <div className="flex justify-center items-center gap-4 mt-8" dir="rtl">
      {/* دکمه قبلی */}
      <button
        className={clsx(
          "px-6 py-2.5 rounded-lg font-DanaMedium text-sm transition-all duration-200",
          "dark:bg-white bg-zinc-700 text-white dark:text-zinc-700",
          "dark:hover:bg-white hover:bg-zinc-600",
          "border border-gray-200 dark:border-zinc-600",
          "shadow-sm hover:shadow-md",
          {
            "opacity-50 cursor-not-allowed hover:shadow-sm": currentpage === 1,
            "active:scale-95": currentpage !== 1,
          },
        )}
        disabled={currentpage === 1}
        onClick={() => changepagehandeler(currentpage - 1)}
      >
        قبلی
      </button>

      {/* شماره صفحات */}
      <div className="flex gap-1">
        {Array.from({ length: pagecount }, (_, i) => i + 1).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => changepagehandeler(pageNum)}
            className={clsx(
              "w-10 h-10 rounded-lg font-DanaMedium text-sm transition-all duration-200",
              "hover:scale-105",
              {
                // صفحه فعال
                "bg-emerald-600 text-white shadow-md shadow-emerald-200 dark:shadow-emerald-900/30":
                  currentpage === pageNum,
                // صفحات غیرفعال
                "bg-white dark:bg-zinc-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-600 border border-gray-200 dark:border-zinc-600":
                  currentpage !== pageNum,
              },
            )}
          >
            {pageNum}
          </button>
        ))}
      </div>

      {/* دکمه بعدی */}
      <button
        className={clsx(
          "px-6 py-2.5 rounded-lg font-DanaMedium text-sm transition-all duration-200",
          "dark:bg-white bg-zinc-700 text-white dark:text-zinc-700",
          "dark:hover:bg-white hover:bg-zinc-600",
          "border border-gray-200 dark:border-zinc-600",
          "shadow-sm hover:shadow-md",
          {
            "opacity-50 cursor-not-allowed hover:shadow-sm":
              currentpage === pagecount,
            "active:scale-95": currentpage !== pagecount,
          },
        )}
        disabled={currentpage === pagecount}
        onClick={() => changepagehandeler(currentpage + 1)}
      >
        بعدی
      </button>
    </div>
  );
};

export default Pagination;
