import {Toaster,toaster} from "@/components/ui/toaster";
import { useCallback } from "react";

const useShowToast = () => {
  const showToast = useCallback(
    (title,desc,status)=>{
        toaster({
            description:desc,
            type:status,
            duration:3000,
            isClosable:true,
        })
    },
  )
  return showToast;
}

export default useShowToast