import Link from "next/link"

function MenuBar() {
  return (
    <>
        <div className="flex justify-center">
            <div className=" w-3xl bg-gray-700 py-3 rounded-2xl text-2xl flex justify-around">
                <Link href= "/" className="mx-5 hover:text-black">Home</Link>
                <Link href= "/about" className="mx-5 hover:text-black">About</Link>
                <Link href= "/viewProfile" className="mx-5 hover:text-black">View Profile</Link>
            </div>
        </div>
    </>
  )
}

export default MenuBar