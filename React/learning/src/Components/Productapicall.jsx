import { useState, useEffect } from 'react'

const Productapicall = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch('http://localhost:5000/api/products')

        if (!response.ok) {
          throw new Error('Error while fetching API')
        }

        const data = await response.json()
        console.log('Products:', data)
        setProducts(data)
      } catch (error) {
        console.log(error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <h1>{product.price}</h1>
        </div>
      ))}
    </div>
  )
}

export default Productapicall
