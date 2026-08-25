import React from 'react'
import { useState, useEffect } from 'react'

const Productapicall = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // useEffect(()=>{
    //     fetch("")
    //     .then(res=> res.json())
    //     .then(data => setProducts(data))
    //     .catch(error =>
    //         console.log(error.message)
    //     )
    // })

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                setError(null)

                const response = await fetch("/api/products");

                if (!response.ok) {
                    throw new Error("Error while fetching API")
                }

                const data = await response.json();
                setProducts(data)

            }
            catch (error) {
                console.log(error)
            }
            finally{
                setLoading(false)
            }
        }
        fetchData();
    }, [])

    if(loading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>{error}</p>
    }

    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <p>{product.name}</p>
                    <h1>{product.price}</h1>
                </div>
            ))}

        </div>
    )
}

export default Productapicall
