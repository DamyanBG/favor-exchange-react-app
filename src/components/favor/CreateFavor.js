import { useContext, useState } from "react";
import { HOST_URL } from "../common/urls";
import { UserContext } from "../context/UserContext";

const CreateFavor = () => {
    const [favorInfo, setFavorInfo] = useState({})

    const { user } = useContext(UserContext)

    const postFavor = () => {
        fetch(`${HOST_URL}/user_favors`, {
            method: "POST",
            body: JSON.stringify(favorInfo),
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${user.token}`
            }
        })
            .then(resp => {
                if (resp.status !== 201) {
                    console.log(resp)
                    alert("error!")
                    return resp.json()
                }
                setFavorInfo({})
            })
            .then(json => {
                if (json) console.log(json)
            })
    }

    const handleOnChange = (e) => {
        setFavorInfo({
            ...favorInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        postFavor()
    }

    return (
        <div className="text-center">
            <form onSubmit={handleOnSubmit}>
                <label>Title</label>
                <article>
                    <input
                        type="text"
                        name="title"
                        value={favorInfo.title || ""}
                        onChange={handleOnChange}
                    />
                </article>
                <label>Text</label>
                <article>
                    <input
                        type="text"
                        name="text"
                        value={favorInfo.text || ""}
                        onChange={handleOnChange}
                    />
                </article>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateFavor;