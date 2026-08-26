import { useParams, Link } from "react-router-dom"

const Routing = () => {
 


  const products = [
    { id: 1, name: "Shoes" },
    { id: 2, name: "Laptop" }
  ];

 const { id } = useParams();

  return (
  <div>
    <Link to={`/products/${products.id}`}></Link>
  </div >
  )
}

export default Routing
