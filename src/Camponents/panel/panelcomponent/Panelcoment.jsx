import React from "react";
import api from "../../../api/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
const Panelcoment = () => {
  const queryClient = useQueryClient();
  const fetchcoment = async () => {
    const res = await api.get("/comments");
    return res.data;
  };
  const { data: coment } = useQuery({
    queryKey: ["coment"],
    queryFn: fetchcoment,
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => api.delete(`/comments/${id}`),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["coment"],
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
    <div>
      {coment?.map((item, index) => (
        <div key={item.id} className="flex items-center p-2 shadow-sm">
          <div className="flex items-center gap-12 p-5  w-[1120px] h-[48px] m-8 bg-white rounded-[5px] shadow-lg">
            <div className="flex items-center">
              <span> {index + 1} -</span>
            </div>
            <div className="flex items-center gap-2 ">
              <span>نام :</span>
              <span className=" ">{item.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>ایمیل :</span>
              <span> {item.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>کامنت :</span>
              <span> {item.comment}</span>
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

export default Panelcoment;
