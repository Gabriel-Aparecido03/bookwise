import AuthContextProvider from "@/context/auth-context";
import { BookContextProvider } from "@/context/books-context";
import { ReactNode } from "react";

interface ProviderParamsType {
  children: ReactNode
}

export function Providers({ children }: ProviderParamsType) {
  return (
    <AuthContextProvider>
      <BookContextProvider>
        {children}
      </BookContextProvider>
    </AuthContextProvider>
  )
}