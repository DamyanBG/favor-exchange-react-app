import { useContext, useState } from "react";
import { HOST_URL } from "../common/urls";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [userInfo, setUserInfo] = useState({})

    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const postUser = () => {
        fetch(`${HOST_URL}/users/`, {
            method: "POST",
            body: JSON.stringify(userInfo),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(resp => {
                if (resp.status !== 201) {
                    alert("error!")
                }
                return resp.json()
            })
            .then(json => {
                console.log(json)
                if (json.token) {
                    localStorage.setItem('user', JSON.stringify(json));
                    setUser(json);
                    navigate('/');
                }
            })
    }

    const handleOnChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        postUser()
    }

    return (
        <div className="text-center">
            <form onSubmit={handleOnSubmit}>
                <label>First name</label>
                <article>
                    <input
                        type="text"
                        name="first_name"
                        value={userInfo.first_name || ""}
                        onChange={handleOnChange}
                    />
                </article>
                <label>Last name</label>
                <article>
                    <input
                        type="text"
                        name="last_name"
                        value={userInfo.last_name || ""}
                        onChange={handleOnChange}
                    />
                </article>
                <label>Email</label>
                <article>
                    <input
                        type="email"
                        name="email"
                        value={userInfo.email || ""}
                        onChange={handleOnChange}
                    />
                </article>
                <label>Password</label>
                <article>
                    <input
                        type="password"
                        name="password"
                        value={userInfo.password || ""}
                        onChange={handleOnChange}
                    />
                </article>
                <label>Phone number</label>
                <article>
                    <input
                        type="text"
                        name="phone"
                        value={userInfo.phone || ""}
                        onChange={handleOnChange}
                    />
                </article>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Register