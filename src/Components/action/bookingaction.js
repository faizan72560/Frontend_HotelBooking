import axios from "axios"

export const Booking=(name,city,price,date,room,image)=>async(dispatch)=>{
    try{

        
        dispatch({type: "BookingPostRequest"})
        console.log(name,city,price,room,image)
        
        const config={
            headers:{
              'Content-Type': 'multipart/form-data',
            },
            withCredentials:true
          }
        

        const {data}=await axios.post('https://hotel-booking-backend-five.vercel.app/api/v1/booking',{name,room,price,date,city,image},config)
        console.log(data)


        dispatch({
            type:"BookingPostSuccess",
            payload:data.booked
        })

    }catch(err){
        dispatch({
            type:"BookingPostFailure",
            payload:err._message
        })
    }



}


export const Deletebooking=(id)=>async(dispatch)=>{
    try{
        dispatch({type: "DeletePostRequest"})

        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
            
            
            withCredentials:true
            
            
            
        }
       
        

        const {data}=await axios.delete(`https://hotel-booking-backend-five.vercel.app/api/v1/deletebooking/${id}`,config)
        console.log(data)


        dispatch({
            type:"DeletePostSuccess",
            payload:data.booked
        })

    }catch(err){
        dispatch({
            type:"DeletePostFailure",
            payload:err._message
        })
    }



}