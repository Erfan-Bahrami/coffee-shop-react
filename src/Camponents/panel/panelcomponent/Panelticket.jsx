import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import React from "react";
import api from "../../../api/api";
import { FaTrashAlt } from "react-icons/fa";
const Panelticket = () => {
  const queryClient = useQueryClient();
  const fetchticket = async () => {
    const res = await api.get("/ticket");
    return res.data;
  };

  const { data: ticket } = useQuery({
    queryKey: ["ticket"],
    queryFn: fetchticket,
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => api.delete(`/ticket/${id}`),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["ticket"],
      });
      toast.success("✅ کاربر با موفقیت حذف شد!");
    },
  });
  const hadleDelete = (id) => {
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
  return (
    <div className="">
      {ticket?.map((item, index) => (
        <div key={item.id} className="flex items-center p-2 shadow-sm ">
          <div className="flex items-center gap-12 p-5  w-[1120px] h-[48px] m-8 bg-white rounded-[5px] shadow-lg">
            <div className="flex items-center">
              <span> {index + 1} -</span>
            </div>
            <div className="flex items-center gap-2 ">
              <span>متن :</span>
              <span className=" ">{item.ticket}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>آیدی :</span>
              <span> {item.id}</span>
            </div>

            <div>
              <button onClick={() => hadleDelete(item.id)}>
                <FaTrashAlt />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Panelticket;
