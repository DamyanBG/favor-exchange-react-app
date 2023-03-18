import { Card } from "react-bootstrap";

const FavorView = ({ favor }) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title>{favor.title}</Card.Title>
            <Card.Text>{favor.text}</Card.Text>
        </Card.Body>
    </Card>
)

export default FavorView