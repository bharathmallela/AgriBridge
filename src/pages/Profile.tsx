import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  User, 
  MapPin, 
  Wallet, 
  CreditCard, 
  Package, 
  Heart, 
  Settings,
  Bell,
  Shield,
  TrendingUp,
  Calendar,
  Star,
  Edit,
  Download,
  Upload,
  ShoppingCart,
  Wheat
} from 'lucide-react'
import { formatCurrency, formatDate } from '@/lib/utils'
import { useUser } from '@/contexts/UserContext'

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const { userType, setUserType, isFarmer, isConsumer } = useUser()

  // Mock user data
  const user = {
    name: isFarmer ? 'Rajesh Kumar' : 'Sarah Johnson',
    role: isFarmer ? 'Farmer' : 'Consumer',
    location: 'Punjab, India',
    joinDate: '2023-06-15',
    avatar: '/api/placeholder/100/100',
    walletBalance: isFarmer ? 12500 : 2500,
    totalEarnings: isFarmer ? 125000 : 0,
    totalSpent: isConsumer ? 12500 : 0,
    totalOrders: isFarmer ? 45 : 23,
    rating: 4.8
  }

  const subscriptions = [
    {
      id: 1,
      name: 'Household Plan',
      price: 299,
      period: 'month',
      features: ['Unlimited orders', 'Free delivery', 'Priority support'],
      status: 'active',
      nextBilling: '2024-02-15'
    },
    {
      id: 2,
      name: 'Institution Plan',
      price: 999,
      period: 'month',
      features: ['Bulk orders', 'Analytics dashboard', 'Dedicated manager'],
      status: 'inactive',
      nextBilling: null
    }
  ]

  const transactions = [
    {
      id: 1,
      type: 'credit',
      amount: 5000,
      description: 'Crop sale - Wheat',
      date: '2024-01-15',
      status: 'completed'
    },
    {
      id: 2,
      type: 'debit',
      amount: 1200,
      description: 'Purchase - NPK Fertilizer',
      date: '2024-01-14',
      status: 'completed'
    },
    {
      id: 3,
      type: 'credit',
      amount: 3000,
      description: 'Crop sale - Rice',
      date: '2024-01-12',
      status: 'completed'
    }
  ]

  const orderHistory = [
    {
      id: 1,
      product: 'Premium Wheat Seeds',
      quantity: 2,
      price: 2800,
      date: '2024-01-10',
      status: 'delivered',
      rating: 5
    },
    {
      id: 2,
      product: 'Organic Fertilizer',
      quantity: 1,
      price: 1200,
      date: '2024-01-08',
      status: 'delivered',
      rating: 4
    }
  ]

  const savedProducts = [
    {
      id: 1,
      name: 'Drip Irrigation Kit',
      price: 2500,
      image: '/api/placeholder/80/80',
      seller: 'Irrigation Pro'
    },
    {
      id: 2,
      name: 'Hybrid Tomato Seeds',
      price: 450,
      image: '/api/placeholder/80/80',
      seller: 'Seed Master'
    }
  ]

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'wallet', label: 'Wallet' },
    { id: 'orders', label: 'Orders' },
    { id: 'saved', label: 'Saved' },
    { id: 'subscriptions', label: 'Subscriptions' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* User Info Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="h-20 w-20 bg-primary-100 rounded-full flex items-center justify-center">
                <User className="h-10 w-10 text-primary-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant="default">{user.role}</Badge>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{user.location}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                  <span>Joined {formatDate(new Date(user.joinDate))}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{user.rating}</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* User Type Switcher */}
        <Card>
          <CardHeader>
            <CardTitle>Account Type</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <Button
                variant={isFarmer ? "default" : "outline"}
                onClick={() => setUserType('farmer')}
                className="flex-1 flex items-center space-x-2"
              >
                <Wheat className="h-4 w-4" />
                <span>Farmer</span>
              </Button>
              <Button
                variant={isConsumer ? "default" : "outline"}
                onClick={() => setUserType('consumer')}
                className="flex-1 flex items-center space-x-2"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Consumer</span>
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Switch between farmer and consumer modes to access different features
            </p>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <Wallet className="h-8 w-8 text-primary-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(user.walletBalance)}</p>
              <p className="text-sm text-gray-600">Wallet Balance</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">
                {formatCurrency(isFarmer ? user.totalEarnings : user.totalSpent)}
              </p>
              <p className="text-sm text-gray-600">
                {isFarmer ? 'Total Earnings' : 'Total Spent'}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Package className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{user.totalOrders}</p>
              <p className="text-sm text-gray-600">
                {isFarmer ? 'Orders Sold' : 'Orders Placed'}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{user.rating}</p>
              <p className="text-sm text-gray-600">Rating</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Crop sold successfully</p>
                      <p className="text-sm text-gray-600">Wheat - 2 tons</p>
                    </div>
                    <span className="text-sm text-gray-500">2 hours ago</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Package className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Order delivered</p>
                      <p className="text-sm text-gray-600">Premium Wheat Seeds</p>
                    </div>
                    <span className="text-sm text-gray-500">1 day ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'wallet' && (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Transaction History</span>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                          transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
                        }`}>
                          {transaction.type === 'credit' ? (
                            <Upload className="h-5 w-5 text-green-600" />
                          ) : (
                            <Download className="h-5 w-5 text-red-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{transaction.description}</p>
                          <p className="text-sm text-gray-600">{formatDate(new Date(transaction.date))}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-medium ${
                          transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {transaction.type === 'credit' ? '+' : '-'}{formatCurrency(transaction.amount)}
                        </p>
                        <Badge variant="success" className="text-xs">{transaction.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {orderHistory.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">{order.product}</h4>
                          <p className="text-sm text-gray-600">Qty: {order.quantity}</p>
                          <p className="text-sm text-gray-600">{formatDate(new Date(order.date))}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">{formatCurrency(order.price)}</p>
                          <Badge variant="success" className="text-xs">{order.status}</Badge>
                          <div className="flex items-center space-x-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < order.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Saved Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {savedProducts.map((product) => (
                    <div key={product.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className="h-16 w-16 bg-gray-200 rounded-lg flex items-center justify-center">
                          <Package className="h-8 w-8 text-gray-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{product.name}</h4>
                          <p className="text-sm text-gray-600">by {product.seller}</p>
                          <p className="font-medium text-gray-900">{formatCurrency(product.price)}</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Button size="sm" variant="outline">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button size="sm">
                            <ShoppingCart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'subscriptions' && (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Subscription Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {subscriptions.map((subscription) => (
                    <div key={subscription.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium text-gray-900">{subscription.name}</h4>
                            <Badge variant={subscription.status === 'active' ? 'default' : 'secondary'}>
                              {subscription.status}
                            </Badge>
                          </div>
                          <p className="text-2xl font-bold text-gray-900 mt-1">
                            {formatCurrency(subscription.price)}/{subscription.period}
                          </p>
                          <ul className="text-sm text-gray-600 mt-2 space-y-1">
                            {subscription.features.map((feature, index) => (
                              <li key={index} className="flex items-center space-x-2">
                                <div className="h-1 w-1 bg-gray-400 rounded-full"></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          {subscription.nextBilling && (
                            <p className="text-sm text-gray-500 mt-2">
                              Next billing: {formatDate(new Date(subscription.nextBilling))}
                            </p>
                          )}
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Button 
                            variant={subscription.status === 'active' ? 'outline' : 'default'}
                            size="sm"
                          >
                            {subscription.status === 'active' ? 'Cancel' : 'Subscribe'}
                          </Button>
                          {subscription.status === 'active' && (
                            <Button variant="outline" size="sm">
                              <Shield className="h-4 w-4 mr-2" />
                              Manage
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
