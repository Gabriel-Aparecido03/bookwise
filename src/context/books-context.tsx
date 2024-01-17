'use client'

import { api } from "@/app/lib/axios";
import { Filter } from "@/interfaces/filter";
import { BookPresenter } from "@/interfaces/presenter/book-presenter";
import { ReactNode, createContext, useEffect, useState } from "react";

interface BookContextType {
  books: BookPresenter[]
  filters: Filter[]
  selectedFilter: Filter | null
  changeFilter: (filter: Filter | null) => void
  changeFilterSearch: (search: string) => void
}

interface BookContextProviderType {
  children: ReactNode
}

export const BookContext = createContext({} as BookContextType)

export function BookContextProvider({ children }: BookContextProviderType) {

  const [books, setBooks] = useState<BookPresenter[]>([])
  const [initalBooks, setInitalBooks] = useState<BookPresenter[]>([])
  const [filters, setFilters] = useState<Filter[]>([])
  const [selectedFilter, setSelectedFilter] = useState<Filter | null>(null)
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    fetchingBooks(),
    fetchingCategory()
  }, [])

  async function fetchingBooks() {
    const res = await api.get('/book')
    if (res.status === 200){ 
      setBooks([...res.data.books])
      setInitalBooks([...res.data.books])
    }
  }

  async function fetchingCategory() {
    const res = await api.get('/category')
    if (res.status === 200) setFilters([...res.data.categories])
  }

  function changeFilter(filter: Filter | null) {
    if (filter === null) {
      setSelectedFilter(null)
      setBooks(initalBooks)
      return
    }
    const isValidFilter = filters.find(item => item.id === filter.id)
    if (isValidFilter) {
      setSelectedFilter(filter)
      const filteredBooks = books.filter(book => book.category.includes(filter.name))
      setBooks(filteredBooks)
    }
  }

  function changeFilterSearch(search: string) {
    if(search.trim().length === 0 ) {
      setBooks(initalBooks)
      return
    }
    setSearchText(search)
    const filteredBooksName = books.filter(book => book.name.toLowerCase().includes(search.toLowerCase()))
    setBooks(filteredBooksName)
  }

  return (
    <BookContext.Provider value={{ books , changeFilter, changeFilterSearch, filters, selectedFilter }} >
      {children}
    </BookContext.Provider>
  )
}