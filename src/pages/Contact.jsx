function Contact() {
  return (
    <div>
      <div className="border-t-[.4rem] border-t-[#e9b949] bg-[#fffaeb] px-[4rem] py-[10rem]">
        <h4
          className={`relative text-center font-Roboto text-[3rem] font-bold leading-[1.25rem] tracking-[.25rem] after:absolute after:bottom-[-3rem] after:right-[50%] after:h-[.5rem] after:w-[20%] after:translate-x-[50%] after:bg-[#e9b949] after:content-[""]`}
        >
          Contact Details
        </h4>
        <p className="mt-[8rem] text-center text-[1.8rem] text-[#617d98]">
          If you are looking to get ahold of me, you can send me an email at
          <br />
          <span className="text-[2rem] font-bold text-[#e9b949] hover:text-[2.2rem] hover:text-[#102a42]">
            successraphael28@gmail.com
          </span>
        </p>
        <p className="mt-[4rem] text-center text-[1.8rem] text-[#617d98]">
          You can also reach me on my cell phone at
          <br />
          <span className="text-[2rem] font-bold text-[#e9b949] hover:text-[2.2rem] hover:text-[#102a42]">
            +2348139111114
          </span>
        </p>
      </div>
    </div>
  );
}

export default Contact;
