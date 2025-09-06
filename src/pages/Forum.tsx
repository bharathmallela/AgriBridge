import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  MessageSquare, 
  Plus, 
  Search, 
  Filter, 
  ThumbsUp, 
  MessageCircle, 
  Eye,
  Clock,
  User,
  TrendingUp,
  Leaf,
  DollarSign,
  FileText,
  Image,
  BarChart3
} from 'lucide-react'
import { formatDate } from '@/lib/utils'

const Forum: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', label: 'All Discussions', icon: MessageSquare },
    { id: 'best-practices', label: 'Best Practices', icon: Leaf },
    { id: 'market-prices', label: 'Market Prices', icon: DollarSign },
    { id: 'policy-schemes', label: 'Policy & Schemes', icon: FileText },
    { id: 'technology', label: 'Technology', icon: BarChart3 },
  ]

  const discussions = [
    {
      id: 1,
      title: 'Best irrigation practices for wheat cultivation',
      category: 'best-practices',
      author: 'Rajesh Kumar',
      authorAvatar: '/api/placeholder/40/40',
      content: 'I\'ve been experimenting with different irrigation methods for my wheat crop. What are your experiences with drip irrigation vs traditional methods?',
      upvotes: 24,
      replies: 8,
      views: 156,
      lastActivity: '2024-01-15T10:30:00Z',
      tags: ['irrigation', 'wheat', 'water-management'],
      isPinned: true,
      hasImages: true
    },
    {
      id: 2,
      title: 'Current market prices for organic vegetables in Punjab',
      category: 'market-prices',
      author: 'Priya Sharma',
      authorAvatar: '/api/placeholder/40/40',
      content: 'Sharing the latest prices I got from the local mandi. Organic tomatoes are fetching ₹80/kg, while regular ones are at ₹45/kg.',
      upvotes: 18,
      replies: 12,
      views: 234,
      lastActivity: '2024-01-15T09:15:00Z',
      tags: ['organic', 'prices', 'vegetables', 'punjab'],
      isPinned: false,
      hasImages: false
    },
    {
      id: 3,
      title: 'New government subsidy for solar irrigation pumps',
      category: 'policy-schemes',
      author: 'Amit Singh',
      authorAvatar: '/api/placeholder/40/40',
      content: 'The government has announced a new scheme providing 60% subsidy on solar irrigation pumps. Application deadline is March 31st.',
      upvotes: 31,
      replies: 15,
      views: 445,
      lastActivity: '2024-01-14T16:45:00Z',
      tags: ['subsidy', 'solar', 'irrigation', 'government'],
      isPinned: true,
      hasImages: false
    },
    {
      id: 4,
      title: 'AI-powered crop monitoring systems - worth the investment?',
      category: 'technology',
      author: 'Dr. Neha Patel',
      authorAvatar: '/api/placeholder/40/40',
      content: 'I\'ve been researching AI-based crop monitoring systems. They claim to increase yield by 15-20%. Has anyone used these systems?',
      upvotes: 12,
      replies: 6,
      views: 89,
      lastActivity: '2024-01-14T14:20:00Z',
      tags: ['AI', 'monitoring', 'technology', 'yield'],
      isPinned: false,
      hasImages: true
    },
    {
      id: 5,
      title: 'Composting techniques for better soil health',
      category: 'best-practices',
      author: 'Green Farmer',
      authorAvatar: '/api/placeholder/40/40',
      content: 'Composting has transformed my soil quality. Here\'s my step-by-step process that has worked wonders for my organic farm.',
      upvotes: 27,
      replies: 9,
      views: 178,
      lastActivity: '2024-01-13T11:30:00Z',
      tags: ['composting', 'soil-health', 'organic'],
      isPinned: false,
      hasImages: true
    }
  ]

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesCategory = selectedCategory === 'all' || discussion.category === selectedCategory
    const matchesSearch = discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         discussion.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         discussion.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId)
    return category ? category.icon : MessageSquare
  }

  const getCategoryLabel = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId)
    return category ? category.label : 'Discussion'
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Community Forum</h1>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </Button>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search discussions, topics, or tags..."
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

        {/* Discussions */}
        <div className="space-y-4">
          {filteredDiscussions.map((discussion) => {
            const CategoryIcon = getCategoryIcon(discussion.category)
            
            return (
              <Card key={discussion.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* Author Avatar */}
                    <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="h-5 w-5 text-primary-600" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            {discussion.isPinned && (
                              <Badge variant="warning" className="text-xs">Pinned</Badge>
                            )}
                            <Badge variant="secondary" className="text-xs flex items-center space-x-1">
                              <CategoryIcon className="h-3 w-3" />
                              <span>{getCategoryLabel(discussion.category)}</span>
                            </Badge>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                            {discussion.title}
                          </h3>
                        </div>
                        {discussion.hasImages && (
                          <Image className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        )}
                      </div>
                      
                      {/* Content Preview */}
                      <p className="text-gray-600 mb-3 line-clamp-2">
                        {discussion.content}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {discussion.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                      
                      {/* Meta Information */}
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <span>by {discussion.author}</span>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{formatDate(new Date(discussion.lastActivity))}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <ThumbsUp className="h-4 w-4" />
                            <span>{discussion.upvotes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{discussion.replies}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{discussion.views}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {filteredDiscussions.length === 0 && (
          <div className="text-center py-12">
            <MessageSquare className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No discussions found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Start a Discussion
            </Button>
          </div>
        )}

        {/* Load More */}
        {filteredDiscussions.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline">
              Load More Discussions
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Forum
