import Image from "next/image";
import { books, path } from "@/app/Data/DataBook";
import Link from "next/link";

type prob = {
  id: number;
};

export default function BannerCarousel({ id }: prob) {
  const book = books.find((b) => b.id === id);
  if (!book) {
    return <></>;
  }
  return (
    <div className="w-full aspect-4/3 md:aspect-video lg:aspect-16/7 relative overflow-hidden">
      <Image
        fill={true}
        src={book.bannerImage ?? `${path}default_Banner.png`}
        alt={book.title || "Book Image"}
      />
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        className="absolute inset-0 bg-black flex flex-col justify-center items-start p-5 lg:p-20"
      >
        <h2
          style={{ fontSize: "clamp(24px, 24px + 1vw, 54px)" }}
          className="text-white font-bold mb-3 mt-34 lg:mt-155 md:mt-75"
        >
          {book.title}
        </h2>
        <Link href={`/Component/Product/${id}`}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            fontSize: "clamp(12px, 12px + 0.5vw, 24px)",
          }}
          className="w-fit border-white font-bold border-3 text-white px-2 py-1 md:px-6 md:py-2 lg:px-6 lg:py-2 rounded-md cursor-pointer"
        >
          Xem ngay
        </Link>
      </div>
    </div>
  );
}
