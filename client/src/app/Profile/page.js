const Profile = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {" "}
      {/* Set max width and center */}
      <section className="text-center mt-6 bg-gradient-to-r from-blue-50 to-blue-200 p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 ease-out">
        <div className="flex justify-center mb-6">
          <img
            src="student.png"
            alt="Nabin Karki"
            className="w-56 h-56 rounded-full shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 animate-textGlow">
          Welcome to My Portfolio
        </h1>
        <p className="mt-4 text-lg text-gray-800 leading-relaxed">
          Im Nabin Karki a passionate developer with skills in various
          technologies.
        </p>
        <a
          href="#projects"
          className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold text-lg rounded-full hover:shadow-2xl transition-transform transform hover:scale-105 hover:bg-opacity-90"
        >
          View My Work
        </a>
      </section>
    </div>
  );
};

export default Profile;
