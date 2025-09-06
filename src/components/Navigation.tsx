import React, { useState } from 'react'
import { Home, ShoppingBag, MessageSquare, User, ShoppingCart } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  // For now, let's use a simple state instead of context
  const [cartItems] = useState(0)
  
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'marketplace', label: 'Marketplace', icon: ShoppingBag },
    { id: 'cart', label: 'Cart', icon: ShoppingCart, badge: cartItems },
    { id: 'forum', label: 'Forum', icon: MessageSquare },
    { id: 'profile', label: 'Profile', icon: User },
  ]

  return (
    <div className="navigation fixed bottom-0 left-0 right-0 px-4 py-2 z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex flex-col items-center py-2 px-3 rounded-lg transition-colors duration-200 relative",
                isActive 
                  ? "text-primary-600 bg-primary-50" 
                  : "text-gray-500 hover:text-gray-700"
              )}
            >
              <div className="relative">
                <Icon size={20} />
                {tab.badge && tab.badge > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {tab.badge > 99 ? '99+' : tab.badge}
                  </span>
                )}
              </div>
              <span className="text-xs mt-1 font-medium">{tab.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Navigation
