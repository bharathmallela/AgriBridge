import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Store, 
  Star, 
  Package, 
  TrendingUp, 
  Users, 
  MessageCircle,
  Heart,
  Share2,
  Filter,
  Search,
  Award,
  Shield,
  Truck,
  Clock,
  MapPin,
  Phone,
  Mail,
  BarChart3,
  Eye,
  ThumbsUp
} from 'lucide-react'
import { formatCurrency, formatDate } from '@/lib/utils'

const Seller: React.FC = () => {
  const [activeTab, setActiveTab] = useState('products')

  // Mock seller data
  const seller = {
    name: 'GreenFarm Seeds',
    description: 'Leading supplier of premium quality seeds and agricultural inputs. Serving farmers across India for over 15 years.',
    rating: 4.9,
    totalReviews: 1247,
    totalProducts: 156,
    totalSales: 8942,
    joinDate: '2008-03-15',
    location: 'Punjab, India',
    phone: '+91 98765 43210',
    email: 'info@greenfarmseeds.com',
    verified: true,
    premium: true,
    responseTime: '2 hours',
    deliveryTime: '1-2 days',
    avatar: '/api/placeholder/100/100'
  }

  const products = [
    {
      id: 1,
      name: 'Premium Wheat Seeds - HD-3086',
      price: 2800,
      originalPrice: 3200,
      image: '/api/placeholder/200/150',
      rating: 4.8,
      reviews: 124,
      availability: 'In Stock',
      category: 'Seeds',
      description: 'High-yield wheat seeds with 95% germination rate. Suitable for all soil types.',
      features: ['95% Germination Rate', 'Disease Resistant', 'High Yield']
    },
    {
      id: 2,
      name: 'Organic Tomato Seeds - Hybrid',
      price: 450,
      originalPrice: 500,
      image: '/api/placeholder/200/150',
      rating: 4.6,
      reviews: 89,
      availability: 'In Stock',
      category: 'Seeds',
      description: 'Certified organic tomato seeds perfect for home gardens and commercial cultivation.',
      features: ['Organic Certified', 'High Yield', 'Disease Resistant']
    },
    {
      id: 3,
      name: 'NPK Fertilizer 19-19-19',
      price: 1200,
      originalPrice: 1400,
      image: '/api/placeholder/200/150',
      rating: 4.5,
      reviews: 67,
      availability: 'In Stock',
      category: 'Fertilizers',
      description: 'Balanced NPK fertilizer suitable for all crops and soil types.',
      features: ['Balanced NPK', 'Water Soluble', 'All Crops']
    }
  ]

  const reviews = [
    {
      id: 1,
      user: 'Rajesh Kumar',
      rating: 5,
      comment: 'Excellent quality seeds. Got a great yield this season. Highly recommended!',
      product: 'Premium Wheat Seeds',
      date: '2024-01-10',
      helpful: 12
    },
    {
      id: 2,
      user: 'Priya Sharma',
      rating: 4,
      comment: 'Good quality products and fast delivery. Will order again.',
      product: 'Organic Tomato Seeds',
      date: '2024-01-08',
      helpful: 8
    },
    {
      id: 3,
      user: 'Amit Singh',
      rating: 5,
      comment: 'Best seeds supplier in the region. Always delivers on time with quality products.',
      product: 'NPK Fertilizer',
      date: '2024-01-05',
      helpful: 15
    }
  ]

  const analytics = {
    totalViews: 15420,
    totalOrders: 8942,
    conversionRate: 58.2,
    avgRating: 4.9,
    monthlyRevenue: 125000,
    topProducts: ['Premium Wheat Seeds', 'Organic Tomato Seeds', 'NPK Fertilizer']
  }

  const tabs = [
    { id: 'products', label: 'Products' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'about', label: 'About' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Seller Store</h1>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Seller Info Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="h-20 w-20 bg-primary-100 rounded-full flex items-center justify-center">
                <Store className="h-10 w-10 text-primary-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h2 className="text-xl font-bold text-gray-900">{seller.name}</h2>
                  {seller.verified && (
                    <Badge variant="default" className="flex items-center space-x-1">
                      <Shield className="h-3 w-3" />
                      <span>Verified</span>
                    </Badge>
                  )}
                  {seller.premium && (
                    <Badge variant="warning" className="flex items-center space-x-1">
                      <Award className="h-3 w-3" />
                      <span>Premium</span>
                    </Badge>
                  )}
                </div>
                <p className="text-gray-600 mb-3">{seller.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-semibold">{seller.rating}</span>
                    </div>
                    <p className="text-sm text-gray-600">{seller.totalReviews} reviews</p>
                  </div>
                  <div className="text-center">
                    <Package className="h-4 w-4 text-blue-600 mx-auto mb-1" />
                    <p className="font-semibold">{seller.totalProducts}</p>
                    <p className="text-sm text-gray-600">Products</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-4 w-4 text-green-600 mx-auto mb-1" />
                    <p className="font-semibold">{seller.totalSales}</p>
                    <p className="text-sm text-gray-600">Sales</p>
                  </div>
                  <div className="text-center">
                    <Clock className="h-4 w-4 text-purple-600 mx-auto mb-1" />
                    <p className="font-semibold">{seller.responseTime}</p>
                    <p className="text-sm text-gray-600">Response</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{seller.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Truck className="h-4 w-4" />
                    <span>{seller.deliveryTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-600" />
                <span>{seller.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-600" />
                <span>{seller.email}</span>
              </div>
            </div>
            <div className="mt-4">
              <Button className="w-full">
                <MessageCircle className="h-4 w-4 mr-2" />
                Contact Seller
              </Button>
            </div>
          </CardContent>
        </Card>

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
        {activeTab === 'products' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Products ({products.length})</h3>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                      <Package className="h-16 w-16 text-gray-400" />
                    </div>
                    {product.originalPrice > product.price && (
                      <Badge className="absolute top-2 left-2 bg-red-600">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </Badge>
                    )}
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h4>
                      
                      <div className="flex items-center space-x-1">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">({product.reviews})</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-lg font-bold text-gray-900">
                            {formatCurrency(product.price)}
                          </span>
                          {product.originalPrice > product.price && (
                            <span className="text-sm text-gray-500 line-through ml-2">
                              {formatCurrency(product.originalPrice)}
                            </span>
                          )}
                        </div>
                        <Badge variant="success" className="text-xs">
                          {product.availability}
                        </Badge>
                      </div>
                      
                      <p className="text-xs text-gray-500 line-clamp-2">{product.description}</p>
                      
                      <div className="flex space-x-2 pt-2">
                        <Button size="sm" className="flex-1">
                          <Package className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                        <Button size="sm" variant="outline">
                          View
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Customer Reviews ({reviews.length})</h3>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
                  <option>Most Recent</option>
                  <option>Highest Rating</option>
                  <option>Lowest Rating</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
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
                          <span className="text-sm text-gray-500">{formatDate(new Date(review.date))}</span>
                        </div>
                        <p className="text-gray-600 mb-2">{review.comment}</p>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">{review.product}</Badge>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm" className="text-xs">
                              <ThumbsUp className="h-3 w-3 mr-1" />
                              Helpful ({review.helpful})
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Seller Analytics</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Eye className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{analytics.totalViews.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Total Views</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Package className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{analytics.totalOrders.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Total Orders</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{analytics.conversionRate}%</p>
                  <p className="text-sm text-gray-600">Conversion Rate</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Top Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {analytics.topProducts.map((product, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="h-8 w-8 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-primary-600">{index + 1}</span>
                        </div>
                        <span className="font-medium">{product}</span>
                      </div>
                      <BarChart3 className="h-5 w-5 text-gray-400" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>About {seller.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">{seller.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Business Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Established:</span>
                          <span>{formatDate(new Date(seller.joinDate))}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Location:</span>
                          <span>{seller.location}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Response Time:</span>
                          <span>{seller.responseTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Delivery Time:</span>
                          <span>{seller.deliveryTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Certifications</h4>
                      <div className="space-y-2">
                        <Badge variant="default" className="flex items-center space-x-1 w-fit">
                          <Shield className="h-3 w-3" />
                          <span>Verified Seller</span>
                        </Badge>
                        <Badge variant="warning" className="flex items-center space-x-1 w-fit">
                          <Award className="h-3 w-3" />
                          <span>Premium Partner</span>
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

export default Seller
