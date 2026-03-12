const DownloadButton = ({
  href = "/resume.pdf",
  label = "Download Resume",
  icon = "/svg/download.svg",
}) => {
  return (
    <a
      href={href}
      download
      aria-label={label}
      className="
        group
        inline-flex items-center gap-2
        px-5 py-2.5
        rounded-xl
        bg-black text-white
        font-medium
        transition-all duration-200
        hover:bg-gray-800
        focus:outline-none
        focus-visible:ring-2 focus-visible:ring-black
      "
    >
      <img
        src={icon}
        alt="Resume icon"
        className="
          w-5 h-5
          transition-transform
          group-hover:translate-y-0.5
        "
        loading="lazy"
      />

      <span className="text-sm uppercase tracking-wide">{label}</span>
    </a>
  );
};

export default DownloadButton;
