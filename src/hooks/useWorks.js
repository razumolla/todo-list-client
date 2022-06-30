import { useEffect, useState } from "react";

const useWorks = () => {
    const [works, setWorks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/work')
            .then(res => res.json())
            .then(data => setWorks(data));
    }, [])
    return [works, setWorks]
}
export default useWorks;