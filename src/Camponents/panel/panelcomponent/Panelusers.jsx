import React from "react";
import api from "../../../api/api";
import { FaTrashAlt } from "react-icons/fa";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
const Panelusers = () => {
  const queryClient = useQueryClient();
  const fetchusers = async () => {
    const res = await api.get("/users");
    return res.data;
  };
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: fetchusers,
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => api.delete(`/users/${id}`),

    onSuccess: () => {
      toast.success("✅ کاربر با موفقیت حذف شد!");
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });

  const handleDelet = (id) => {
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
      <button onClick={() => toast.success("✅ تست موفقیت!")}>تست Toast</button>
      {users?.map((user, index) => (
        <div key={user.id} className="flex items-center p-2 shadow-sm">
          <div className="flex items-center gap-12 p-5  w-[1120px] h-[48px] m-8 bg-white rounded-[5px] shadow-lg">
            <div className="flex items-center">
              <span> {index + 1} -</span>
            </div>
            <div className="flex items-center gap-2 ">
              <span>نام :</span>
              <span className=" ">{user.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>ایمیل :</span>
              <span> {user.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>رمزعبور :</span>
              <span> {user.password}</span>
            </div>
            <button onClick={() => handleDelet(user.id)}>
              <FaTrashAlt />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Panelusers;
