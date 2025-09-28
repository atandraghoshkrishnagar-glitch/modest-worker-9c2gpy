import { useState, useEffect } from "react";

const LoveTheme = () => {
  const [showHearts, setShowHearts] = useState(false);
  const [kissPosition, setKissPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Start showing floating hearts after initial load
    const timer = setTimeout(() => {
      setShowHearts(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleBackgroundClick = (e) => {
    // Create kiss animation on click
    setKissPosition({ x: e.clientX, y: e.clientY });

    // Reset kiss animation after a short delay
    setTimeout(() => {
      setKissPosition({ x: 0, y: 0 });
    }, 1000);
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50 p-4 relative overflow-hidden cursor-pointer"
      onClick={handleBackgroundClick}
    >
      {/* Floating hearts animation */}
      {showHearts && (
        <>
          <div className="absolute top-1/4 left-1/4 animate-float1">
            <div className="text-pink-300 text-4xl">❤️</div>
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float2">
            <div className="text-red-300 text-3xl">❤️</div>
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-float3">
            <div className="text-purple-300 text-5xl">❤️</div>
          </div>
          <div className="absolute bottom-1/3 right-1/3 animate-float4">
            <div className="text-pink-400 text-2xl">❤️</div>
          </div>
          <div className="absolute top-1/2 left-1/5 animate-float5">
            <div className="text-red-400 text-4xl">❤️</div>
          </div>
        </>
      )}

      {/* Kiss animation that appears on click */}
      {kissPosition.x > 0 && kissPosition.y > 0 && (
        <div
          className="absolute text-4xl animate-ping"
          style={{ left: `${kissPosition.x}px`, top: `${kissPosition.y}px` }}
        >
          😘
        </div>
      )}

      {/* Main content container */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-md w-full z-10 border border-pink-200">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-pink-600 mb-2">
            For My Dearest
          </h1>
          <h2 className="text-3xl font-serif text-purple-700">Moyurina Das</h2>
        </div>

        {/* Hugging animation */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="animate-bounce text-5xl">🤗</div>
          </div>
        </div>

        {/* Love message */}
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-xl border border-pink-200 mb-6">
          <p className="text-lg text-gray-800 italic text-center leading-relaxed">
            <span className="font-bold text-pink-700 text-xl">
              I love you so, so much Madam jiiiiiii from the bottom of my heart.
              I miss you so, so, so much every day, every minute.
            </span>
          </p>
        </div>

        {/* Signature */}
        <div className="text-center mt-6">
          <p className="text-gray-600">With all my love,</p>
          <p className="text-purple-800 font-semibold text-xl mt-2">
            Your favorite person,
          </p>
          <p className="text-pink-700 font-bold text-2xl">Atandra Ghosh</p>
        </div>
      </div>

      {/* Hint text */}
      <div className="mt-6 text-gray-500 text-sm text-center">
        Click anywhere for a surprise! 😘
      </div>

      {/* Custom styles for animations */}
      <style>{`
        @keyframes float1 {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        @keyframes float2 {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        @keyframes float3 {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(15deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        @keyframes float4 {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(-8deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        @keyframes float5 {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-22px) rotate(12deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        .animate-float1 { animation: float1 3s ease-in-out infinite; }
        .animate-float2 { animation: float2 4s ease-in-out infinite; }
        .animate-float3 { animation: float3 5s ease-in-out infinite; }
        .animate-float4 { animation: float4 3.5s ease-in-out infinite; }
        .animate-float5 { animation: float5 4.5s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default LoveTheme;
