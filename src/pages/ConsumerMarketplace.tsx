import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  Filter, 
  Star, 
  ShoppingCart, 
  Heart,
  Leaf,
  Apple,
  Carrot,
  Grape,
  Cherry,
  Banana,
  Circle,
  Wheat,
  Zap
} from 'lucide-react'
import { formatCurrency } from '@/lib/utils'

const ConsumerMarketplace: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  
  const addToCart = (item: any) => {
    console.log('Added to cart:', item)
  }

  const categories = [
    { id: 'all', label: 'All', icon: Leaf },
    { id: 'vegetables', label: 'Vegetables', icon: Carrot },
    { id: 'fruits', label: 'Fruits', icon: Apple },
    { id: 'nuts', label: 'Nuts', icon: Cherry },
    { id: 'grains', label: 'Grains', icon: Wheat },
  ]

  const products = [
    {
      id: 1,
      name: 'Fresh Organic Tomatoes',
      category: 'vegetables',
      price: 120,
      originalPrice: 150,
      image: '🍅',
      rating: 4.8,
      reviews: 124,
      seller: 'Green Valley Farms',
      sellerRating: 4.9,
      availability: 'In Stock',
      description: 'Fresh organic tomatoes, perfect for salads and cooking',
      unit: '1kg'
    },
    {
      id: 2,
      name: 'Sweet Carrots',
      category: 'vegetables',
      price: 80,
      originalPrice: 100,
      image: '🥕',
      rating: 4.6,
      reviews: 89,
      seller: 'Fresh Farm Direct',
      sellerRating: 4.7,
      availability: 'In Stock',
      description: 'Sweet and crunchy carrots, great for snacking',
      unit: '1kg'
    },
    {
      id: 3,
      name: 'Fresh Spinach Leaves',
      category: 'vegetables',
      price: 60,
      originalPrice: 80,
      image: '🥬',
      rating: 4.7,
      reviews: 156,
      seller: 'Organic Harvest',
      sellerRating: 4.8,
      availability: 'In Stock',
      description: 'Fresh organic spinach leaves, perfect for salads',
      unit: '500g'
    },
    {
      id: 4,
      name: 'Red Bell Peppers',
      category: 'vegetables',
      price: 180,
      originalPrice: 220,
      image: '🫑',
      rating: 4.5,
      reviews: 67,
      seller: 'Pepper Paradise',
      sellerRating: 4.6,
      availability: 'In Stock',
      description: 'Sweet red bell peppers, great for cooking',
      unit: '1kg'
    },
    {
      id: 5,
      name: 'Fresh Apples - Red Delicious',
      category: 'fruits',
      price: 200,
      originalPrice: 250,
      image: '🍎',
      rating: 4.9,
      reviews: 203,
      seller: 'Apple Orchard',
      sellerRating: 4.8,
      availability: 'In Stock',
      description: 'Crisp and sweet red delicious apples',
      unit: '1kg'
    },
    {
      id: 6,
      name: 'Fresh Bananas',
      category: 'fruits',
      price: 80,
      originalPrice: 100,
      image: '🍌',
      rating: 4.6,
      reviews: 178,
      seller: 'Tropical Fruits Co.',
      sellerRating: 4.7,
      availability: 'In Stock',
      description: 'Fresh yellow bananas, perfect for breakfast',
      unit: '1 dozen'
    },
    {
      id: 7,
      name: 'Sweet Oranges',
      category: 'fruits',
      price: 150,
      originalPrice: 180,
      image: '🍊',
      rating: 4.7,
      reviews: 92,
      seller: 'Citrus Grove',
      sellerRating: 4.8,
      availability: 'In Stock',
      description: 'Juicy and sweet oranges, rich in vitamin C',
      unit: '1kg'
    },
    {
      id: 8,
      name: 'Fresh Grapes - Green',
      category: 'fruits',
      price: 300,
      originalPrice: 350,
      image: '🍇',
      rating: 4.8,
      reviews: 145,
      seller: 'Vineyard Fresh',
      sellerRating: 4.9,
      availability: 'In Stock',
      description: 'Sweet green grapes, perfect for snacking',
      unit: '1kg'
    },
    {
      id: 9,
      name: 'Almonds - Raw',
      category: 'nuts',
      price: 800,
      originalPrice: 900,
      image: '🥜',
      rating: 4.9,
      reviews: 234,
      seller: 'Nutty Delights',
      sellerRating: 4.8,
      availability: 'In Stock',
      description: 'Premium raw almonds, great for health',
      unit: '500g'
    },
    {
      id: 10,
      name: 'Fresh Corn',
      category: 'grains',
      price: 100,
      originalPrice: 120,
      image: '🌽',
      rating: 4.6,
      reviews: 87,
      seller: 'Corn Fields',
      sellerRating: 4.7,
      availability: 'In Stock',
      description: 'Sweet fresh corn, perfect for grilling',
      unit: '6 pieces'
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.seller.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Fresh Produce</h1>
            <p className="text-gray-600">Buy fresh vegetables, fruits & nuts directly from farmers</p>
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search for fresh produce..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="p-4">
        {/* Categories */}
        <div className="mb-6">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{category.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="crop-card overflow-hidden">
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
                  <span className="text-6xl">{product.image}</span>
                </div>
                <div className="absolute top-2 right-2">
                  <Button size="icon" variant="ghost" className="h-8 w-8 bg-white/80 hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                {product.originalPrice && product.originalPrice > product.price && (
                  <Badge className="absolute top-2 left-2 bg-red-600">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-4">
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
                  
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
                      <span className="text-sm text-gray-500 ml-1">/{product.unit}</span>
                      {product.originalPrice && product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          {formatCurrency(product.originalPrice)}
                        </span>
                      )}
                    </div>
                    <Badge variant="success" className="text-xs">
                      {product.availability}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span>by {product.seller}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span>{product.sellerRating}</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-500 line-clamp-2">{product.description}</p>
                  
                  <div className="flex space-x-2 pt-2">
                    <Button 
                      size="sm" 
                      className="flex-1 btn-primary"
                      onClick={() => addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        originalPrice: product.originalPrice,
                        image: product.image,
                        seller: product.seller,
                        category: product.category
                      })}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
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

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Leaf className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ConsumerMarketplace
