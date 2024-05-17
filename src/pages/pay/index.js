import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { CartContext } from '@/utils/contextReducer';
import Link from 'next/link';

function Pay() {
    const router = useRouter();
    const { state, dispatch } = useContext(CartContext);
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [name, setName] = useState('');
    const [totalPrice, setTotalPrice] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [showCardDetails, setShowCardDetails] = useState(true);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (router.query.total) {
            setTotalPrice(parseFloat(router.query.total).toFixed(2));
        }
    }, [router.query.total]);

    // Calculate total price using context
    useEffect(() => {
        const totalPrice = state.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalPrice((totalPrice + 20).toFixed(2)); // Add tax and update
    }, [state]);

    const handleCardPayment = () => {
        // Implement card payment processing logic here
        console.log('Processing card payment...');
        // Assume payment is successful
        setShowAlert(true);
        dispatch({ type: 'RESET_CART' }); // Reset cart
        router.push('/'); // Redirect to home page
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    };

    const handleCashOnDelivery = () => {
        // Implement cash on delivery processing logic here
        console.log('Placing cash on delivery order...');
        alert('Your order is successfully placed!');
        dispatch({ type: 'RESET_CART' }); // Reset cart
        setTimeout(() => {
            router.push('/');
        }, 1000);
    };

    const handleToggleCardDetails = () => {
        setShowCardDetails(!showCardDetails);
    };

    return (
        <div className="relative min-h-screen py-8" style={{ backgroundImage: `url('https://transform.octanecdn.com/width/900/https://octanecdn.com/cmglocalsolutionsnew/cmglocalsolutionsnew_318398604.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-semibold mb-8">Payment Gateway</h1>
                <div className="max-w-md mx-auto rounded-lg shadow-md p-6" style={{ backdropFilter: 'blur(10px)', transition: 'all 0.3s ease', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                    {showCardDetails && (
                        <div>
                            <div className="mb-6">
                                <label className="block text-sm font-bold mb-2" htmlFor="cardNumber">
                                    Card Number
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-sm leading-tight focus:outline-none focus:shadow-outline neumorphism"
                                    id="cardNumber"
                                    type="text"
                                    placeholder="Enter card number"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                    style={{ transition: 'all 0.3s ease' }}
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-bold mb-2" htmlFor="expiry">
                                    Expiry Date
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-sm leading-tight focus:outline-none focus:shadow-outline neumorphism"
                                    id="expiry"
                                    type="text"
                                    placeholder="MM/YY"
                                    value={expiry}
                                    onChange={(e) => setExpiry(e.target.value)}
                                    style={{ transition: 'all 0.3s ease' }}
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-bold mb-2" htmlFor="cvv">
                                    CVV
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-sm leading-tight focus:outline-none focus:shadow-outline neumorphism"
                                    id="cvv"
                                    type="password"
                                    placeholder="CVV"
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                    style={{ transition: 'all 0.3s ease' }}
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-bold mb-2" htmlFor="name">
                                    Name on Card
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-sm leading-tight focus:outline-none focus:shadow-outline neumorphism"
                                    id="name"
                                    type="text"
                                    placeholder="Name on Card"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    style={{ transition: 'all 0.3s ease' }}
                                />
                            </div>
                        </div>
                    )}
                    {totalPrice && (
                        <div className="mt-8">
                            <p className="text-xl font-semibold">Amount to be paid: ₹{totalPrice}</p>
                        </div>
                    )}
                    <div className="mt-8">
                        <label className="block text-sm font-bold mb-2">Payment Method:</label>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="card"
                                name="paymentMethod"
                                value="card"
                                checked={paymentMethod === 'card'}
                                onChange={() => {
                                    setPaymentMethod('card');
                                    setShowCardDetails(true);
                                }}
                                className="mr-2"
                            />
                            <label htmlFor="card" className="mr-4 cursor-pointer">Card</label>
                            <input
                                type="radio"
                                id="cashOnDelivery"
                                name="paymentMethod"
                                value="cashOnDelivery"
                                checked={paymentMethod === 'cashOnDelivery'}
                                onChange={() => {
                                    setPaymentMethod('cashOnDelivery');
                                    setShowCardDetails(false);
                                }}
                                className="mr-2"
                            />
                            <label htmlFor="cashOnDelivery" className="cursor-pointer">Cash on Delivery</label>
                        </div>
                    </div>
                    <div className="mt-8">
                        <button
                            className="w-full py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
                            onClick={paymentMethod === 'card' ? handleCardPayment : handleCashOnDelivery}
                            style={{ transition: 'all 0.3s ease' }}
                        >
                            {paymentMethod === 'card' ? 'Pay Now' : 'Proceed Order'}
                        </button>
                    </div>
                </div>
            </div>
            {/* Alert */}
            {showAlert && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="bg-green-500 text-white px-6 py-4 rounded-md shadow-md">
                        Payment successful!
                    </div>
                </div>
            )}
            {/* Neumorphism style */}
            <style jsx>{`
                .neumorphism {
                    background: rgba(255, 255, 255, 0.2);
                    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1),
                        -5px -5px 15px rgba(255, 255, 255, 0.5);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
}

export default Pay;
