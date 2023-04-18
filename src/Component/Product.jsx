import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Product(){
    const [prod_name,setName]=useState("")
    const [price,setPrice]=useState("")
    const [qty,setQty]=useState("")
    const [img,setImg]=useState("")
    
    return(
       <React.Fragment>
       <div id="outer">
       <div id="box1">
      
      <h1 style={{textAlign:"center"}}>Buy Products Here</h1>
      <form>
      Name:<br/><input type="text" placeholder="" class="a" value={prod_name} onChange={(e)=>setName(e.target.value)}/><br/>
      Price:<br/><input type="mobile"   placeholder="" class="a" value={price} onChange={(e)=>setPrice(e.target.value)}/><br/>
     Quantity:<br/><input type="text"  placeholder="" class="a" value={qty} onChange={(e)=>setQty(e.target.value)}/><br/>
     Image:<br/><input type="text" class="a" placeholder="" value={img} onChange={(e)=>setImg(e.target.value)}/><br/>
      <Link to="/showuser"> <input type="button"  id="btn1" onClick={saveProd} value="Save"/><br/></Link>      
      </form>
      </div></div>
      
         </React.Fragment>
    )


    function saveProd(){
        let data={prod_name,price,qty,img,}
        // console.log(data)
        fetch(" http://localhost:3000/products",{
            method:"POST",
           headers:{
            "Accept":"Application/json",
            
                "Content-Type":"Application/json"
            },
            body:JSON.stringify(data)})
            .then((res)=>{
                res.json()
            }).then((data)=>{
                console.log(data)
            })
        }
    }
