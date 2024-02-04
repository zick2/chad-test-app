'use client'
import { useSearchParams } from 'next/navigation'
import { useRouter } from '../../../node_modules/next/router';


export default function ProductPage() {
    // const router = useRouter();
    const searchParams = useSearchParams()
    
    // Getting URL params data 
    const owner = searchParams.get('owner')
    const url = searchParams.get('url')
    // console.log(JSON.parse(data))
    
    return (
        <main id="main-p" className="w-full h-dvh overflow-y-auto">
            {/* Nav to hold back button */}
            <div className="h-30 w-full p-4 ">
                <button type="button" className="inline-flex items-center justify-center w-30 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    onClick={() => {
                        window.location.href = "/"
                    }}>Back</button>
            </div>
            
            {/* Element to show product (Image) */}
            <div
                className="flex flex-col w-full h-3/5 md:w-1/2 border-2 p-1 mb-5 m-auto rounded-md">
                <div className="w-full  rounded-md border overflow-clip">
                    <img src={url}
                        className="w-full"
                    />
                </div>
                <div>
                    Created by: {owner}
                </div>
            </div>
        </main>
    );
}
