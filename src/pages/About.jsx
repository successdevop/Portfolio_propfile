import pics from "../assets/second.jpg";
function About() {
  return (
    <div className="border-t-4 border-t-[#e9b949] bg-[#fffaeb] py-[6rem]">
      <h1
        className={`relative mb-10 text-center font-Roboto text-[3rem] font-bold leading-3 tracking-[.25rem] after:absolute after:bottom-[-2rem] after:right-[50%] after:h-[.5rem] after:w-[10%] after:translate-x-[50%] after:bg-[#e9b949] after:content-[""] lg:mb-[5rem]`}
      >
        About Me
      </h1>
      <div className="mx-auto grid h-full max-w-[120rem] gap-[3rem] px-20 py-12 lg:grid-cols-[1fr_2fr] lg:items-center">
        <div className="lg:max-w-[30rem]">
          <img src={pics} alt="profile pics" />
        </div>
        <div>
          <p className=" mb-12 text-[1.8rem] text-[#617d98]">
            I am a frontend developer with expertise in Reactjs. I have
            experience in building scalable, secure and reliable web
            applications using various frameworks and technologies. I enjoy
            solving complex problems and learning new skills. I am passionate
            about creating high-quality code that follows best practices and
            industry standards. I am always looking for new challenges and
            opportunities to grow as a developer.
          </p>
          <p className="text-[1.8rem] text-[#617d98]">
            I've worked on a variety of projects over the years and I'm proud of
            the progress I've made. Collaborating with others is a great way to
            learn and grow, and I'm always open to new ideas and feedback.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
