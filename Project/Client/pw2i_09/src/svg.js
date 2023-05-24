import { useEffect } from "react";
import img from "./assets/map-tg.svg";
import "./svg.css";
import { ReactSVG } from 'react-svg';
import { useState } from "react";
import Popup1 from "./popup1";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';



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

  //lOT OF 
    
  }
  function onHover(targ){
    const obj = targ.currentTarget;
    console.log(obj.id + " <-Wurde gehovert!");
    //obj.classList.add("rainbow-kanton");
  }

  
 //
  


  return (
    <>
        <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Tooltip with HTML</Typography>
            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"}
          </React.Fragment>
        }
      >
        <Button>HTML</Button>
      </HtmlTooltip>
       <ReactSVG src={img} />
       
    </>
  );
}

export default SVG;
