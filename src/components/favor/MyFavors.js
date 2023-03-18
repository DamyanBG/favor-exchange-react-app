import { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HOST_URL } from "../common/urls";
import { UserContext } from "../context/UserContext";
import FavorView from "../common/FavorView";

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
                <Col md={6} className="mt-4">
                    {myFavors.map((mf) => (
                        <FavorView favor={mf} key={mf.id} />
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

export default MyFavors