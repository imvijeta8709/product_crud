import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
const id=JSON.parse(window.localStorage.getItem("st"))
export default function Update(){
    const [prod_name,setName]=useState("")
    const [price,setPrice]=useState("")
    const [qty,setQty]=useState("")
    const [img,setImg]=useState("")
    

    useEffect(()=>{
        fetch('http://localhost:3000/products/'+id)
        .then((res)=>{
            return res.json()
        }).then((resp)=>{
            setName(resp.prod_name);
            setPrice(resp.price);
            setQty(resp.qty);
            setImg(resp.img);  
        })
    },[])


function Update(){
    let data={prod_name,price,qty,img,}
   const id= JSON.parse(window.localStorage.getItem("st"))
   fetch(`http://localhost:3000/products/${id}`,{
    method:"PUT",
   headers:{
    "Accept":"Application/json",
    
        "Content-Type":"Application/json"
    },
    body:JSON.stringify(data)})
    .then((res)=>{
        res.json()
    }).then((resp)=>{
        console.log(resp)   
    })

}
    return(
        <React.Fragment>
       <div id="outer">
       <div id="box1">
      
      <h1 style={{textAlign:"center"}}>Update Products Here</h1>
      <form>
      Name:<br/><input type="text" placeholder="please enter Product name" class="a" value={prod_name} onChange={(e)=>setName(e.target.value)}/><br/>
      Price:<br/><input type="mobile"   placeholder="" class="a" value={price} onChange={(e)=>setPrice(e.target.value)}/><br/>
      Quantity:<br/><input type="text"  placeholder="" class="a" value={qty} onChange={(e)=>setQty(e.target.value)}/><br/>
      Image:<br/><input type="text" class="a" placeholder="" value={img} onChange={(e)=>setImg(e.target.value)}/><br/>
       <Link to="/showuser"> <input type="button" onClick={Update}  id="btn1" value="Update"/><br/></Link>
        
      </form>
      </div></div>
       </React.Fragment>
    )
}