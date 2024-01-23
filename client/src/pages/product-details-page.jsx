import React from "react";

export default function ProductDetails() {
  return (
    <div className="max-w-[500px] h-[500px]">
      <div class="sketchfab-embed-wrapper">
        {" "}
        <iframe
          title="Rebecca Fountain, Bath, UK"
          frameborder="0"
          allowfullscreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src="https://sketchfab.com/models/49ddeb06933148e3a8a22f2080a2c646/embed"
        >
          {" "}
        </iframe>{" "}

          {" "}
          <a
            href="https://sketchfab.com/3d-models/rebecca-fountain-bath-uk-49ddeb06933148e3a8a22f2080a2c646?utm_medium=embed&utm_campaign=share-popup&utm_content=49ddeb06933148e3a8a22f2080a2c646"
            target="_blank"
            rel="nofollow"
            
          >
            {" "}
            Rebecca Fountain, Bath, UK{" "}
          </a>{" "}
          by{" "}
          <a
            href="https://sketchfab.com/nebulousflynn?utm_medium=embed&utm_campaign=share-popup&utm_content=49ddeb06933148e3a8a22f2080a2c646"
            target="_blank"
            rel="nofollow"
            
          >
            {" "}
            Thomas Flynn{" "}
          </a>{" "}
          on{" "}
          <a
            href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=49ddeb06933148e3a8a22f2080a2c646"
            target="_blank"
            rel="nofollow"
            
          >
            Sketchfab
          </a>
        
      </div>
    </div>
  );
}
