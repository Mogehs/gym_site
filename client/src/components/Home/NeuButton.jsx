const NeuButton = ({ text, className = "" }) => {
  return (
    <div className="min-h-[50px] py-2">
      <button
        className={`px-7 py-4 font-medium bg-[#FF0336] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] uppercase ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default NeuButton;
