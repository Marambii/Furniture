import { createContext, useEffect, useState } from "react";
import  Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";
export const  FurnitureContext = createContext()


export default function FurnitureProvider({children}) 
{
    const nav = useNavigate()
    const [furnitures, setFurnitures] = useState([])
    const [onChange, setonChange] = useState(true)

    //Edit Furniture

        const editFurniture = ( id, image, price, description, category, user_id ) =>{
            fetch(`furnishings/${id}`, {
                method: "PATCH",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({id, image, price, description, category, user_id })
            })
            .then((res)=>res.json())
            .then((response)=>{
                console.log(response)
                if(response.error)
                {
                    Swal.fire(
                        'Error',
                        response.error,
                        'error'
                      )
                }
                else if(response.success)
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
    // fetching posts
    useEffect(()=>{
        fetch("/furnishings")
        .then((res)=>res.json())
        .then((response)=>{
            setFurnitures(response)
            console.log("Posts ",response)
        })
    }, [onChange])
    
    // Add Furniture
    const addFurniture = (image, price, description, category) =>{
        fetch("/furnishings", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({image, price, description, category})
        })
        .then((res)=>res.json())
        .then((response)=>{
            console.log(response)
            if(response.error)
            {
                Swal.fire(
                    'Error',
                    response.error,
                    'error'
                  )
            }
            else if(response.success)
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
    // Delete Furniture
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
        deletePost,
        addFurniture,
        editFurniture
    }

  return (
   <FurnitureContext.Provider value={contextData}>
    {children}
   </FurnitureContext.Provider>
  )
}