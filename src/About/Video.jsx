import React from 'react'
import './Video.css';
export default function Video() {
    return (
        <div className="vioo">
          <div className="heroo">
            <video poster="/imgs/campusbrussels 3.jpg" playsinline autoplay controls loop muted className="hero-videoo">
              <source src="/imgs/BTS_ how WPP is creating generative 3D worlds using NVIDIA NIM microservices (1).mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      );
    };

