import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle } from 'lucide-react';

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderData, total, orderId } = location.state || {};

  if (!orderData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-orange-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Order not found</h2>
          <Button 
            onClick={() => navigate('/')}
            className="bg-green-600 hover:bg-green-700"
          >
            Go Home
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-orange-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-600">Order Placed Successfully!</CardTitle>
              <p className="text-gray-600">Thank you for choosing Esha Pickles</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Order Details</h3>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Order ID:</span> {orderId}</p>
                  <p><span className="font-medium">Total Amount:</span> ₹{total}</p>
                  <p><span className="font-medium">Payment Method:</span> {orderData.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Razorpay'}</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Shipping Information</h3>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Name:</span> {orderData.fullName}</p>
                  <p><span className="font-medium">Email:</span> {orderData.email}</p>
                  <p><span className="font-medium">Phone:</span> {orderData.phone}</p>
                  <p><span className="font-medium">Address:</span> {orderData.address}</p>
                  <p><span className="font-medium">City:</span> {orderData.city}, {orderData.state} - {orderData.pincode}</p>
                </div>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h3 className="font-semibold text-orange-800 mb-2">What's Next?</h3>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• We'll send you an order confirmation email shortly</li>
                  <li>• Your order will be processed within 1-2 business days</li>
                  <li>• You'll receive tracking information once shipped</li>
                  <li>• Expected delivery: 3-5 business days</li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => navigate('/')}
                  className="bg-green-600 hover:bg-green-700 flex-1"
                >
                  Continue Shopping
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/contact')}
                  className="flex-1"
                >
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
