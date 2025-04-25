import { useEffect, useState } from "react";
import './Count3.css';
export default function Count3() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 1;
    const end = 75;
    const interval = 100;           // ms

    const timer = setInterval(() => {
      setCount(current);           // يحدّث الـ state => يعيد الـ render
      if (current >= end) clearInterval(timer);
      current++;
    }, interval);

    // تنظيف المؤقّت عند إزالة الكمبوننت
    return () => clearInterval(timer);
  }, []);




  return (
    <div className="count3">
      <p>{count} % <br/> <strong className="z">Reduced costs**</strong></p>
    </div>
  );
}

