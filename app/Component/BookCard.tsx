import { books, path } from "../Data/DataBook";
import Image from "next/image";
import Tag from "@/app/Component/TagGenres";

type BookCardProps = {
  id: number;
  isTagVisible: boolean;
};

export default function BookCard({ id, isTagVisible }: BookCardProps) {
  const book = books.find((b) => b.id === id);
  if (!book) {
    return <></>;
  }
  return (
    <div
      className="bg-white 
        rounded-lg 
        shadow-xl 
        overflow-hidden 
        text-black 
        cursor-pointer
        transition-transform 
        duration-300 
        ease-out
        hover:scale-105"
    >
      <Image
        src={book.coverImage ?? `${path}default.png`}
        alt={book.title || "Book Image"}
        width={300}
        height={300}
        className="aspect-2/3 w-full object-cover"
      />
      <div className="p-4">
        <h3
          style={{ fontSize: "clamp(14px, 14px + 0.5vw, 18px)" }}
          className="font-medium text-black"
        >
          {book.title}
        </h3>
        <p
          style={{ fontSize: "clamp(12px, 12px + 0.5 vw, 14px)" }}
          className="text-gray-500"
        >
          {book.author}
        </p>
        {isTagVisible ? (
          <div className="mt-2 flex flex-wrap gap-2 max-sm:hidden">
            {book.genre.map((g) => (
              <Tag key={g} name={g} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
