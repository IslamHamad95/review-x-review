import React, { useRef, useEffect,useState } from "react";
import PropTypes from "prop-types";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideClick(ref) {
    
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        ref.current=! ref.current
        console.log(ref.current)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      ref.current=! ref.current
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
const  OutsideClick=(props) =>{
  const wrapperRef = useRef(true);
  useOutsideClick(wrapperRef);
  console.log(wrapperRef)
  return wrapperRef.current?<div ref={wrapperRef}>{props.children}</div>:null;
}

OutsideClick.propTypes = {
  children: PropTypes.element.isRequired
};

export default OutsideClick;
