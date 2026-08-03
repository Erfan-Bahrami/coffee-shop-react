import React from "react";
import { Link } from "react-router";
const Searchinpute = ({ Search, setsearch, filteredProducts }) => {
  return (
    <div>
      <div>
        <input
          type="text"
          value={Search}
          onChange={(e) => setsearch(e.target.value)}
          placeholder="جستجوی محصول..."
          className="w-[256px] h-10 mt-[6px] rounded-xl px-4 outline-none border border-gray-300
             dark:bg-zinc-700 dark:text-white dark:border-zinc-500"
        />

        {Search && (
          <div
            className="absolute top-14 w-72 rounded-xl bg-white dark:bg-zinc-800
                 shadow-lg border dark:border-zinc-700 max-h-80 overflow-y-auto"
          >
            {filteredProducts?.length > 0 ? (
              filteredProducts.map((product) => (
                <Link to={"./shop"}>
                  <div
                    key={product.id}
                    className="flex items-center gap-3 p-3 hover:bg-gray-100
                       dark:hover:bg-zinc-700 cursor-pointer"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-14 h-14 rounded-lg"
                    />

                    <div>
                      <p className="text-sm dark:text-white">{product.name}</p>

                      <p className="text-emerald-600 text-xs">
                        {product.price.toLocaleString()} تومان
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center p-4 text-gray-400">محصولی پیدا نشد</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchinpute;
