import { useBooks } from "@/app/app/explorer/hook/useBooks"

interface TagPropsType {
  name : string
  id : string | null
  isSelected : boolean
}

export function Tag({ id ,isSelected ,name } : TagPropsType) {

  const { changeFilter } = useBooks()

  return (
    <button onClick={() => changeFilter(id ? { id , name} : null ) } className={`py-1 px-4 rounded-3xl border border-solid ${isSelected ? 'border-purple-200 bg-purple-200' : 'bg-transparent border-purple-100'} `}>
      <span className="text-gray-100 text-center">{ name }</span>
    </button>
  )
}