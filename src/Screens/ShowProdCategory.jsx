import React, { useState,useEffect } from 'react'
import { useParams } from "react-router-dom";
import ImageSlider from '../Components/ImageSlider';
import SPCcard from '../Components/SPCcard';

export default function ShowProdCategory() {
  const { id } = useParams();
  const [cat,setCat] = useState({title: "",designImgs: [""]});
  const [subCat,setSubCat] = useState([]);
  const fetchData = async function () {
    const response = await fetch(
      "https://ecommerce-8rsl.onrender.com/velvethomes/customer/showallcat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      }
    );
    const json = await response.json();
    if (json.success) {
      setCat({
        title: json.category.title,
        designImgs: json.category.designimgs
      })
      setSubCat(json.subcategory)
    }
};
useEffect(() => {
  fetchData();
}, []);
  return (
    <div style={{width: '100%'}}>
      {cat.designImgs.length>0 && <ImageSlider images={cat.designImgs} title={cat.title}/>}
      
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: '20px',
        marginBottom: '50px',
        flexWrap: 'wrap'
      }}>
        {subCat.map((e,ind)=>{
          return <SPCcard evt={e}/>
        })}
      </div>
    </div>
  )
}
