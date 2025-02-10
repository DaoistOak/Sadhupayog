"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Coldstoreinterface.css"

// Mock data for sellers and products
const sellers = [
  { id: 1, name: "Dalaram Thapa", location: "Bhaktapur" },
  { id: 2, name: "Hari Khadka", location: "Butwal" },
  { id: 3, name: "Krrish Nyoupane", location: "kathmandu" },
]

const products = {
  1: [
    { name: "Apples", price: 200, discountPrice: 40},
    { name: "Carrots", price: 60, discountPrice: 10 },
  ],
  2: [
    { name: "Bananas", price: 90, discountPrice: 10},
    { name: "Tomatoes", price: 120, discountPrice: 40},
  ],
  3: [
    { name: "Oranges", price: 85, discountPrice: 25},
    { name: "Potatoes", price: 150, discountPrice: 35},
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
                  <td>Rs{product.price.toFixed(2)}</td>
                  <td>Rs{product.discountPrice.toFixed(2)}</td>
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

