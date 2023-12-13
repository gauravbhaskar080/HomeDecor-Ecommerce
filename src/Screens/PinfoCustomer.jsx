import React, { useEffect, useState } from 'react'
import "../stylesheets/PinfoCustomer.css"

export default function PinfoCustomer() {
  const [cust,setCust] = useState({
    fullname: "",
    address: "",
    photo: "",
    phone: "",
    pincode: ""
  });
  const [bought,setBought] = useState([]);
  const [delivered,setDelivered] = useState([]);
  const [show,setShow] = useState();
  const [del,setDel] = useState({date: "",month: "",year: ""})
  const [returnDate,setReturnDate] = useState();
  const [currentDate,setCurrentDate] = useState();

  const fetchData = async () => {
    const response = await fetch(
      "https://ecommerce-8rsl.onrender.com/velvethomes/customer/pinfo",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: localStorage.getItem("customerUsername"),
        }),
      }
    );
    const json = await response.json();
    if (json.success) {
      setCust({
        fullname: json.customer.fullname,
        photo: json.customer.photo,
        phone: json.customer.phone,
        address: json.customer.address,
        pincode: json.customer.pincode
      })
      setBought(json.bought.filter((b)=>b.status==="Pending"))
      setDelivered(json.bought.filter((b)=>b.status==="Delivered"))
    }
  };
  useEffect(()=>{
    fetchData();
  },[])
  const showMoreDetails = (ind)=>{
    setShow(bought[ind])
    const d = new Date(bought[ind].deliveryDate)
      const day = d.getDate()
      const month = d.getMonth()+1
      const year = d.getFullYear()
      setDel({date: day,month: month,year: year})
      setReturnDate(d);
      setCurrentDate(new Date())
  }
  return (
    <div className='PinfoCust'>
      <div className="PinfoHead">My Details</div>
      <div className="PinfoCustInfo">
        <div className="PinfoCustInfoImgwrap">
          <img src={cust.photo} className='PinfoCustInfoImg' alt="" />
        </div>
        <div className="PinfoCustMain">
          <div className="PinfoCustDiv">
            <div className="PinfoCustTitle">Name :- </div>
            <div className="PinfoCustValue">{cust.fullname}</div>
          </div>
          <div className="PinfoCustDiv">
            <div className="PinfoCustTitle">Phone Number :- </div>
            <div className="PinfoCustValue">+91- {cust.phone}</div>
          </div>
          <div className="PinfoCustDiv">
            <div className="PinfoCustTitle">Address :- </div>
            <div className="PinfoCustValue">{cust.address}</div>
          </div>
          <div className="PinfoCustDiv">
            <div className="PinfoCustTitle">Pincode :- </div>
            <div className="PinfoCustValue">{cust.pincode}</div>
          </div>
        </div>
      </div>

      <div className="PinfoPastOrders">
        <div className="PinfoPHead">Pending Deliveries :- </div>
        <div className="PinfoPOrders">
          {bought.map((evt,ind)=>(
            <div className='PinfoCard' key={ind}>
              <img src={evt.product.images[0]} className='PinfoCardImg' alt="" />
              <div className="PinfoCardMain">
                <div className="PinfoMainTitle">{evt.product.title}</div>
                <div className="PinfoMainTitleItem">Delivery Status :- <span>{evt.status}</span></div>
                <div className="PinfoMainBtnWrap">
                  <div className="PinfoMainBtn" onClick={()=>showMoreDetails(ind)}>More Details..</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="PinfoPastOrders">
        <div className="PinfoPHead">My Orders :- </div>
        <div className="PinfoPOrders">
          {delivered.map((evt,ind)=>(
            <div className='PinfoCard' key={ind}>
              <img src={evt.product.images[0]} className='PinfoCardImg' alt="" />
              <div className="PinfoCardMain">
                <div className="PinfoMainTitle">{evt.product.title}</div>
                <div className="PinfoMainTitleItem">Delivery Status :- <span>{evt.status}</span></div>
                <div className="PinfoMainBtnWrap">
                  <div className="PinfoMainBtn" onClick={()=>showMoreDetails(ind)}>More Details..</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {show && <div className="PinfoOverlay" style={show ? {display: 'flex'} : {display: 'none'}}>
        <div className="PinfoOverlayCloseBtn">
          <div className="PinfoOverlayCrossBtn" onClick={()=>{
                    setShow()}}>&times;</div>
        </div>
        <div className="PinfoOverlayMain">
          <div className="PinfoOverlayImgWrapper">
            <img src={show.product.images[0]} className='PinfoOverlayImg' alt="" />
          </div>
          <div className="PinfoOverlayMainContent">
            <div className="PinfoOverlayMainContentTitle">{show.product.title}</div>
            <div className="PinfoOverlayMainDes">
              <div className="PinfoOverlayMainDesTitle">Order Id :- </div>
              <div className="PinfoOverlayMainDesValue">{show._id}</div>
            </div>
            <div className="PinfoOverlayMainDes">
              <div className="PinfoOverlayMainDesTitle">Price :- </div>
              <div className="PinfoOverlayMainDesValue">Rs. {show.product.price} /unit</div>
            </div>
            <div className="PinfoOverlayMainDes">
              <div className="PinfoOverlayMainDesTitle">Quantity :- </div>
              <div className="PinfoOverlayMainDesValue">{show.quantity}</div>
            </div>
            <div className="PinfoOverlayMainDes">
              <div className="PinfoOverlayMainDesTitle">Code Used :- </div>
              <div className="PinfoOverlayMainDesValue">{show.couponcode}</div>
            </div>
            <div className="PinfoOverlayMainDes">
              <div className="PinfoOverlayMainDesTitle">Discount :- </div>
              <div className="PinfoOverlayMainDesValue">{show.discount}%</div>
            </div>
            <div className="PinfoOverlayMainDes">
              <div className="PinfoOverlayMainDesTitle">{show.status==="Pending" ? "Amount To Be Paid" : "Amount Paid"} :- </div>
              <div className="PinfoOverlayMainDesValue">Rs. {Math.floor(show.quantity*show.product.price*(100-show.discount)/100)} /-</div>
            </div>
            <div className="PinfoOverlayMainDes">
              <div className="PinfoOverlayMainDesTitle">Delivery Status :- </div>
              <div className="PinfoOverlayMainDesValue">{show.status}</div>
            </div>
            {show.status==="Pending" && <div className="PinfoOverlayMainDes">
              <div className="PinfoOverlayMainDesTitle">Expected Delivery Date :- </div>
              <div className="PinfoOverlayMainDesValue">{del.date}/{del.month}/{del.year}</div>
            </div>}
            {show.status==="Delivered" && <div className="PinfoOverlayMainDes">
              <div className="PinfoOverlayMainDesTitle">Delivery Date :- </div>
              <div className="PinfoOverlayMainDesValue">{del.date}/{del.month}/{del.year}</div>
            </div>}
          </div>
        </div>
      </div>}

    </div>
  )
}
