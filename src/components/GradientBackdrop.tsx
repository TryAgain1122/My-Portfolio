/**
 * Fixed page backdrop: a soft white → ice-blue → white wash with four
 * heavily-blurred pastel blobs. Sits behind all content, never animates.
 */
const GradientBackdrop = () => {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_28%,#EEF6FF_62%,#FFFFFF_100%)]" />
      <div className="absolute -top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/3 rounded-full bg-sky-200/40 blur-[120px]" />
      <div className="absolute top-[22%] -left-40 h-[28rem] w-[28rem] rounded-full bg-cyan-100/50 blur-[110px]" />
      <div className="absolute top-[52%] -right-40 h-[30rem] w-[30rem] rounded-full bg-indigo-200/35 blur-[130px]" />
      <div className="absolute bottom-[-10rem] left-[15%] h-[26rem] w-[26rem] rounded-full bg-purple-200/30 blur-[120px]" />
    </div>
  );
};

export default GradientBackdrop;
