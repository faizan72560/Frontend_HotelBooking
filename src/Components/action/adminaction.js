import axios from "axios"


export const addpost=(formdata)=>async(dispatch)=>{
    try{
        console.log(formdata)

        const config={
            headers:{
              'Content-Type': 'multipart/form-data',
            },
            withCredentials:true
          }

        
        dispatch({
            type:"ADD_POST_REQUEST"
        })
        
        const {data}=await axios.post('https://hotel-booking-backend-five.vercel.app/api/v1/addpost',formdata,config)
        console.log(data)
        dispatch({
            type:"ADD_POST_SUCCESS",
            payload:data.post
        })
    }catch(err){
        dispatch({
            type:"ADD_POST_FAILURE",
            payload:err
        })
      
    }

}


export const updatepost=(name,city,price,room,id)=>async(dispatch)=>{
    try{

        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
            
            
            withCredentials:true
            
            
            
        }
    

        
        dispatch({
            type:"UPDATE_POST_REQUEST"
        })
        
        const {data}=await axios.post(`https://hotel-booking-backend-five.vercel.app/api/v1/updatepost${id}`,{name,city,room,price},config)
        console.log(data)
        dispatch({
            type:"UPDATE_POST_SUCCESS",
            payload:data.post
        })
    }catch(err){
        dispatch({
            type:"UPDATE_POST_FAILURE",
            payload:err
        })
      
    }

}


export const deletepost=(id)=>async(dispatch)=>{
    try{

        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
            
            
            withCredentials:true
            
            
            
        }
    

        
        dispatch({
            type:"UPDATE_POST_REQUEST"
        })
        
        const {data}=await axios.delete(`https://hotel-booking-backend-five.vercel.app/api/v1/deletepost${id}`,config)
        console.log(data)
        dispatch({
            type:"UPDATE_POST_SUCCESS",
            payload:data.post
        })
    }catch(err){
        dispatch({
            type:"UPDATE_POST_FAILURE",
            payload:err
        })
      
    }

}



export const Getallpost=(id)=>async(dispatch)=>{
    try{
        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
            
            
            withCredentials:true
            
            
            
        }
    

        
        dispatch({
            type:"GETALL_POST_REQUEST"
        })
        
        const {data}=await axios.get(`https://hotel-booking-backend-five.vercel.app/api/v1/allpost`,config)
        console.log(data)
        dispatch({
            type:"GETALL_POST_SUCCESS",
            payload:data.post
        })
    }catch(err){
        dispatch({
            type:"GETALL_POST_FAILURE",
            payload:err
        })
      
    }

}