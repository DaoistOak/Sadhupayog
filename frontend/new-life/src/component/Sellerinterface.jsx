"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Sellerinterface.css"

const SellerInterface = ({ username }) => {
  const navigate = useNavigate()
  const [productType, setProductType] = useState("")
  const [productName, setProductName] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState("")
  const [entries, setEntries] = useState([])
  const [showReport, setShowReport] = useState(false)

  const handleAddProduct = () => {
    if (productType && productName && price && quantity) {
      const newEntry = {
        type: productType,
        name: productName,
        price: Number.parseFloat(price),
        quantity: Number.parseInt(quantity),
      }
      setEntries([...entries, newEntry])
      setProductName("")
      setPrice("")
      setQuantity("")
    } else {
      alert("Please fill all fields")
    }
  }

  const handleCheckout = () => {
    setShowReport(true)
  }

  const totalValue = entries.reduce((sum, entry) => sum + entry.price * entry.quantity, 0)

  return (
    <div className="seller-container">
      <div className="seller-header">
        <h1>Welcome {username}!</h1>
        <button className="logout-button" onClick={() => navigate("/")}>
          Logout
        </button>
      </div>
      <div className="product-form">
        <select value={productType} onChange={(e) => setProductType(e.target.value)} className="select-input">
          <option value="">Select Product Type</option>
          <option value="vegetable">Vegetable</option>
          <option value="fruit">Fruit</option>
        </select>
        {productType && (
          <>
            <input
              type="text"
              placeholder={`Enter ${productType} name`}
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="text-input"
            />
            <input
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="text-input"
            />
            <input
              type="number"
              placeholder="Enter quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="text-input"
            />
            <button onClick={handleAddProduct} className="add-button">
              Add Product
            </button>
          </>
        )}
      </div>
      <div className="entries-list">
        <h2>Your Entries:</h2>
        <ul>
          {entries.map((entry, index) => (
            <li key={index}>
              {entry.name} - Price: Rs {entry.price.toFixed(2)}, Quantity: {entry.quantity}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleCheckout} className="checkout-button">
        Checkout
      </button>
      {showReport && (
        <div className="report">
          <h2>Seller Report</h2>
          <p>Total Entries: {entries.length}</p>
          <p>Total Value: Rs {totalValue.toFixed(2)}</p>
          <button onClick={() => setShowReport(false)} className="close-button">
            Submit Report
          </button>
        </div>
      )}
    </div>
  )
}

export default SellerInterface

