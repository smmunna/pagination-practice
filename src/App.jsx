import { useEffect, useState } from 'react'
import './App.css'
import MyProducts from './MyProducts'
import { useLoaderData } from 'react-router-dom'

function App() {

  const [products, setProducts] = useState([])

  const [currentpage, setCurrentpage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10)

  const numofProducts = useLoaderData()
  const numberofProductinDb = numofProducts.totalProducts;

  const totalPages = Math.ceil(numberofProductinDb / itemsPerPage)

  const pageNumbers = [...Array(totalPages).keys()]

  // Dropdown options
  const options = [5, 10, 20]
  function handleSelectChange(event) {
    setItemsPerPage(parseInt(event.target.value))
    setCurrentpage(0)
  }


  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${currentpage}&limit=${itemsPerPage}`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [currentpage, itemsPerPage])

  return (
    <div>
      <h3 style={{ textAlign: 'center', fontSize: '28px' }}>My all Datas</h3>
      <hr />

      <div className='my-card'>
        {
          products.map(product => <MyProducts
            key={product._id}
            product={product}
          />)
        }
      </div>

      <div style={{ margin: '30px 0px', textAlign: 'center' }}>
        <p>Current Page:{currentpage}</p>
        {
          pageNumbers.map(number => <button
            style={{ marginRight: '12px' }}
            className={currentpage == number ? 'selected' : ''}
            key={number}
            onClick={() => setCurrentpage(number)}
          >{number}</button>)
        }

        {/* Options value */}
        <select value={itemsPerPage} onChange={handleSelectChange}>
          {
            options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))
          }
        </select>

      </div>
    </div>
  )
}

export default App
