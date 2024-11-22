import Head from "next/head";
import Header from "../header/page";

const About = () => {
  return (
    <>
      <Head>
        <title>About Me - My Portfolio</title>
        <meta
          name="description"
          content="Learn more about me, my skills, and my experience."
        />
      </Head>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-purple-600 via-blue-600 to-indigo-800 text-white">
        <div className="container mx-auto px-6 py-10">
          {/* About Me Section */}
          <section className="text-center">
            <h1 className="text-5xl font-extrabold mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Hi I m a passionate <span className="text-yellow-300">Web Developer</span> specializing in 
              <span className="text-yellow-300"> TypeScript</span> and <span className="text-yellow-300">Next.js</span>.
            </p>
          </section>

          {/* Skills and Experience Section */}
          <section className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Skills Section */}
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-md">
              <h2 className="text-3xl font-bold mb-4 text-yellow-300">
                Skills
              </h2>
              <ul className="list-disc list-inside text-gray-200 text-lg">
                <li>Web Development (HTML, CSS, JavaScript, TypeScript)</li>
                <li>Frameworks (React.js, Next.js)</li>
                <li>Styling (TailwindCSS, ShadCN UI)</li>
                <li>Backend (Node.js)</li>
              </ul>
            </div>

            {/* Experience Section */}
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-md">
              <h2 className="text-3xl font-bold mb-4 text-yellow-300">
                Experience
              </h2>
              <p className="text-gray-200 text-lg leading-relaxed">
                I have <span className="text-yellow-300">1 year</span> of experience building professional
                websites and web applications. My focus is on creating responsive,
                user-friendly, and efficient solutions that deliver value to clients.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
