import Image from "next/image";
import React from "react";

const Imgcomponent = () => {
  return (
    <Image
      src="/images/profile.jpg" // Route of the image file
      height={144} // Desired size with correct aspect ratio
      width={144} // Desired size with correct aspect ratio
      alt="Your Name"
    />
  );
};

export default Imgcomponent;
