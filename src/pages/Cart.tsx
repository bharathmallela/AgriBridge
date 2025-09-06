import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  CreditCard,
  Truck,
  ArrowLeft,
  Package
} from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { formatCurrency } from '@/lib/utils'

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalItems, getTotalPrice } = useCart()

  const handleQuantityChange = (id: number, newQuantity: number) => {
    updateQuantity(id, newQuantity)
  }

  const handleRemoveItem = (id: number) => {
    removeFromCart(id)
  }

  const handleCheckout = () => {
    // In a real app, this would redirect to checkout
    alert('Checkout functionality would be implemented here!')
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200 px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-6 w-6 text-primary-600" />
            </div>
          </div>
        </div>

        <div className="p-4">
          <Card className="text-center py-12">
            <CardContent>
              <div className="flex flex-col items-center space-y-4">
                <div className="h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center">
                  <ShoppingCart className="h-12 w-12 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
                  <p className="text-gray-600 mb-6">Add some products to get started!</p>
                  <Button className="btn-primary">
                    <Package className="h-4 w-4 mr-2" />
                    Browse Products
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
          <div className="flex items-center space-x-2">
            <Badge variant="default" className="bg-primary-600">
              {getTotalItems()} items
            </Badge>
            <ShoppingCart className="h-6 w-6 text-primary-600" />
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Cart Items */}
        <div className="space-y-4">
          {items.map((item) => (
            <Card key={item.id} className="product-card">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  {/* Product Image */}
                  <div className="h-20 w-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Package className="h-10 w-10 text-primary-600" />
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 truncate">{item.name}</h3>
                    <p className="text-sm text-gray-600">by {item.seller}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-lg font-bold text-gray-900">
                        {formatCurrency(item.price)}
                      </span>
                      {item.originalPrice && item.originalPrice > item.price && (
                        <span className="text-sm text-gray-500 line-through">
                          {formatCurrency(item.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="h-8 w-8 p-0"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="h-8 w-8 p-0"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Remove Button */}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <Card className="sticky bottom-20">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Items ({getTotalItems()})</span>
              <span className="font-medium">{formatCurrency(getTotalPrice())}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Delivery</span>
              <span className="font-medium text-green-600">Free</span>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-xl font-bold text-primary-600">
                  {formatCurrency(getTotalPrice())}
                </span>
              </div>
            </div>
            
            <div className="space-y-3 pt-4">
              <Button className="w-full btn-primary" onClick={handleCheckout}>
                <CreditCard className="h-4 w-4 mr-2" />
                Proceed to Checkout
              </Button>
              <Button variant="outline" className="w-full" onClick={clearCart}>
                Clear Cart
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Cart
