import { useRef } from "react"
import { useState } from "react"
import { useEffect } from "react"

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

  useEffect(() => {
    let i = 0
    if (intervalId.current !== null) return
    intervalId.current = setInterval(() => {
      i > 3 ? i = 0 : i++
      setImage(images[i])
    }, 1000)
  }, [])

  return <div>
    <div className="slider"><img src={image} alt="slider-image" /></div>
    <div className="bestseller">
      
    </div>
  </div>
}