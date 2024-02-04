'use client'
import { Fragment, useState } from "react";
import Product from "./product";


// This component will hold the filter function and a list of products
// The products are passed in as parameters
export default function MainView({ photos }: { photos: any }) {
  const [filter, setFilter] = useState("None");
  const [showFilter, setShowFilter] = useState(false);

  function handleFilter(value: string) {
    setFilter(value);
    setShowFilter(false)
  }

  function handleShowFilter() {
    setShowFilter(!showFilter)
  }

  return (
    <main id="main-p" className="w-full h-dvh ">
      <div className="h-30 w-full p-4  border-yellow-700 border-b-1">

        <div className="relative inline-block text-left">
          <button type="button" className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            onClick={handleShowFilter}
          >
            Filter by artist: {filter}
          </button>

          {
            showFilter ?
              <div className="absolute z-30 right-0 mt-2 space-y-2 bg-white border border-gray-300 rounded-md shadow-lg w-50 h-40 overflow-y-auto">
                <button key={`f-00`} className="block px-4 py-2 w-full text-sm text-gray-700 hover:bg-blue-500 hover:text-white"
                  onClick={() => handleFilter("None")}
                > <b>Reset</b></button>
                {
                  photos.map((photo: any, i: number) => {
                    return <button key={`f-${i}`} className="block px-4 py-2 w-full text-sm text-gray-700 hover:bg-blue-500 hover:text-white"
                      onClick={() => handleFilter(photo.photographer)}
                    >{photo.photographer}</button>
                  })
                }
              </div>
              : null
          }

        </div>

      </div>

      <div className="flex flex-row flex-wrap h-full overflow-y-auto ">

        {
          filter === "" || filter === "None" ?
            photos.map((photo: any) => {
              return (<Fragment key={photo.id}>
                <Product product={photo} />

              </Fragment>)
            })
            :
            photos.filter(((item: any) => item.photographer === filter)).map((photo: any) => {
              return (
                <Fragment key={photo.id}>
                  <Product product={photo} />
                </Fragment>
              )
            })

        }
        <div className="w-full  p-5">
          <a href="https://www.pexels.com">Photos provided by Pexels API</a>
          <a href="https://www.pexels.com">
            <img className="h-40" src="https://images.pexels.com/lib/api/pexels-white.png" />
          </a>
        </div>
      </div>

    </main>
  );

}
