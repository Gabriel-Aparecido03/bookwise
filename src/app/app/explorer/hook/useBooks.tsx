import { BookContext } from "@/context/books-context";
import { useContext } from "react";

export function useBooks() {
  const hook = useContext(BookContext)
  return hook
}