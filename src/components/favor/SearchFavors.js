import { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { HOST_URL } from "../common/urls";
import FavorView from "../common/FavorView";

const SearchFavors = () => {
    const [favors, setFavors] = useState([{}])
    const [filteredFavors, setFilteredFavors] = useState([{}])
    const [searchTerm, setSearchTerm] = useState("")

    const getAllFavors = () => {
        fetch(`${HOST_URL}/all_favors/`)
            .then((resp) => resp.json())
            .then(json => {
                setFavors(json)
                setFilteredFavors(json)
            })
    }

    useEffect(getAllFavors, [])

    const handleOnSearchChange = (e) => {
        const newSearchTerm = e.target.value
        setSearchTerm(newSearchTerm)
        const filteredFavors = favors.filter((favor) => (
            favor.title.includes(newSearchTerm) || favor.text.includes(newSearchTerm)
        ))
        setFilteredFavors(filteredFavors)
    }

    return (
        <Container className="mt-4 mb-4 pt-4 pb-4 bg-secondary">
            <Row className="justify-content-center text-center">
                <h2>Favors:</h2>
                <Col md={6}>
                    <Form.Group className="mb-4">
                        <Form.Control
                            type="text"
                            placeholder="Search favors"
                            value={searchTerm}
                            onChange={handleOnSearchChange}
                        />
                    </Form.Group>
                    {filteredFavors.map((f) => (
                        <FavorView favor={f} key={`key-${f.id}`} />
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

export  default SearchFavors;