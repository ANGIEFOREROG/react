import Button  from "react-bootstrap/Button";
import Card  from "react-bootstrap/Card";
import { Link } from "react-router-dom";



const ItemListContainer = ({ productData}) => {
    return (
        <div style={{display:'flex',justifyContent:'space-around',width:'100w', flexWrap:'wrap'}}>
            {productsData.map((products) => {
                return(
                    <Card key={products.id} style={{width: "18rem", }} >
                    <link to={'/item/${products.id}'}></link>
                        <Card.Img variant="top" src={products.thumbnail} />
                        <Card.Body>
                            <Card.Title>{products.title}</Card.Title>
                            <card.Text>
                            {products.description}
                            </card.Text>
                            <div>{products.price}</div>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
        
    );
};

export default ItemListContainer;