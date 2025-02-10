"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Coldstoreinterface.css"

// Mock data for sellers and products
const sellers = [
  { id: 1, name: "John Doe", location: "New York" },
  { id: 2, name: "Jane Smith", location: "Los Angeles" },
  { id: 3, name: "Bob Johnson", location: "Chicago" },
]

const products = {
  1: [
    { name: "Apples", price: 2.5, discountPrice: 2.0 },
    { name: "Carrots", price: 1.5, discountPrice: 1.2 },
  ],
  2: [
    { name: "Bananas", price: 1.8, discountPrice: 1.5 },
    { name: "Tomatoes", price: 2.2, discountPrice: 1.9 },
  ],
  3: [
    { name: "Oranges", price: 3.0, discountPrice: 2.7 },
    { name: "Potatoes", price: 1.0, discountPrice: 0.8 },
  ],
}

const ColdStoreInterface = () => {
  const navigate = useNavigate()
  const [selectedSeller, setSelectedSeller] = useState(null)

  const handleSellerClick = (sellerId) => {
    setSelectedSeller(sellerId)
  }

  return (
    <div className="cold-store-container">
      <div className="cold-store-header">
        <h1>Cold Store Organization Dashboard</h1>
        <button className="logout-button" onClick={() => navigate("/")}>
          Logout
        </button>
      </div>
      <div className="sellers-list">
        <h2>Sellers</h2>
        {sellers.map((seller) => (
          <div key={seller.id} className="seller-item" onClick={() => handleSellerClick(seller.id)}>
            <h3>{seller.name}</h3>
            <p>Location: {seller.location}</p>
            <button className="view-products-button">View Products</button>
          </div>
        ))}
      </div>
      {selectedSeller && (
        <div className="product-comparison">
          <h2>{sellers.find((s) => s.id === selectedSeller).name}'s Products</h2>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Seller Price</th>
                <th>Our Discount Price</th>
              </tr>
            </thead>
            <tbody>
              {products[selectedSeller].map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>${product.discountPrice.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default ColdStoreInterface;

