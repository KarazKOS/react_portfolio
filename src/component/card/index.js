import React from "react";
import { Card, Button } from "react-bootstrap";

function BasicCard({Image, CardTitle, HREF, HREF2, buttonText2, buttonText1}) {
    return (
<div className="card-title-font">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image} />
  <Card.Body>
    <Card.Title>{CardTitle}</Card.Title>
    <Card.Text>
      
    </Card.Text>
    <div>
    <Button 
    className="btn btn-dark mt-3"
    variant="primary"
    href={HREF}>{buttonText1}</Button>
    <Button 
    className="btn btn-dark mt-3"
    variant="primary"
    href={HREF2}>{buttonText2}</Button>
    </div>
    
  </Card.Body>
</Card>
</div>
    )
}
export default BasicCard;