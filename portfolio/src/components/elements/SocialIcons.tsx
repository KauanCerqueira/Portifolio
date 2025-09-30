const SocialIcons = () => {
  return (
    <div className="flex gap-4 mt-6">
      <a
        href="#"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-base-light hover:bg-gradient-accent transition transform hover:scale-110"
      >
        <i className="fab fa-instagram text-white text-xl"></i>
      </a>
      <a
        href="#"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-base-light hover:bg-blue-500 transition transform hover:scale-110"
      >
        <i className="fab fa-twitter text-white text-xl"></i>
      </a>
      <a
        href="#"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-base-light hover:bg-blue-700 transition transform hover:scale-110"
      >
        <i className="fab fa-linkedin-in text-white text-xl"></i>
      </a>
      <a
        href="#"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-base-light hover:bg-green-500 transition transform hover:scale-110"
      >
        <i className="fab fa-whatsapp text-white text-xl"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
