import { useEffect, useState } from "react";

const useToken = (email) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        fetch(` http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data?.token) {

                    localStorage.setItem('token', data?.token);
                    setToken(data?.token);
                }
            });
    }, [email]);
    return [token];
}

export default useToken;