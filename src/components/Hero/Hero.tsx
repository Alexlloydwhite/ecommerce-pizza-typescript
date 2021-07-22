import { useState } from 'react';

const images: string[] = [
    "https://i.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY",
    "https://i.picsum.photos/id/2/200/300.jpg?hmac=HiDjvfge5yCzj935PIMj1qOf4KtvrfqWX3j4z1huDaU",
    "https://i.picsum.photos/id/3/200/300.jpg?hmac=o1-38H2y96Nm7qbRf8Aua54lF97OFQSHR41ATNErqFc"
  ];

export default function Hero() {
    const [imageIndex, setImageIndex] = useState(0);

    const nextImage = (): void => {
      setImageIndex((i) => (i + 1) % images.length);
    }
  
    const prevImage = (): void => {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1)
      } else {
        setImageIndex((i) => i - 1)
      }
    }
    return (
        <div>
            <button onClick={() => nextImage()}>Next!</button>
            <button onClick={() => prevImage()}>Previous!</button>
            <img src={images[imageIndex]} alt="" />
        </div>
    );
}