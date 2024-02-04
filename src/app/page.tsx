import React, { Fragment, useEffect, useState } from "react";
// import Product from "./components/product";
import MainView from "./components/mainView";


// Gets images from Pexels API 
async function getData() {
  const API_KEY = process.env.NEXT_PUBLIC_REACT_APP_API || null;

  // If we don't have an API key we end the function and return an empty list
  if (API_KEY == null) {
    console.error("ERROR: You need an API Key")
    return []
  }
  const options: any = {
    headers: {
      Authorization: API_KEY,

    }
  }

  let res = await fetch("https://api.pexels.com/v1/search?query=nature&per_page=20", options);
  if(!res.ok){
    console.error("ERROR: Fetch failed ===>", res)
    return []
  }
  let data = await res.json();
  return data.photos
}

export default async function Home() {
  let photos: any = await getData();

  return (
    <main id="main-p" className="w-full h-dvh">
      <MainView photos={photos} />
    </main>
  );

}
