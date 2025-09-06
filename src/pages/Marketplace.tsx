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
  Package,
  Leaf,
  Wheat,
  Apple,
  Droplets,
  Wrench
} from 'lucide-react'
// import { formatCurrency } from '@/lib/utils' // Using local formatCurrency instead

interface MarketplaceProps {
  onAddToCart: (item: any) => void
  userType: 'consumer' | 'farmer'
  currency: string
  language: string
  formatCurrency: (amount: number) => string
  t: (key: string) => string
}

const Marketplace: React.FC<MarketplaceProps> = ({ onAddToCart, userType, currency, language, formatCurrency, t }) => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Using formatCurrency function passed from parent component

  const categories = userType === 'consumer' 
    ? [
        { id: 'all', label: 'All', icon: Package },
        { id: 'vegetables', label: 'Vegetables', icon: Leaf },
        { id: 'fruits', label: 'Fruits', icon: Apple },
        { id: 'herbs', label: 'Herbs', icon: Wheat },
        { id: 'organic', label: 'Organic', icon: Leaf },
      ]
    : [
        { id: 'all', label: 'All', icon: Package },
        { id: 'seeds', label: 'Seeds', icon: Wheat },
        { id: 'tools', label: 'Tools', icon: Wrench },
        { id: 'fertilizers', label: 'Fertilizers', icon: Droplets },
        { id: 'equipment', label: 'Equipment', icon: Wrench },
      ]

  const products = userType === 'consumer' 
    ? [
        // Fresh Vegetables
        {
          id: 1,
          name: 'Fresh Organic Tomatoes',
          category: 'vegetables',
          price: 3.50,
          originalPrice: 4.00,
          image: '🍅',
          rating: 4.8,
          reviews: 124,
          seller: 'Green Valley Farm',
          sellerRating: 4.9,
          availability: 'In Stock',
          description: 'Fresh organic tomatoes, picked daily from our local farm'
        },
        {
          id: 2,
          name: 'Crisp Lettuce',
          category: 'vegetables',
          price: 2.25,
          originalPrice: 2.50,
          image: '🥬',
          rating: 4.6,
          reviews: 89,
          seller: 'Fresh Fields',
          sellerRating: 4.7,
          availability: 'In Stock',
          description: 'Crisp, fresh lettuce perfect for salads'
        },
        {
          id: 3,
          name: 'Sweet Bell Peppers',
          category: 'vegetables',
          price: 4.00,
          originalPrice: 4.50,
          image: '🫑',
          rating: 4.7,
          reviews: 156,
          seller: 'Sunny Acres',
          sellerRating: 4.8,
          availability: 'In Stock',
          description: 'Colorful bell peppers, sweet and crunchy'
        },
        {
          id: 4,
          name: 'Fresh Carrots',
          category: 'vegetables',
          price: 2.75,
          originalPrice: 3.00,
          image: '🥕',
          rating: 4.5,
          reviews: 203,
          seller: 'Root Farm',
          sellerRating: 4.6,
          availability: 'In Stock',
          description: 'Fresh, crunchy carrots perfect for snacking'
        },
        // Fresh Fruits
        {
          id: 5,
          name: 'Sweet Strawberries',
          category: 'fruits',
          price: 5.50,
          originalPrice: 6.00,
          image: '🍓',
          rating: 4.9,
          reviews: 178,
          seller: 'Berry Farm',
          sellerRating: 4.9,
          availability: 'In Stock',
          description: 'Sweet, juicy strawberries picked at peak ripeness'
        },
        {
          id: 6,
          name: 'Fresh Apples',
          category: 'fruits',
          price: 3.25,
          originalPrice: 3.75,
          image: '🍎',
          rating: 4.6,
          reviews: 234,
          seller: 'Orchard Hill',
          sellerRating: 4.7,
          availability: 'In Stock',
          description: 'Crisp, sweet apples from local orchards'
        },
        {
          id: 7,
          name: 'Ripe Bananas',
          category: 'fruits',
          price: 2.50,
          originalPrice: 2.75,
          image: '🍌',
          rating: 4.4,
          reviews: 145,
          seller: 'Tropical Farm',
          sellerRating: 4.5,
          availability: 'In Stock',
          description: 'Perfectly ripe bananas, great for smoothies'
        },
        {
          id: 8,
          name: 'Fresh Oranges',
          category: 'fruits',
          price: 3.75,
          originalPrice: 4.25,
          image: '🍊',
          rating: 4.7,
          reviews: 167,
          seller: 'Citrus Grove',
          sellerRating: 4.8,
          availability: 'In Stock',
          description: 'Juicy, vitamin-rich oranges'
        },
        // Herbs
        {
          id: 9,
          name: 'Fresh Basil',
          category: 'herbs',
          price: 2.00,
          originalPrice: 2.25,
          image: '🌿',
          rating: 4.8,
          reviews: 98,
          seller: 'Herb Garden',
          sellerRating: 4.9,
          availability: 'In Stock',
          description: 'Aromatic fresh basil for cooking'
        },
        {
          id: 10,
          name: 'Fresh Mint',
          category: 'herbs',
          price: 1.75,
          originalPrice: 2.00,
          image: '🌱',
          rating: 4.6,
          reviews: 76,
          seller: 'Green Thumb',
          sellerRating: 4.7,
          availability: 'In Stock',
          description: 'Refreshing mint leaves for teas and cooking'
        },
      ]
    : [
        // Seeds for Farmers
        {
          id: 1,
          name: 'Premium Wheat Seeds',
          category: 'seeds',
          price: 2800,
          originalPrice: 3200,
          image: '🌾',
          rating: 4.8,
          reviews: 124,
          seller: 'GreenFarm Seeds',
          sellerRating: 4.9,
          availability: 'In Stock',
          description: 'High-yield wheat seeds with 95% germination rate'
        },
        {
          id: 2,
          name: 'Corn Seeds (Hybrid)',
          category: 'seeds',
          price: 1200,
          originalPrice: 1400,
          image: '🌽',
          rating: 4.7,
          reviews: 156,
          seller: 'CropMaster Seeds',
          sellerRating: 4.8,
          availability: 'In Stock',
          description: 'High-yield hybrid corn seeds for commercial farming'
        },
        {
          id: 3,
          name: 'Rice Seeds - Basmati',
          category: 'seeds',
          price: 1800,
          originalPrice: 2000,
          image: '🌾',
          rating: 4.9,
          reviews: 203,
          seller: 'Premium Seeds Co.',
          sellerRating: 4.9,
          availability: 'In Stock',
          description: 'Premium basmati rice seeds with excellent yield'
        },
        {
          id: 4,
          name: 'Soybean Seeds',
          category: 'seeds',
          price: 950,
          originalPrice: 1100,
          image: '🫘',
          rating: 4.6,
          reviews: 134,
          seller: 'AgriSeeds Ltd',
          sellerRating: 4.7,
          availability: 'In Stock',
          description: 'High-protein soybean seeds for oil production'
        },
        // Farming Tools
        {
          id: 5,
          name: 'Professional Tractor',
          category: 'equipment',
          price: 450000,
          originalPrice: 500000,
          image: '🚜',
          rating: 4.8,
          reviews: 45,
          seller: 'Farm Equipment Co.',
          sellerRating: 4.9,
          availability: 'In Stock',
          description: 'Heavy-duty tractor for large-scale farming operations'
        },
        {
          id: 6,
          name: 'Drip Irrigation System',
          category: 'equipment',
          price: 25000,
          originalPrice: 30000,
          image: '💧',
          rating: 4.7,
          reviews: 78,
          seller: 'Irrigation Solutions',
          sellerRating: 4.8,
          availability: 'In Stock',
          description: 'Complete drip irrigation system for 5 acres'
        },
        {
          id: 7,
          name: 'Harvesting Machine',
          category: 'equipment',
          price: 180000,
          originalPrice: 200000,
          image: '🌾',
          rating: 4.6,
          reviews: 32,
          seller: 'Harvest Pro',
          sellerRating: 4.7,
          availability: 'In Stock',
          description: 'Automated harvesting machine for wheat and rice'
        },
        {
          id: 8,
          name: 'Soil Testing Kit',
          category: 'tools',
          price: 2500,
          originalPrice: 3000,
          image: '🧪',
          rating: 4.5,
          reviews: 89,
          seller: 'AgriTools',
          sellerRating: 4.6,
          availability: 'In Stock',
          description: 'Professional soil testing kit for nutrient analysis'
        },
        // Fertilizers
        {
          id: 9,
          name: 'NPK Fertilizer 19-19-19',
          category: 'fertilizers',
          price: 1200,
          originalPrice: 1400,
          image: '🌱',
          rating: 4.5,
          reviews: 167,
          seller: 'AgriChem Solutions',
          sellerRating: 4.6,
          availability: 'In Stock',
          description: 'Balanced NPK fertilizer for all crop types'
        },
        {
          id: 10,
          name: 'Organic Compost (1 ton)',
          category: 'fertilizers',
          price: 8000,
          originalPrice: 9000,
          image: '🍂',
          rating: 4.8,
          reviews: 124,
          seller: 'EcoFertilizers',
          sellerRating: 4.9,
          availability: 'In Stock',
          description: 'Premium organic compost for sustainable farming'
        },
        {
          id: 11,
          name: 'Urea Fertilizer (50kg)',
          category: 'fertilizers',
          price: 1800,
          originalPrice: 2000,
          image: '⚗️',
          rating: 4.4,
          reviews: 203,
          seller: 'Nitrogen Plus',
          sellerRating: 4.5,
          availability: 'In Stock',
          description: 'High-nitrogen urea fertilizer for crop growth'
        },
        {
          id: 12,
          name: 'Pesticide Sprayer',
          category: 'tools',
          price: 4500,
          originalPrice: 5000,
          image: '🔫',
          rating: 4.6,
          reviews: 76,
          seller: 'Crop Protection',
          sellerRating: 4.7,
          availability: 'In Stock',
          description: 'Professional pesticide sprayer for crop protection'
        },
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
            <h1 className="text-2xl font-bold text-gray-900">
              {userType === 'consumer' ? t('Fresh Produce Market') : t('Farm Supplies & Equipment')}
            </h1>
            <p className="text-gray-600 text-sm mt-1">
              {userType === 'consumer' 
                ? 'Discover the freshest fruits and vegetables from local farmers' 
                : 'Everything you need for successful farming operations'
              }
            </p>
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
            placeholder="Search products, sellers..."
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
                      onClick={() => onAddToCart({
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
                      {t('Add to Cart')}
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
            <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Marketplace
