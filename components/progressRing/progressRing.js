import { useState } from "react";

export default function ProgressRing({ radius, stroke, progress, count, content }) {
  const [attr, setAttr] = useState({
    normalizedRadius: radius - stroke * 2,
    circumference: (radius - stroke * 2) * 2 * Math.PI,
  });
  const strokeDashoffset =
    attr.circumference - (progress / 100) * attr.circumference;
  return (    
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="white"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={attr.circumference + " " + attr.circumference}
        style={{ strokeDashoffset }}
        r={attr.normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="100" fontFamily="fantasy">{count}</text>
      <text x="50%" y="70%" textAnchor="middle" dy=".3em" fontSize="35" fontWeight="500">{content}</text>
    </svg>    
    
  );
}
