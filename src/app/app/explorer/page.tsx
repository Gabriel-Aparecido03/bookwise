'use client'

import { TagsCollections } from "@/components/tags-collection";
import { FeedExplorerBooks } from "./components/feed-explorer-books";
import { useBooks } from "./hook/useBooks";
import { Input } from "@/components/ui/input";

export default function Explorer() {
  const { changeFilterSearch  } = useBooks()
  return (
    <main className="flex-1 flex flex-col gap-6 mt-4">
      <Input onChange={e => {changeFilterSearch(e.target.value)} } />
      <TagsCollections />
      <FeedExplorerBooks />
    </main>
  )
}