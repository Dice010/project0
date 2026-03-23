import BoxComic from "./BoxComic";
import BoxMember from "./BoxMembers";

export default function GridBox() {
  return (
    <section className="w-full flex items-center justify-center flex-wrap gap-8 mt-20 mb-20 px-5">
      <BoxComic />
      <BoxMember />
    </section>
  );
}