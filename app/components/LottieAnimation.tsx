"use client"; // Asegura que este componente solo se renderice en el cliente
import Lottie from "lottie-react";
import animationData from "@/public/Logo-2.json"; // Asegúrate de que la ruta es correcta

const LottieAnimation = () => {
    return <Lottie animationData={animationData} loop={true} className="flex justify-center items-center h-full" />;
};

export default LottieAnimation;
