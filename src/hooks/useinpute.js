import { useState } from "react";

const useinpute = (initialValue) => {
 const[formData , setFormData] = useState(initialValue)

 const handlechange = (event) => {
    const {name , value} = event. target;

     setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
 }
  return {
    formData,
    setFormData,
    handlechange
  };
}

export default useinpute