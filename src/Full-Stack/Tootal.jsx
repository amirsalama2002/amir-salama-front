import React from 'react';
import "./Tootal.css";
import { Link } from 'react-router-dom';
const Tootal = () => {
    const users = [
        {
          id: 1,
          imgs: "/imgs/Tootal(1).png",
          title: "Joe",
          name: "Html, Css, Javascript, Rectjs",
          free: "180$",
          slide:"1",
          preview:"https://harshk8853.github.io/rtportfolio/",
        },
        {
          id: 2,
          imgs: "/imgs/Tootal(2).jpg",
          title: "Alex Smith",
          name: "Html, Css, Javascript, Rectjs",
          free: "120$",
          slide:"2",
          preview:"https://harshk8853.github.io/alex-smith/",
        },
        {
          id: 3,
          imgs: "/imgs/Tootal(3).jpg",
          title: "YouTube Clone",
          name: "Html, Css, Javascript, Rectjs",
          free: "70$",
          slide:"3",
          preview:"https://harshk8853.github.io/youtubeclone/"
        },
        {
          id: 4,
          imgs: "/imgs/Tootal(4).png",
          title: "Neon Personal Portfolio",
          name: "Html, Css, Javascript, Rectjs",
          free: "30$",
          slide:"4",
          preview:"https://raw.githubusercontent.com/Harshk8853/portfolio-coding/refs/heads/main/image.png"
        },
        {
          id: 5,
          imgs: "/imgs/Tootal(5).jpg",
          title: "Responsive Website - Free",
          name: "Html, Css, Javascript, Rectjs",
          free: "150$",
          slide:"5",
          preview:"https://themewagon.github.io/aznews/"
        },
        {
          id: 6,
          imgs: "/imgs/Tootal(6).png",
          title: "News Website Template",
          name: "Html, Css, Javascript, Rectjs",
          free: "199$",
          slide:"6",
          preview:"https://themewagon.github.io/builerz/"
        },
        {
            id: 7,
            imgs: "/imgs/Tootal(7).jpg",
            title: "Professional Builder ",
            name: "Html, Css, Javascript, Rectjs",
            free: "120$",
            slide:"7",
            preview:"https://themewagon.github.io/cozastore/"
          },
          {
            id: 8,
            imgs: "/imgs/Tootal(8).jpg",
            title: "Cozastore – eCommerce  ",
            name: "Html, Css, Javascript, Rectjs",
            free: "199$",
            slide:"8",
            preview:"https://themewagon.github.io/personalportfolio/"
          },
      ];
    return (
        <div className='tootal'>
            <h2>All Templetes</h2>
    <div className="hoop">
    {users.map(user => (
      <div key={user.id} className="card">
      <img src={user.imgs} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5>{user.title}</h5>
        <p>{user.name}</p>
        <h4> ₹ {user.free}</h4>
      <div className="butt">
       <a className='hoog' href={user.preview} target='__blank'>Preview</a>
       <Link className='button32' to="/contact" target='__blank'>Downlod ({user.slide})</Link>
      </div>
      </div>
    </div>
    ))}
  </div>
        </div>
    );
}

export default Tootal;
