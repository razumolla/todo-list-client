import { useEffect, useState } from "react";

const useWorks = () => {
    const [works, setWorks] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-crag-10378.herokuapp.com/work')
            .then(res => res.json())
            .then(data => setWorks(data));
    }, [])
    return [works, setWorks]
}
export default useWorks;