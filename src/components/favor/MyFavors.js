import { useContext, useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { HOST_URL } from "../common/urls";
import { UserContext } from "../context/UserContext";

const MyFavors = () => {
    const [myFavors, setMyFavors] = useState([])

    const { user } = useContext(UserContext)

    const getMyFavors = () => {
        if (!user.token) return
        fetch(`${HOST_URL}/user_favors`, {
            headers: {
                Authorization: `Bearer ${user.token}`,
            }
        })
            .then((resp) => resp.json())
            .then(setMyFavors)
    }

    useEffect(getMyFavors, [user.token])

    return (
        <Container className="mt-4 mb-4 pt-4 pb-4 bg-secondary">
            <Row className="justify-content-center text-center">
                <h2>My favors:</h2>
                {myFavors.map((mf) => (
                    <div>
                        <h4>{mf.title}</h4>
                        <p>{mf.text}</p>
                    </div>
                ))}
            </Row>
        </Container>
    )
}

export default MyFavors