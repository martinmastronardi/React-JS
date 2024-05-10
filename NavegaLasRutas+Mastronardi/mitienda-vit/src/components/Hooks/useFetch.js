import { useEffect, useState } from "react"

export const useFetch = (url, method, body) => {
    const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);

    useEffect(() => {
        const getData = fetch(url, {
            method: method, 
            body: body,
            headers: {
                'Content-Type': 'application/json'
            },
        });

        getData
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((error) => {
            console.log(error)
            setError(error);
        })
        .finally(() =>{ 
            console.log("fetch finalizada");
        setLoading(false);
});
    },[]);

    return{data,loading,error}
}
