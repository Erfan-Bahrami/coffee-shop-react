import React, { useState } from "react";
import { Link } from "react-router";
import products from "./../../../Data/ItemsData";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import api from "../../../api/api";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import Buttoms from "./Buttoms";
import { FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import ItemModal from "../ItemModal";
import Editmodal from "./Editmodal";
const Panelitems = ({}) => {
  const queryClient = useQueryClient();
  const [ismodalopen, setismodalopen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const fetchitems = async () => {
    const res = await api.get("/products");
    return res.data;
  };

  const { data: product } = useQuery({
    queryKey: ["product"],
    queryFn: fetchitems,
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => api.delete(`/products/${id}`),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["product"],
      });
    },
  });

  const handledelet = (id) => {
    swal({
      title: "حدف شود ؟",
      text: "اگر حد ف شود نمیتوانید برگردانید!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteMutation.mutate(id);
        swal("با موفقیت حدف شد", {
          icon: "success",
        });
      } else {
        swal("حذف نشد");
      }
    });
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  return (
    <div>
      <Buttoms setismodalopen={setismodalopen} />
      <div className=" flex flex-wrap gap-4 p-[30px] pr-[128px]">
        {product?.map((product) => (
          <div key={product.id}>
            <div className="w-[272px] h-[410px] rounded-2xl bg-white dark:bg-zinc-700 shadow-lg">
              <Link to="./shop">
                <div className="w-[224px] mr-[22px] mt-[6px]">
                  <img src={product.image} alt={product.name} />
                </div>

                <div className="font-YekanBakhRegular text-[20px] mr-[26px] mt-[14px] dark:text-white">
                  <span>
                    {product.name}
                    <br /> {product.nameLine2}
                  </span>
                </div>
              </Link>

              <div className="flex items-center font-DanaBold gap-x-[5px] text-emerald-600 mr-[26px] mt-[10px]">
                {/* <span className="text-[22px]">{product.price.toLocaleString()}</span> */}
                <span className="text-[18px]">{product.price}</span>
                <span className="text-[18px]">{product.priceCurrency}</span>
              </div>

              <div className="flex items-center gap-x-[64px] mt-[12px]">
                <div className="flex items-center mr-[17px] gap-x-[15px]">
                  <div>
                    <div
                      className=" cursor-pointer"
                      onClick={() => addtocart(product.id)}
                    >
                      <HiOutlineShoppingCart
                      // className={`w-[22px] h-[22px] ${
                      //   isInCart ? "text-red-500" : "text-gray-400"
                      // }`}
                      />
                    </div>
                  </div>

                  <div
                    onClick={() => addtoLove(product.id)}
                    className="cursor-pointer"
                  >
                    <FaRegHeart
                    // className={`w-[22px] h-[22px] ${isInLove ? "text-red-500" : " text-gray-400"}`}
                    />
                  </div>

                  <div
                    onClick={() => handledelet(product.id)}
                    className="cursor-pointer"
                  >
                    <FaTrashAlt />
                  </div>

                  <div
                    onClick={() => handleEdit(product)}
                    className="cursor-pointer"
                  >
                    <FaExchangeAlt />
                  </div>
                </div>

                <div className="flex items-center gap-1 w-[120px] h-[24px]">
                  {/* {renderStars()} */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ItemModal
        open={ismodalopen}
        onclose={() => setismodalopen(false)}
        products={product}
      />
      <Editmodal
        open={open}
        setOpen={setOpen}
        onclose={() => setOpen(false)}
        products={product}
        selectedProduct={selectedProduct}
      />
    </div>
  );
};

export default Panelitems;
