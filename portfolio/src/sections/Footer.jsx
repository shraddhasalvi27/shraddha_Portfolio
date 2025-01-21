const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a
            href="https://github.com/shraddhasalvi27"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-6 h-6"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://twitter.com/shraddha_272"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/twitter.svg"
              alt="twitter"
              className="w-6 h-6"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://instagram.com/__.shraddha27"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/instagram.svg"
              alt="instagram"
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>

      <p className="text-white-500">
        © 2024 ShraddhaSalvi. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;