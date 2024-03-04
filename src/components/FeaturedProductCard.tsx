import { StarIcon } from "../assets/icons/star"

type Props = {}

export default function FeaturedProductCard({}: Props) {
  return (
    <div className="flex gap-4">
      <div>
        <img
          className="w-28"
          src="https://s3-alpha-sig.figma.com/img/bb31/833d/a9239a65fd298cd776f516434570a968?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DbGMVofpuI6OIhxQWyosoFc62FnSDWcSadGygOpRZ-E5OqCXXZ9RjnNb~O-B~dVHXW9Ek1IRvV4xoGFV60aOeHO07f4C5KzxjkF-UTVgk2HbNFc9bKNPPH18PytNoqY1vStnzzPYW3v15DUgUBCs3dS~W47~hLvtFnVujnrJ7el6CZ3AdAoa5vi9xL-T1Gwksl0-zZ217rT2CFRr4A-tqQnGCmUmyywXhMbave2o64jvqNxIcpeZH3pNayJ3nHcRqauynq6AFlyucqL9fLSCVRbj4R6Z6zNZVmcSr~u~iTESlVaUUNH3pzFZLekImbZlf~pG4sb8HgWPSNFBC7OKNw__"
          alt=""
        />
      </div>
      <div className="grid">
        <h2 className="text-black">Blue Swade Nike Sneakers</h2>
        <div className="flex">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <div className="space-x-4">
          <h5 className="text-red">
            $499 <span className="text-gray-300 line-through">$599</span>
          </h5>
        </div>
      </div>
    </div>
  )
}
