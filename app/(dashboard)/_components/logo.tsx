import Image from "next/image";

export const Logo = () => {
  return (
    <div className="p-2 pl-4 flex">
      <Image
        height={60}
        width={60}
        alt="logo"
        src="/logo.svg"
      />
      <p className="m-auto font-semibold leading-normal text-xl">Mavka</p>
    </div>
  )
}