import { useAppSelector } from "../../redux/hooks"

type Props = {}

export default function Header({}: Props) {
  const { carts } = useAppSelector((state) => state.Cart)

  return (
    <div id="header" className="fixed z-10 w-full">
      <nav className="bg-white border-gray-200 md:px-0">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <div>
            <select name="lang" id="lang" className="border border-white outline-none text-sm">
              <option value="EN" className="text-sm">
                EN
              </option>
              <option value="AR" className="text-sm">
                AR
              </option>
            </select>
            <select name="currency" id="currency" className="border border-white outline-none text-sm">
              <option value="USD" className="text-sm">
                USD
              </option>
              <option value="AED" className="text-sm">
                AED
              </option>
            </select>
          </div>
          <div className="flex items-center space-x-6 ">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </a>
            <a href="/cart">
              <div className="relative">
                {carts[0]?.products ? (
                  <span className="inline-flex items-center rounded-full absolute left-3 bottom-3 bg-red text-white px-1.5 text-[10px]">
                    {carts[0]?.products.length}
                  </span>
                ) : null}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </div>
            </a>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
      </nav>

      <nav className="bg-gray-50 md:px-0">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl gap-2 p-4">
          <a href="/" className="flex items-center space-x-3 ">
            <img src="assets/logo.png" className="h-8" alt="e-comm Logo" />
            <span className="self-center text-xl font-extrabold whitespace-nowrap">E-Comm</span>
          </a>
          <div className="flex items-center uppercase">
            <ul className="flex flex-row font-medium mt-0 space-x-4 md:space-x-8 text-sm md:text-lg">
              <li>
                <a href="/" className="text-black hover:underline" aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:underline">
                  BAGS
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:underline">
                  SNEAKERS
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:underline">
                  BELT
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:underline">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
