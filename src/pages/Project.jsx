import pics from "../assets/s7.png";
import { FaHome } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

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
        <article className="overflow-hidden rounded-lg bg-[#f1f5f8]">
          <div className="relative">
            <img
              src={pics}
              alt="single project"
              className="overflow-hidden rounded-t-lg"
            />
            <a
              href={""}
              className="absolute bottom-0 left-[50%] grid h-[5rem] w-[5rem] translate-x-[-50%] translate-y-[50%] place-items-center rounded-full border-[.375rem] border-solid border-[#f1f5f8] bg-[#e9b949] text-[1.7rem] text-[#513c06]"
            >
              <FaHome />
            </a>
          </div>
          <div className="px-6 py-8">
            <h4 className="font-Roboto text-[1.6rem] font-bold capitalize tracking-[.25rem] text-[#102a42]">
              project name
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
                <a
                  href={""}
                  className="text-[1.4rem] capitalize text-[#e9b949] transition-[all_0.3s_linear] group-hover:text-[#513c06]"
                >
                  visit website
                </a>
              </div>
            </div>
          </div>
        </article>
        {/*  */}
        <article className="overflow-hidden rounded-lg bg-[#f1f5f8]">
          <div className="relative">
            <img
              src={pics}
              alt="single project"
              className="overflow-hidden rounded-t-lg"
            />
            <a
              href={""}
              className="absolute bottom-0 left-[50%] grid h-[5rem] w-[5rem] translate-x-[-50%] translate-y-[50%] place-items-center rounded-full border-[.375rem] border-solid border-[#f1f5f8] bg-[#e9b949] text-[1.7rem] text-[#513c06]"
            >
              <FaHome />
            </a>
          </div>
          <div className="px-6 py-8">
            <h4 className="font-Roboto text-[1.6rem] font-bold capitalize tracking-[.25rem] text-[#102a42]">
              project name
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
                <a
                  href={""}
                  className="text-[1.4rem] capitalize text-[#e9b949] transition-[all_0.3s_linear] group-hover:text-[#513c06]"
                >
                  visit website
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Project;
