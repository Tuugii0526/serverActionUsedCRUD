import Link from "next/link";

export const Nav = () => {
  return (
    <div className="w-full h-fit py-5 flex items-center justify-center">
      <Link href={"/add"}>
        <button className="btn bg-green-500">Add product</button>
      </Link>
    </div>
  );
};
