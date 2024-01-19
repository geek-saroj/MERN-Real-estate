import img from '../assets/images/bg.jpg'

const AboutPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2 p-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-gray-700 mt-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

    
      <div className="w-1/2 rounded">
        <img
          src={img}
          alt="About Us"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AboutPage;
