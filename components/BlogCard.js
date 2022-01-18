import Image from "next/image";
import Link from "next/link";


export default function BlogCard({ data }) {
    return(
       <Link href={'/post/[slug]'} as={`/post/${data.slug}`} passHref locale={false}>
            <div className="max-w-sm rounded overflow-hidden shadow-xl cursor-pointer px-5 py-4">
                <Image 
                    width={300}
                    height={300}
                    src={data.image.cover}
                    alt="Blog Image" 
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{data.title}</div>
                    <p className="text-gray-700 text-base">
                        {data.description}
                    </p>
                </div>
            </div>
       </Link>
    )
}