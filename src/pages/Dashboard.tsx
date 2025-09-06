import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  ShoppingCart, 
  Plus, 
  MessageCircle,
  Star,
  Calendar,
  Leaf,
  Users,
  Package,
  Heart,
  ShoppingBag
} from 'lucide-react'
import { formatCurrency } from '@/lib/utils'

const Dashboard: React.FC = () => {
  // For now, let's use a simple state instead of context
  const [userType, setUserType] = useState<'consumer' | 'farmer'>('consumer')
  const isConsumer = userType === 'consumer'
  const isFarmer = userType === 'farmer'
  
  // Mock data - in real app, this would come from API
  const farmerAnalytics = {
    earnings: { current: 45000, change: 12.5, trend: 'up' },
    cropForecast: { price: 2800, change: -5.2, trend: 'down' },
    householdPurchases: { count: 23, change: 8.1, trend: 'up' }
  }

  const consumerAnalytics = {
    totalSpent: { current: 2500, change: 15.2, trend: 'up' },
    ordersThisMonth: { count: 8, change: 25.0, trend: 'up' },
    favoriteCategory: { name: 'Vegetables', percentage: 45 }
  }

  const news = [
    {
      id: 1,
      title: "New Government Subsidy for Organic Farming",
      summary: "Up to ₹50,000 per hectare for certified organic farmers",
      date: "2024-01-15",
      category: "Policy"
    },
    {
      id: 2,
      title: "Smart Irrigation Technology Launch",
      summary: "AI-powered irrigation systems now available at 20% discount",
      date: "2024-01-14",
      category: "Technology"
    },
    {
      id: 3,
      title: "Monsoon Forecast 2024",
      summary: "Above average rainfall expected in northern regions",
      date: "2024-01-13",
      category: "Weather"
    }
  ]

  const reviews = [
    {
      id: 1,
      user: "Rajesh Kumar",
      rating: 5,
      comment: "Excellent quality seeds, great yield this season!",
      product: "Premium Wheat Seeds",
      date: "2024-01-10"
    },
    {
      id: 2,
      user: "Priya Sharma",
      rating: 4,
      comment: "Fast delivery and good packaging. Recommended!",
      product: "Organic Fertilizer",
      date: "2024-01-08"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">AgriBridge</h1>
            <p className="text-gray-600">
              Welcome back, {isFarmer ? 'Rajesh' : 'Sarah'}! 
              <Badge variant="secondary" className="ml-2">
                {isFarmer ? 'Farmer' : 'Consumer'}
              </Badge>
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-primary-600" />
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Analytics Widget */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary-600" />
              <span>{isFarmer ? 'Farmer Analytics' : 'Shopping Analytics'}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {isFarmer ? (
                <>
                  {/* Farmer Earnings */}
                  <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Monthly Earnings</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {formatCurrency(farmerAnalytics.earnings.current)}
                        </p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {farmerAnalytics.earnings.trend === 'up' ? (
                          <TrendingUp className="h-4 w-4 text-green-600" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-600" />
                        )}
                        <span className={`text-sm font-medium ${
                          farmerAnalytics.earnings.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          +{farmerAnalytics.earnings.change}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Crop Forecast */}
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Wheat Price Forecast</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {formatCurrency(farmerAnalytics.cropForecast.price)}
                        </p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {farmerAnalytics.cropForecast.trend === 'up' ? (
                          <TrendingUp className="h-4 w-4 text-green-600" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-600" />
                        )}
                        <span className={`text-sm font-medium ${
                          farmerAnalytics.cropForecast.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {farmerAnalytics.cropForecast.change}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Household Purchases */}
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Household Orders</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {farmerAnalytics.householdPurchases.count}
                        </p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium text-green-600">
                          +{farmerAnalytics.householdPurchases.change}%
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Consumer Total Spent */}
                  <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Total Spent This Month</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {formatCurrency(consumerAnalytics.totalSpent.current)}
                        </p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium text-green-600">
                          +{consumerAnalytics.totalSpent.change}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Orders This Month */}
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Orders This Month</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {consumerAnalytics.ordersThisMonth.count}
                        </p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium text-green-600">
                          +{consumerAnalytics.ordersThisMonth.change}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Favorite Category */}
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Favorite Category</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {consumerAnalytics.favoriteCategory.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {consumerAnalytics.favoriteCategory.percentage}% of purchases
                        </p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4 text-red-500" />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>{isFarmer ? 'Farmer Actions' : 'Shopping Actions'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {isFarmer ? (
                <>
                  <Button className="h-16 flex flex-col items-center justify-center space-y-2">
                    <MessageCircle className="h-6 w-6" />
                    <span>Consultation</span>
                  </Button>
                  <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-2">
                    <Plus className="h-6 w-6" />
                    <span>Add Crop</span>
                  </Button>
                  <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-2">
                    <ShoppingCart className="h-6 w-6" />
                    <span>Buy Inputs</span>
                  </Button>
                </>
              ) : (
                <>
                  <Button className="h-16 flex flex-col items-center justify-center space-y-2">
                    <ShoppingBag className="h-6 w-6" />
                    <span>Shop Fresh</span>
                  </Button>
                  <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-2">
                    <Heart className="h-6 w-6" />
                    <span>Favorites</span>
                  </Button>
                  <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-2">
                    <Package className="h-6 w-6" />
                    <span>Track Orders</span>
                  </Button>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Latest News */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary-600" />
              <span>Latest News</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {news.map((item) => (
                <div key={item.id} className="border-l-4 border-primary-200 pl-4 py-2">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.summary}</p>
                      <p className="text-xs text-gray-500 mt-2">{item.date}</p>
                    </div>
                    <Badge variant="secondary">{item.category}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Reviews Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-primary-600" />
              <span>Recent Reviews</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium text-gray-900">{review.user}</h4>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{review.comment}</p>
                      <p className="text-xs text-gray-500 mt-2">{review.product}</p>
                    </div>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
