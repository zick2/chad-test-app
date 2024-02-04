'use client'
import { useRouter } from 'next/navigation'

export default function Product({ product }: { product: any }) {
    const router = useRouter()

    return (
        <>
            <div
                // Passing data as url parameters to be sent to the product page
                onClick={() => router.push(`/productPage?owner=${product.photographer}&&url=${product.src.medium}`)}
                className="flex flex-col w-full h-60 md:w-60 border-2 p-2 m-2 mb-5 rounded-md">
                <div className="w-full h-40 rounded-md border overflow-clip">
                    <img src={product.src.medium}
                        className="w-full"
                    />
                </div>
                <div>
                    Created by: {product.photographer}
                </div>
            </div>
        </>

    );
}
