import { useRef } from "react"
import { useState } from "react"
import { useEffect } from "react"
import bestsellerData from '../bestsellerData.json'
import justinData from '../justinData.json'
import buynowData from '../buynowData.json'
import giftingData from '../giftingData.json'
import { Item } from "../Components/Item"

export const Home = () => {
  const images = [
    'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F1e69c5f7-2df9-4c42-bf08-22b6b68779e0.jpg&w=1920&q=75',
    'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fc1fc9534-054e-46ea-80e2-482a128d9151.jpg&w=1920&q=75',
    'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F34d52684-19de-435e-bbde-86d09bf08c19.jpg&w=1920&q=75',
    'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F6b7bf5ff-c632-4b95-abaf-408c1c0d6edd.jpg&w=1920&q=75',
    'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fbcd1e4c1-fbaa-486c-86ed-07048ad3a3f9.jpg&w=1920&q=75'
  ]

  const [image, setImage] = useState(images[0])
  const intervalId = useRef(null)
  

  // useEffect(() => {
  //   let i = 0
  //   if (intervalId.current !== null) return
  //   intervalId.current = setInterval(() => {
  //     i > 3 ? i = 0 : i++
  //     setImage(images[i])
  //   }, 1000)
  // }, [])

  return <div>
    {/* slider */}
    <div className="slider"><img src={image} alt="slider-image" /></div>

    {/* bestseller */}
    <div className="bestseller">
      <h3>----- BESTSELLERS -----</h3>
      <div className="bestseller-item-sec">
        <div><button className="arrow-button"> {'<'} </button></div>
        <div className="bestseller-item">
          <Item {...bestsellerData[0]}/>
          <Item {...bestsellerData[1]}/>
          <Item {...bestsellerData[2]}/>
          <Item {...bestsellerData[3]}/>
        </div>
        <div><button className="arrow-button"> {'>'} </button></div>
      </div>
    </div>

    {/* hot deals */}
    <div className="hot-deal">
      <h3>----- HOT DEALS -----</h3>
        <div className="hot-deal-item">
          <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F8bc85906-26ba-41ed-a1b0-2ff7190ba9f8.jpg&w=1920&q=75" alt="" />
          <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F6d8f9700-ca7f-44ae-bdef-68cc5dc2ded1.jpg&w=1920&q=75" alt="" />
          <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F90a0f8b4-0ae4-4f0c-853d-ca54522fb509.jpg&w=1920&q=75" alt="" />
        </div>
    </div>

    {/* just-in */}
    <div className="just-in">
      <h3>----- JUST-IN -----</h3>
      <div className="just-in-item-sec">
        <div><button className="arrow-button"> {'<'} </button></div>
        <div className="just-in-item">
          <Item {...justinData[0]}/>
          <Item {...justinData[1]}/>
          <Item {...justinData[2]}/>
          <Item {...justinData[3]}/>
        </div>
        <div><button className="arrow-button"> {'>'} </button></div>
      </div>
    </div>

    

    {/* banner */}
    <div className="banner">
      <h3>----- SHUKAR HAI, SUGAR HAI -----</h3>
        <div className="banner-item">
          <img src="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/b16a42b1-3e35-42bb-b122-a517e75c490e.jpg&w=1920&q=75" alt="" />
        </div>
    </div>

    {/* top pics */}
    <div className="top-pics">
      <h3>----- TOP PICS OF THE WEEK -----</h3>
        <div className="top-pics-item">
          <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F4849cf44-c55c-4224-ba06-9dd0a5f48b67.gif&w=1920&q=75" alt="" />
          <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fc5dc6c75-a49e-4028-b3a3-3bbbc63e49d6.jpg&w=1920&q=75" alt="" />
          <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F9f9d2095-f019-4bb5-b961-db87fab439f6.jpg&w=1920&q=75" alt="" />
        </div>
    </div>

    {/* buy-now */}
    <div className="buy-now">
      <h3>----- BUY NOW PAY LATER -----</h3>
      <div className="buy-now-item-sec">
        <div><button className="arrow-button"> {'<'} </button></div>
        <div className="buy-now-item">
          <Item {...buynowData[0]}/>
          <Item {...buynowData[1]}/>
          <Item {...buynowData[2]}/>
          <Item {...buynowData[3]}/>
        </div>
        <div><button className="arrow-button"> {'>'} </button></div>
      </div>
    </div>

    {/* gifting */}
    <div className="buy-now">
      <h3>----- GIFTING -----</h3>
      <div className="buy-now-item-sec">
        <div><button className="arrow-button"> {'<'} </button></div>
        <div className="buy-now-item">
          <Item {...giftingData[0]}/>
          <Item {...giftingData[1]}/>
          <Item {...giftingData[2]}/>
          <Item {...giftingData[3]}/>
        </div>
        <div><button className="arrow-button"> {'>'} </button></div>
      </div>
    </div>

    {/* refer */}
    <div className="refer">
      <h3>----- REFER YOUR FRIENDS -----</h3>
        <div className="refer-item">
          <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F8bfe8bb4-002d-4097-a773-6af33325a594.jpg&w=1920&q=75" alt="" />
        </div>
    </div>

    {/* touch section */}
    <div className="touch">
    <h3>----- LET’S STAY IN TOUCH -----</h3>
    <p>Get the latest beauty tips straight to your inbox. Can’t wait to connect!</p>
    <div><input type="text" placeholder="Enter Email"/><button>SUBSCRIBE</button></div>
    </div>

  </div>
}