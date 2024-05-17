import React, { useContext, useState } from 'react';
import { CartContext } from '@/utils/contextReducer';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const Cart = () => {
    const { state, dispatch } = useContext(CartContext);
    const { theme, setTheme } = useTheme();
    const [darkMode, setDarkMode] = useState(theme === "dark");

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        setTheme(darkMode ? "light" : "dark");
    };

    const decreaseQuantity = (index) => {
        const updatedCart = [...state];
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity--;
        }
        dispatch({ type: 'UPDATE_CART', payload: updatedCart });
    };

    const increaseQuantity = (index) => {
        const updatedCart = [...state];
        updatedCart[index].quantity++;
        dispatch({ type: 'UPDATE_CART', payload: updatedCart });
    };

    const removeItem = (itemId) => {
        dispatch({ type: 'REMOVE', itemId });
    };

    // Calculate total price
    const totalPrice = state.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className={`relative min-h-screen py-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://th.bing.com/th/id/OIP.h32UzS4n4vsbuO4Bk7aXWQHaE9?w=296&h=198&c=7&r=0&o=5&dpr=1.5&pid=1.7')` }}></div>
            <div className="container mx-auto px-4">
                <h1 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Cart</h1>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-3/4">
                        <div className={` backdrop-filter backdrop-blur-md bg-white bg-opacity-20 rounded-lg shadow-md p-6 mb-4 ${darkMode ? 'glass-dark' : 'glass-light'}`}>
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className={`text-left font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Product</th>
                                        {state.some(item => item.size) && <th className={`text-left font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Size</th>}
                                        <th className={`text-left font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Price</th>
                                        <th className={`text-left font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Quantity</th>
                                        <th className={`text-left font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Total</th>
                                        <th></th> {/* Placeholder for the remove icon */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {state.map((item, index) => (
                                        <tr key={index}>
                                            <td className={`py-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                                <div className="flex items-center">
                                                    <img className="h-16 w-16 mr-4" src={item.image} alt="Product image" />
                                                    <span className="font-semibold">{item.name}</span>
                                                </div>
                                            </td>
                                            {item.size && <td className={`py-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.size}</td>}
                                            <td className={`py-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>₹{item.price.toFixed(2)}</td>
                                            <td className="py-4">
                                                <div className="flex items-center">
                                                    <button className={`border rounded-md py-2 px-4 mr-2 ${darkMode ? 'text-white bg-gray-700 shadow-lg' : 'text-gray-900 bg-white shadow-md'}`} onClick={() => decreaseQuantity(index)}>-</button>
                                                    <span className={`text-center w-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.quantity}</span>
                                                    <button className={`border rounded-md py-2 px-4 ml-2 ${darkMode ? 'text-white bg-gray-700 shadow-lg' : 'text-gray-900 bg-white shadow-md'}`} onClick={() => increaseQuantity(index)}>+</button>
                                                </div>
                                            </td>
                                            <td className={`py-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>₹{(item.price * item.quantity).toFixed(2)}</td>
                                            <td>
                                                <button onClick={() => removeItem(item.id)} className="text-red-600 hover:text-red-700 focus:outline-none">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="md:w-1/4">
                        <div className={`bg-opacity-20 backdrop-filter backdrop-blur-md bg-white  rounded-lg shadow-md p-6 ${darkMode ? 'glass-dark' : 'glass-light'}`}>
                            <h2 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Summary</h2>
                            <div className="flex justify-between mb-2">
                                <span className={darkMode ? 'text-white' : 'text-gray-900'}>Subtotal</span>
                                <span className={`text-${darkMode ? 'white' : 'gray-900'}`}>₹{totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span className={darkMode ? 'text-white' : 'text-gray-900'}>Taxes</span>
                                <span className={`text-${darkMode ? 'white' : 'gray-900'}`}>₹20.00</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span className={darkMode ? 'text-white' : 'text-gray-900'}>Delivery</span>
                                <span className={`text-${darkMode ? 'white' : 'gray-900'}`}>Free</span>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-between mb-2">
                                <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Total</span>
                                <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>₹{(totalPrice + 20.00).toFixed(2)}</span>
                            </div>
                            <Link href={"/pay"}>
                            <button className={`w-full py-2 mt-4 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 active:bg-green-800 transition duration-300 ${darkMode ? 'hover:text-white' : ''}`}>
                                Checkout
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
