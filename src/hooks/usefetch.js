import { useEffect, useState } from "react"

const usefetch = (url) => {
const [data , setdata] = useState([])

useEffect(() => {
    const fethdata = async () =>  {
        const res = await fetch(url)
        const result = await res.json()

        setdata(result)
    }

    fethdata()
}, [url])

return {data}
}

export default usefetch