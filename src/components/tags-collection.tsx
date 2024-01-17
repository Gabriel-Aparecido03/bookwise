import { useBooks } from "@/app/app/explorer/hook/useBooks";
import { Tag } from "./tag";

export function TagsCollections() {

  const { filters, selectedFilter } = useBooks()

  return (
    <div className="flex items-center justify-start gap-3 flex-wrap">
      <Tag id={null} isSelected={selectedFilter === null} name={'All'} key={''} />
      {filters.map( filter => <Tag id={filter.id} isSelected={selectedFilter?.id === filter.id} name={filter.name} key={filter.id} />)}
    </div>
  )
}