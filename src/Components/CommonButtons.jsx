import React from 'react'
import Button from 'react-bootstrap/Button';
 const CommonButtons = (props) => {
  return (<>
    <Button variant="outline-success">{props.title}</Button>
    </>
  )

}
export default CommonButtons;