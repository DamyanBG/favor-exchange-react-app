import { Container, Card } from "react-bootstrap"

const HomePage = () => {
    return (
        <Container className="mt-4 mb-4 pt-4 pb-4 bg-secondary">
            <Card className="my-5 p-5">
                <Card.Title>Welcome to Favor Exchange Deployed CI/CD</Card.Title>
                <Card.Text>
                A platform where you can exchange favors with your friends and family!
                </Card.Text>
            </Card>
        </Container>
    )
}

export default  HomePage