/* eslint-disable react-refresh/only-export-components */
import { Navigate, useParams } from "react-router-dom";
import data from "../../../data/entries.json";
import { Title } from "../ui/title";
import { Parallax } from "../ui/parallax";
import { ArrowLeft } from "lucide-react";
import { Paragraph } from "../ui/paragraph";
import transition from "../ui/transition.jsx";

const Detail = () => {
  const params = useParams();

  const entry = data.find((item) => item.home.path == params.slug);

  if (!entry) return <Navigate to="/" replace />;

  const filtered = entry.detail;

  return (
    <main className="space-y-64">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <a href="/" className="flex gap-2 font-mono">
          <ArrowLeft /> Back
        </a>
        <div className="space-y-10">
          <Title
            value={filtered.title}
            className="text-7xl md:text-9xl font-primary"
          />
          <a
            href={filtered.button.href}
            className="px-5 py-3 border flex items-center gap-3 rounded-full font-mono font-medium w-fit hover:bg-blue-600 hover:text-white bg-white relative z-10"
          >
            <img src={filtered.button.logo} className="w-10 object-cover" />
            View Site
            <span className="bg-green-500 size-3 relative">
              <span className="absolute bg-green-500 animate-ping size-3" />
            </span>
          </a>
        </div>
        {filtered.images.map((image, i) => (
          <Parallax outputRange={[`${i * 12}rem`, `${i}rem`]}>
            <img src={image} />
          </Parallax>
        ))}
      </section>
      <Paragraph
        className="text-5xl md:text-7xl flex flex-wrap leading-[1] font-medium"
        value={filtered.heading}
        offset={["start 0.9", "start 0.5"]}
      />
      <section>
        <div className="flex justify-between gap-16">
          <h1 className="text-4xl flex-3/4 leading-snug">
            {filtered.paragraph}
          </h1>
          <p className="flex-1/4 font-mono uppercase tracking-tight text-sm">
            {filtered.subparagraph}
          </p>
        </div>
        <Parallax outputRange={["4rem", "10rem"]}>
          <img src={filtered.grid} className="w-full" />
        </Parallax>
      </section>
    </main>
  );
};

export default (props) => {
  const params = useParams();
  const entry = data.find((item) => item.home.path == params.slug);

  if (!entry) return <Navigate to="/" replace />;

  const Wrapped = transition(Detail, entry.detail.transition);
  return <Wrapped {...props} />;
};
