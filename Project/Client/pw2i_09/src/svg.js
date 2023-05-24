import React from "react";
import { useEffect } from "react";
import img from "./assets/map-tg.svg";
import "./svg.css";
import { ReactSVG } from 'react-svg';
import { useState } from "react";

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';


//
const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

function SVG(props) {
  
  const [showPopup, setShowPopup] = useState(false);
  //h

  let doc = document.querySelectorAll('#municipalities path'); //path
  for(let i = 0; i < doc.length; i++){
    doc[i].addEventListener('mouseover', onHover);
    doc[i].addEventListener('click', onClicking);
    console.log("EL added");
  }
  
 


  function onClicking(targ){
    const obj = targ.currentTarget;
    console.log(obj.id + "Wurde geClickt!");
    //setIsOpen(!isOpen);

 
   // Popup1.setBasicModal(!basicModal)
//
  //lOT OF
    
  }
  function onHover(targ){
    const obj = targ.currentTarget;
    console.log(obj.id + " <-Wurde gehovert!");
    //obj.classList.add("rainbow-kanton");
  }

  
 /*
 function renderTooltips(){

  const docPath = document.querySelectorAll('path');
  for(let i = 0; i < docPath.length; i++){
    const tt = document.createElement('HtmlTooltip')
    document.insertBefore(tt, docPath[i]);
  }

 }*/


  


  return (
    <>
      
        
       <ReactSVG src={img} />
       
       
    </>
  );
}

export default SVG;
