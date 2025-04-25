import { useEffect, useState } from "react";
import "./AboutHome.css";
const images = [
 "/imgs/mo1.jpg",
  "/imgs/mo2.jpg",
  "/imgs/mo3.webp",
  "/imgs/mo4.jpeg",
  "/imgs/mo5.jpg",
  "/imgs/mo6.jpg",
  "/imgs/mo7.webp",
  "/imgs/mo8.jpg",
  "/imgs/mo9.webp",
  "/imgs/mo10.avif"
];

export default function AboutHome() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 2000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="so">
      <div className="ho">
           <h2>
           Innovative Solutions Through Collaborative Work</h2>
           <p>
           Teamwork is the foundation of every successful project. This image shows a group of professionals from diverse backgrounds working together in a modern environment. Whether in programming, design, or strategy, the power of collaboration fosters creativity and problem-solving. By combining our expertise, we transform ideas into practical solutions that contribute to success. Teamwork is not just about getting things done; it's also about creating effective solutions that make a difference.
           </p>
      </div>

    <div className="oo">
      <img
        src={images[index]}
        alt={`Slide ${index}`}
        style={{
          width: "100%",
          // height: "auto",
          borderRadius: "1rem",
          boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
          transition: "all 0.5s ease-in-out"
        }}
        />
      <div style={{ marginTop: "1rem" }}>
        {images.map((_, i) => (
          <span
          key={i}
            onClick={() => setIndex(i)}
            style={{
              cursor: "pointer",
              padding: "5px",
              fontSize: "2rem",
              color: index === i ? "#007bff" : "#ccc"
            }}
            >
            •
          </span>
        ))}
      </div>
        </div>

    </div>
  );
}
