import { BadgeCheck } from "lucide-react";

function LinkedIn() {
  return (
    <div className="max-w-xs bg-gradient-to-tr from-white to-transparent overflow-hidden h-fit sm:-skew-1">
      <div className="relative">
        <img src="/bg.jpeg" />
        <img
          src="/me.jpeg"
          className="absolute left-6 -bottom-12 w-24 aspect-square rounded-full border-4 border-white"
        />
      </div>
      <div className="pt-14 px-6 pb-6 space-y-1">
        <h1 className="text-xl font-semibold flex items-center gap-2">
          Nathan Limahardja{" "}
          <BadgeCheck className="w-4 h-4 fill-blue-500 text-white" />
        </h1>
        <p className="leading-tight text-sm">
          Founder @fysite.id | AI Instructor @dicoding @duniacoding
        </p>
        <span className="text-xs text-neutral-600">
          Singapore &bull; Rust, Go, Typescript 🚀
        </span>
        <a
          href="https://www.linkedin.com/in/nathan-limahardja"
          className="px-5 py-3 border flex items-center gap-3 rounded-full font-mono font-medium w-fit hover:bg-blue-600 hover:text-white relative z-10 bg-white mt-6"
        >
          <img src="me.jpg" className="size-8 rounded-full" />
          LinkedIn
          <span className="bg-green-500 size-3 relative">
            <span className="absolute bg-green-500 animate-ping size-3" />
          </span>
        </a>
      </div>
    </div>
  );
}

export default LinkedIn;
