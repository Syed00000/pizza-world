import React, { useState, useContext } from 'react';
import { useTheme } from 'next-themes';
import { CartContext } from '@/utils/contextReducer';

const Card = ({ foodData }) => {
  const { state, dispatch } = useContext(CartContext);
  const { id, name, description, image, sizes, category } = foodData;
  const { theme } = useTheme();
  const [selectedSize, setSelectedSize] = useState(Object.keys(sizes)[0]);
  const [itemNumber, setItemNumber] = useState(1);

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleItemNumberChange = (e) => {
    setItemNumber(parseInt(e.target.value));
  };

  const handleAddtoCart = () => {
    const selectedPrice = sizes[selectedSize].price * itemNumber;
    const selectedItem = {
      id: id,
      name: name,
      size: selectedSize,
      quantity: itemNumber,
      price: selectedPrice,
      image: image
    };

    // Check if item with same id and size already exists in cart
    const existingItemIndex = state.findIndex(
      item => item.id === selectedItem.id && item.size === selectedItem.size
    );

    if (existingItemIndex !== -1) {
      // If item exists, update its quantity
      dispatch({
        type: "UPDATE_QUANTITY",
        index: existingItemIndex,
        quantity: itemNumber
      });
    } else {
      // If item doesn't exist, add it to cart
      dispatch({
        type: "ADD",
        item: selectedItem
      });
    }
  };

  return (
    <div className={`max-w-xs sm:w-50 md:w-50 lg:w-50 xl:w-50 rounded-lg overflow-hidden m-4 relative transition duration-300 ease-in-out transform hover:border-2 border-red-700 hover:scale-105 ${theme === 'dark' ? 'bg-white' : 'bg-black'}`} style={{ border: `2px solid ${theme === 'dark' ? 'black' : 'white'}` }}>
      <div className="rounded overflow-hidden">
        <div className="flex justify-center items-center" style={{ height: '200px' }}>
          <img className='rounded-full' src={image} alt={name} style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
        <div className="px-6 py-4">
          <hr className={`${theme === 'dark' ? 'border-black' : 'border-white'}`} />
          <div className={`font-bold text-xl mb-2 ${theme === 'dark' ? 'text-black' : 'text-white'}`}>{name}</div>
          <div className={`text-sm overflow-hidden ${theme === 'dark' ? 'text-black' : 'text-white'}`} style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
            {description}
          </div>
        </div>
        {category === 'Pizza' && (
          <div className="px-6 py-2 flex justify-between items-center">
            <div className="flex items-center">
              <select className={`p-1 rounded-lg text-black hover:font-bold font-semibold cursor-pointer dark:text-gray-300 border-black dark:border-gray-400 ${theme === 'dark' ? 'bg-black' : 'bg-gray-200'} mr-2`} onChange={handleSizeChange} value={selectedSize}>
                {Object.keys(sizes).map((size, index) => (
                  <option key={index} value={size}>{size}</option>
                ))}
              </select>
              <p className={`text-lg font-bold ${theme === 'dark' ? 'text-black' : 'text-white'}`}>{String.fromCharCode(8377)} {sizes[selectedSize].price * itemNumber}/-</p>
            </div>
            <select className={`p-1 rounded-lg text-black hover:font-bold font-semibold cursor-pointer dark:text-gray-300 border-black dark:border-gray-400`} onChange={handleItemNumberChange} style={{ width: '50px' }}>
              {Array.from({ length: 6 }, (_, i) => (
                <option key={i} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>
        )}
        {category === 'Sides & Beverages' && (
          <div className="px-6 py-2 flex justify-between items-center">
            <select className={`p-1 rounded-lg text-black hover:font-bold font-semibold cursor-pointer dark:text-gray-300 border-black dark:border-gray-400`} onChange={handleItemNumberChange}>
              {Array.from({ length: 6 }, (_, i) => (
                <option key={i} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <p className={`text-lg font-bold ${theme === 'dark' ? 'text-black' : 'text-white'}`}>{String.fromCharCode(8377)} {sizes[selectedSize].price * itemNumber}/-</p>
          </div>
        )}
        <div className="px-6 py-2">
          <button onClick={handleAddtoCart} className={`w-full py-2 bg-red-600 text-white rounded-md hover:bg-red-700 active:bg-red-800 transition duration-300 ${theme === 'dark' ? 'hover:text-white' : ''}`}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
