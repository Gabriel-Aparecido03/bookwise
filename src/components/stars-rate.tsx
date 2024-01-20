import { useMemo } from "react"
import { FaStar } from "react-icons/fa"
import { FaRegStar } from "react-icons/fa";

interface RateParamsType {
  rate: number
  controlValue?: (newValue: number) => void
}

const maxStartRate = 5

export function StartsRate({ rate, controlValue }: RateParamsType) {

  const startNotFillerNumber = Math.floor(maxStartRate - rate)

  const startsFilleds = useMemo(() => {
    let array = []
    for (let i = 0; i < rate; i++) {
      array.push(i)
    }
    return array
  }, [rate])

  const startNotFilleds = useMemo(() => {
    let array = []
    for (let i = rate; i < 5; i++) {
      array.push(i)
    }
    return array
  }, [startNotFillerNumber])

  return (
    <div className="flex items-center justify-center gap-1">
      {
        startsFilleds.map(i => <FaStar data-testid="stars-filled" onClick={()=>{controlValue && controlValue(i + 1)}} className={`w-4 h-4 text-purple-100 ${controlValue && 'hover:h-5 hover:w-5 cursor-pointer transition-all delay-75'}`} key={i} />)
      }
      {
        startNotFillerNumber > 0 && startNotFilleds.map(i => <FaRegStar data-testid="stars-not-filled" onClick={()=>{controlValue && controlValue(i + 1)}} className={`w-4 h-4 text-purple-100 ${controlValue && 'hover:h-5 hover:w-5 cursor-pointer transition-all delay-75'}`} key={i} />)
      }

    </div>
  )
}