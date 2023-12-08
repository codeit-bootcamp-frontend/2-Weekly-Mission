import "../styles/CardList.css";
import { useEffect, useState } from "react";
import { timeAgo } from "../utils/timeAgo";
import defaultImage from "../assets/default.png"
import kebab from '../assets/kebab.png'

//1. 서버에서 데이터 가져오기. 폴더를 가져옴


function formatDate(value) {

  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function  CardList({links}) {

  console.log('links',links)
  return(
        <div className="card-list">
                
                {links?.map((links, i) => {
                  return (
                    <div className ="card">
                      <div className= "card-image-box">
                        <img className="card-image" src={links.imageSource || defaultImage}
                          alt={links.title}/>
                      </div>
                      <div className="card-text" key={i}>
                      <div className="kebab-display">
                      
                        <p className="time-age">{timeAgo(links.createdAt)}</p>
                        <button className="kebab-icon"><img src={kebab} alt="kebab"/></button>
                        </div>
                        <h2 className="card-description">
                            {links.description}
                        </h2>
                        <p className="time-createdAt">{formatDate(links.createdAt)}</p>
                      </div>
                    </div>
                  );
                })}

            </div>

   
  )
}

export default CardList

