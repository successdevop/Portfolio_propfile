import { FaHome } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { projects } from "../assets/projectData";
import { Link } from "react-router-dom";

function Project() {
  return (
    <div>
      <div className="bg-[#fffaeb] py-6">
        <h1
          className={`relative my-[10rem] text-center font-Roboto text-[4rem] font-bold leading-[1.25rem] tracking-[.25rem] after:absolute after:bottom-[-3.2rem] after:right-[50%] after:h-[.5rem] after:w-[5%] after:translate-x-[50%] after:bg-[#e9b949] after:content-[""]`}
        >
          Projects
        </h1>
      </div>

      <div className="projects-page-center mx-auto max-w-[115rem] bg-white py-[6rem]">
        {projects.map((project) => (
          <article
            className="overflow-hidden rounded-lg bg-[#f1f5f8]"
            key={project.projectImage}
          >
            <div className="relative">
              <img
                src={project.projectImage}
                alt="single project"
                className="overflow-hidden rounded-t-lg"
              />
              <Link
                to={project.projectWebLink}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-0 left-[50%] grid h-[5rem] w-[5rem] translate-x-[-50%] translate-y-[50%] place-items-center rounded-full border-[.375rem] border-solid border-[#f1f5f8] bg-[#e9b949] text-[1.7rem] text-[#513c06]"
              >
                <FaHome />
              </Link>
            </div>
            <div className="px-6 py-8">
              <h4 className="mt-3 font-Roboto text-[1.6rem] font-bold capitalize tracking-[.25rem] text-[#102a42]">
                {project.projectName}
              </h4>
              <p className="my-[1.5rem] text-[1.4rem] text-[#617d98]">
                Web development
              </p>
              <div className="grid text-[#e9b949]">
                <div className="group flex cursor-pointer items-center gap-2 justify-self-end">
                  <span>
                    <TbWorldWww
                      size={"2rem"}
                      className="group-hover:text-[#513c06]"
                    />
                  </span>
                  <Link
                    to={project.projectWebLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[1.4rem] capitalize text-[#e9b949] transition-[all_0.3s_linear] group-hover:text-[#513c06]"
                  >
                    visit website
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Project;
