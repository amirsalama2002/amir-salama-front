import { useEffect, useState } from "react";
import './Count2.css';
export default function Count2() {
  const [count2, setCount1] = useState(0);

  useEffect(() => {
    let current = 1;
    const end = 90;
    const interval = 100;           // ms

    const timer1 = setInterval(() => {
      setCount1(current);           // يحدّث الـ state => يعيد الـ render
      if (current >= end) clearInterval(timer1);
      current++;
    }, interval);

    // تنظيف المؤقّت عند إزالة الكمبوننت
    return () => clearInterval(timer1);
  }, []);


  return (
    <div className="count2">
      <p>{count2} % <br/> <strong className="m">Reduced delivery time**</strong></p>
      {/* <h6>Reduced delivery time**</h6> */}
    </div>
  );
}

