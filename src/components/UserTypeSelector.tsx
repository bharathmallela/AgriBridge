import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  ShoppingCart, 
  Wheat, 
  Users, 
  Store,
  Leaf,
  Package
} from 'lucide-react'
import { useUser } from '@/contexts/UserContext'

const UserTypeSelector: React.FC = () => {
  const { userType, setUserType } = useUser()

  const userTypes = [
    {
      id: 'consumer' as const,
      title: 'Consumer',
      subtitle: 'Buy fresh produce',
      description: 'Shop for fresh vegetables, fruits, and agricultural products directly from farmers',
      icon: ShoppingCart,
      features: ['Fresh produce', 'Direct from farmers', 'Home delivery', 'Quality guarantee'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      id: 'farmer' as const,
      title: 'Farmer',
      subtitle: 'Sell your crops',
      description: 'Sell your agricultural products, seeds, and farming supplies to consumers and other farmers',
      icon: Wheat,
      features: ['Sell crops', 'Marketplace access', 'Analytics dashboard', 'Community forum'],
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to AgriBridge</h1>
          <p className="text-gray-600">Choose your role to get started</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {userTypes.map((type) => {
            const Icon = type.icon
            const isSelected = userType === type.id
            
            return (
              <Card 
                key={type.id} 
                className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  isSelected 
                    ? 'ring-2 ring-primary-500 shadow-xl' 
                    : 'hover:shadow-lg'
                }`}
                onClick={() => setUserType(type.id)}
              >
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${type.bgColor} mb-4`}>
                      <Icon className={`w-8 h-8 text-${type.id === 'consumer' ? 'blue' : 'green'}-600`} />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{type.title}</h3>
                    <p className="text-gray-600 mb-4">{type.subtitle}</p>
                    <p className="text-sm text-gray-500 mb-6">{type.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {type.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className={`w-full ${
                        isSelected 
                          ? 'bg-primary-600 hover:bg-primary-700' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      {isSelected ? 'Selected' : 'Select'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            You can change your role anytime from the profile section
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserTypeSelector
