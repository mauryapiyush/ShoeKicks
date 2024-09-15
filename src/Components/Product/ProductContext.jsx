import React, { createContext, useState } from 'react';
import shoeImage1 from '../../assets/Shoe1.png'; 
import shoeImage2 from '../../assets/Shoe2.png'; 
import shoeImage3 from '../../assets/Shoe3.png'; 
import shoeImage4 from '../../assets/Shoe4.png';
import shoeImage5 from '../../assets/Shoe5.png';
import shoeImage6 from '../../assets/Shoe6.png';
import shoeImage7 from '../../assets/Shoe7.png';
import shoeImage8 from '../../assets/Shoe8.png';
import shoeImage9 from '../../assets/Shoe9.png';
import shoeImage10 from '../../assets/Shoe10.png';
import shoeImage11 from '../../assets/Shoe11.png';
import shoeImage12 from '../../assets/Shoe12.png';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [shoes, setShoes] = useState([
    {
      name: 'Adidas',
      price: '$5000',
      description: 'A timeless pair of Adidas sneakers, perfect for everyday wear.',
      image: shoeImage1,
    },
    {
      name: 'Nike Blazer Low',
      price: '$4000',
      description: 'Sleek and stylish Nike Blazers, offering a modern twist on a classic design.',
      image: shoeImage2,
    },
    {
      name: 'Casual',
      price: '$3500',
      description: 'Comfortable and versatile casual sneakers, ideal for a relaxed look.',
      image: shoeImage3,
    },
    {
      name: 'New Balance',
      price: '$3500',
      description: 'High-performance New Balance running shoes, designed for comfort and speed.',
      image: shoeImage4,
    },
    {
      name: 'Sneaker',
      price: '$3500',
      description: 'A versatile pair of sneakers, perfect for any occasion.',
      image: shoeImage5,
    },
    {
      name: 'Converse',
      price: '$3500',
      description: 'Iconic Converse high-tops, a must-have for any sneaker collection.',
      image: shoeImage6,
    },
    {
      name: 'Jordan Retro',
      price: '$3500',
      description: 'Jordan Retro sneakers, offering a nostalgic and stylish look.',
      image: shoeImage7,
    },
    {
      name: 'Nike Running Shoe',
      price: '$3500',
      description: 'High-performance Nike running shoes, designed for maximum comfort and support.',
      image: shoeImage8,
    },
    {
      name: 'Jordan High Top',
      price: '$3500',
      description: 'Classic Jordan high-tops, offering a timeless and stylish look.',
      image: shoeImage9,
    },
    {
      name: 'Jordan Low',
      price: '$3500',
      description: 'Sleek and stylish Jordan lows, perfect for both on and off-court wear.',
      image: shoeImage10,
    },
    {
      name: 'Jordan Panda Low',
      price: '$3500',
      description: 'Eye-catching Jordan Panda lows, featuring a black and white colorway.',
      image: shoeImage11,
    },
    {
      name: 'Retro Basketball Sneakers',
      price: '$3500',
      description: 'Iconic Jordan Retro 4 sneakers, a must-have for any sneaker enthusiast.',
      image: shoeImage12,
    },
  ]);

  const addProduct = (newProduct) => {
    setShoes((prevShoes) => [...prevShoes, newProduct]);
  };

  return (
    <ProductContext.Provider value={{ shoes, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
