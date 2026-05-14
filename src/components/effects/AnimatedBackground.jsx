import FloatingFrames from "./FloatingFrames";
import GradientBlob from "./GradientBlob";

function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <GradientBlob
        className="left-[-10%] top-[-10%] h-96 w-96"
        color="bg-violet-600/25"
        duration={12}
      />

      <GradientBlob
        className="bottom-[-10%] right-[-10%] h-96 w-96"
        color="bg-cyan-500/20"
        duration={14}
        delay={1.5}
      />

      <GradientBlob
        className="left-[40%] top-[35%] h-72 w-72"
        color="bg-fuchsia-500/10"
        duration={16}
        delay={0.8}
      />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <FloatingFrames />
    </div>
  );
}

export default AnimatedBackground;
