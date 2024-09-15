import React, { useState, useContext } from 'react';
import './AddProduct.css';
import { ProductContext } from '../../Components/Product/ProductContext';

function AddProduct() {
  const { addProduct } = useContext(ProductContext);
  const [newShoe, setNewShoe] = useState({
    name: '',
    price: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewShoe({ ...newShoe, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setNewShoe({ ...newShoe, image: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(newShoe);
    alert('Product added successfully!');
  };

  return (
    <div className="add-product-container">
      <h1>Add New Product</h1>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={newShoe.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="text" id="price" name="price" value={newShoe.price} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" value={newShoe.description} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input type="file" id="image" name="image" accept="image/*" onChange={handleImageUpload} />
        </div>
        {newShoe.image && (
          <div className="image-preview">
            <img src={newShoe.image} alt="Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />
          </div>
        )}
        <button type="submit" className="submit-btn">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;