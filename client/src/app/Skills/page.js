import React from 'react'

const Skills = () => {
  return (
    <div>
      <section className="text-center mt-6 w-full max-w-3xl bg-gradient-to-r from-blue-50 to-blue-200 p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 ease-out mx-auto">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 mb-4">
          Skills
        </h2>
        <ul className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {[
            "JavaScript",
            "React",
            "Node.js",
            "CSS",
            "HTML",
            "C++",
            "C",
            "GitHub",
            "Flutter",
          ].map((skill) => (
            <li
              key={skill}
              className="flex flex-col items-center text-xl text-gray-700 hover:text-blue-600"
            >
              <img
                src={`${skill.toLowerCase()}.svg`}
                alt={skill}
                className="w-16 h-16 mb-2 transition-transform duration-200 ease-in-out hover:scale-110"
              />
              <span className="text-center">{skill}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Skills