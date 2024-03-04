type Props = {
  buttonLabel: string
  placeHolder: string
}

export default function FormInput({ buttonLabel, placeHolder }: Props) {
  return (
    <form className="max-w-md mx-auto">
      <div className="relative rounded-md border border-gray-300 bg-gray-50 overflow-hidden">
        <input type="search" id="default-search" className="block w-full p-4 outline-none text-black" placeholder={placeHolder} required />
        <button type="submit" className="text-white absolute end-0 top-0 bg-secondary hover:bg-blue font-medium p-4">
          {buttonLabel}
        </button>
      </div>
    </form>
  )
}
