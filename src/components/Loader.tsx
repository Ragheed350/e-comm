import { ReactElement } from "react"

type Props = {
  isLoading: boolean
  type?: "text" | "cards" | "cards-horizontal"
  numOfItems?: number
  children: ReactElement
}

export default function Loader({ isLoading = false, type = "cards", numOfItems = 8, children }: Props) {
  if (isLoading) {
    if (type === "cards") {
      return (
        <div className="animate-pulse mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Array.from(Array(numOfItems)).map((el) => (
            <div key={el} className="grid gap-2">
              <div className="h-40 w-full bg-slate-200 rounded-md" />
              <div className="grid grid-cols-2 gap-2">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
            </div>
          ))}
        </div>
      )
    } else if (type === "cards-horizontal") {
      return (
        <div className="animate-pulse m-6 grid gap-x-6 gap-y-10 xl:gap-x-8">
          {Array.from(Array(numOfItems)).map((el) => (
            <div key={el} className="animate-pulse grid md:flex gap-2">
              <div className="rounded-md bg-slate-200 h-20 w-full md:w-1/6"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    } else
      return (
        <div className={`animate-pulse mt-6 grid grid-cols-${numOfItems} gap-2`}>
          {Array.from(Array(numOfItems)).map((el) => (
            <div key={el} className="h-2 bg-slate-200 rounded col-span-1"></div>
          ))}
        </div>
      )
  } else {
    return children
  }
}

{
  /* <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div> */
}
