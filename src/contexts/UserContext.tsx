import React, { createContext, useContext, useState, ReactNode } from 'react'

export type UserType = 'consumer' | 'farmer'

interface UserContextType {
  userType: UserType
  setUserType: (type: UserType) => void
  isConsumer: boolean
  isFarmer: boolean
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

interface UserProviderProps {
  children: ReactNode
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userType, setUserType] = useState<UserType>('consumer')

  const isConsumer = userType === 'consumer'
  const isFarmer = userType === 'farmer'

  return (
    <UserContext.Provider
      value={{
        userType,
        setUserType,
        isConsumer,
        isFarmer,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
