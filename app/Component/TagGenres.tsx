import { Genrekey, Genres } from "../Data/DataGenre";

export default function Tag({ name }: { name: Genrekey }) {
  return (
    <div
      style={{ fontSize: "clamp(12px, 12px + 0.5vw, 14px)" }}
      className="inline-block w-fit px-2 py-1 bg-[#EEF2FF] rounded-full text-[#4F39F6]"
    >
      {Genres[name]}
    </div>
  );
}
