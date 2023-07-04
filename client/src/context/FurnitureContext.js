import { createContext, useEffect, useState } from "react";
import  Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";
export const  FurnitureContext = createContext()


export default function FurnitureProvider({children}) 
{
    const nav = useNavigate()
    const [furnitures, setFurnitures] = useState([])
    const [onChange, setonChange] = useState(true)

    // fetching posts
    useEffect(()=>{
        fetch("/furnishings")
        .then((res)=>res.json())
        .then((response)=>{
            setFurnitures(response)
            console.log("Posts ",response)
        })
    }, [onChange])
    

// Delete Post
    const deletePost = (id) =>{
        fetch(`furnishings/${id}`, {
         method: "DELETE",
                })
        .then((res)=>res.json())
        .then((response)=>{
              if(response.success)
              {
                nav("/")
                Swal.fire(
                    'Success',
                    response.success,
                    'success'
                  )
                  setonChange(!onChange)
              }
              else{
                Swal.fire(
                    'Error',
                    "Something went wrong",
                    'error'
                  )
            }
              

        })
     }

    const contextData ={
        furnitures, 
        deletePost
    }

  return (
   <FurnitureContext.Provider value={contextData}>
    {children}
   </FurnitureContext.Provider>
  )
}