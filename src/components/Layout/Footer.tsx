type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className="bg-blue">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 pt-20 lg:py-8 lg:pt-28">
        {/* links */}
        <div className="grid grid-cols-2 gap-6 sm:gap-20 sm:grid-cols-3 mb-6">
          <div>
            <h2 className="mb-6 text-black">
              <a href="/" className="flex items-center space-x-3 ">
                <img src="assets/logo.png" className="h-8" alt="e-comm Logo" />
                <span className="self-center text-md font-extrabold whitespace-nowrap">E-Comm</span>
              </a>
            </h2>
            <ul className="text-black text-sm">
              <li className="mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever. Since the 1500s, when an unknown printer.
              </li>
            </ul>
          </div>
          <div>
            <FooterElement title="Follow us" links={["Since the 1500s, when an unknown printer took a galley of type and scrambled."]} />
            <div className="flex mt-4 gap-2">
              <a href="#" className="text-black hover:text-black">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-black hover:text-black ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                  <path
                    fillRule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
            </div>
          </div>
          <FooterElement title="Contact Us" links={["E-Comm , 4578 Marmora Road, Glasgow D04 89GR."]} />
        </div>

        <div className="grid grid-cols-2 gap-6 sm:gap-20 sm:grid-cols-4 mb-6">
          <FooterElement title="Infomation" links={["About Us", "Infomation", "Privacy Policy", "Terms & Conditions"]} />
          <FooterElement title="Service" links={["About Us", "Infomation", "Privacy Policy", "Terms & Conditions"]} />
          <FooterElement title="My Account" links={["About Us", "Infomation", "Privacy Policy", "Terms & Conditions"]} />
          <FooterElement title="Our Offers" links={["About Us", "Infomation", "Privacy Policy", "Terms & Conditions"]} />
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="mb-4">
            <span className="text-sm text-black sm:text-center">
              ©2018 Ecommerce theme by{" "}
              <a href="https://e-comm.com/" className="hover:underline">
                www.bisenbaev.com
              </a>
            </span>
          </div>

          <div className="flex gap-3">
            <img src="/assets/western-union.png" alt="western-union" className="h-6" />
            <img src="/assets/master-card.png" alt="master-card" className="h-6" />
            <img src="/assets/paypal.png" alt="paypal" className="h-6" />
            <img src="/assets/visa.png" alt="visa" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  )
}

const FooterElement = ({ title, links }: { title: string; links: string[] }) => {
  return (
    <div>
      <h2 className="mb-6 text-md font-semibold text-black">{title}</h2>
      <ul className="text-black text-sm">
        {links.map((link) => (
          <a key={link} href="#">
            <li key={link} className="mb-4">
              {link}
            </li>
          </a>
        ))}
      </ul>
    </div>
  )
}
