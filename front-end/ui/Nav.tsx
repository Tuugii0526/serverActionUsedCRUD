import Link from "next/link"

export const Nav=()=>{
    return (
        <div className="w-full h-[100px] flex items-center justify-center">
        <Link href={'/'}>
        <button className="btn bg-green-500">Add product</button>
        </Link>
    </div>
    )
}