import { useEffect, useState } from "react";
import './Count1.css';
export default function Count1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 1;
    const end = 30;
    const interval = 300;           // ms

    const timer = setInterval(() => {
      setCount(current);           // يحدّث الـ state => يعيد الـ render
      if (current >= end) clearInterval(timer);
      current++;
    }, interval);

    // تنظيف المؤقّت عند إزالة الكمبوننت
    return () => clearInterval(timer);
  }, []);




  return (
    <div className="count1">
      <p>{count} % <br/> <strong className="b">YoY increase in productivity*</strong></p>
      {/* <h6>YoY increase in productivity*</h6> */}
    </div>
  );
}

