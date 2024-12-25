import React, { createContext, useContext, ReactNode } from "react"

import { getCurrentUser } from "./appwrite"
import { useAppwrite } from "./useAppwrite"
// import { Redirect } from "expo-router"

interface GlobalContextType {
  isLoggedIn: boolean
  user: User | null
  loading: boolean
  // refetch: () => void
  refetch: any
}

interface User {
  $id: string
  name: string
  email: string
  avatar: string
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

interface GlobalProviderProps {
  children: ReactNode
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const {
    data: user,
    loading,
    refetch,
  } = useAppwrite({
    fn: getCurrentUser,
  })

  const isLoggedIn = !!user

  // console.log(JSON.stringify(user, null, 2 ), "userData")

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        user,
        loading,
        refetch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext)
  if (!context)
    throw new Error("useGlobalContext must be used within a GlobalProvider")

  return context
}

export default GlobalProvider