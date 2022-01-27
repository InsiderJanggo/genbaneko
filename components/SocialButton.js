import Image from "next/image";


export default function SocialButton({ image, name }) {
    return(
        <button className="bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
            <Image src={image} alt="icon" width={30} height={30} />
            <span>{name}</span>
        </button>
    )
}