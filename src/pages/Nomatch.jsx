import { Link } from "react-router-dom";

function Nomatch() {
  return (
    <div className="border-t-[1rem] border-t-[#f1f5f8] bg-[#fffaeb] px-8 py-[20%] text-center text-[2rem] capitalize text-[#e9b949]">
      No route match this part
      <Link
        to="/"
        className="mt-[5rem] inline-block rounded-3xl bg-[#e9b949] px-6 py-3 text-[#102a42]"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default Nomatch;
