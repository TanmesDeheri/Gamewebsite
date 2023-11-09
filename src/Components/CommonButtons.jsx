import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
 const CommonButtons = (props) => {
  return (<>
  <Link to={props.navigateTo}>
  <Button variant="outline-success" style={{marginTop:'1em'}}>{props.title}</Button>
  </Link>
    </>
  )

}
export default CommonButtons;