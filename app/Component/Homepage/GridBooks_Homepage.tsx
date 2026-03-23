import BookCard from "../BookCard";
import Link from "next/link";

const ids: number[] = [1, 7, 9, 11]; // Example book IDs to display in the grid, you can replace these with actual IDs from your data

export default function GridBooks() {
  return (
    <section className={`bg-white text-black pt-30 px-5 lg:px-50`}>
      {/* Container for header */}
      <div className="lg:flex lg:flex-row md:flex md:flex-row">
        {/* Header */}
        <div>
          <h2
            style={{ fontSize: "clamp(24px, 24px + 0.5vw, 30px)" }}
            className="font-medium "
          >
            Truyện tranh nổi bật
          </h2>
          <p
            style={{ fontSize: "clamp(14px, 14px + 0.5vw, 16px)" }}
            className="text-gray-500"
          >
            Khám phá lựa chọn hàng đầu
          </p>
        </div>
        {/* View All Button */}
        <Link href={"/Component/Bookspage"} className="inline-flex items-center gap-2 text-[#4F39F6] cursor-pointer lg:ml-auto md:ml-auto hover:underline">
          <div>Xem tất cả</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
      <section className="grid grid-cols-2 grids-rows-2 gap-4 lg:grid-cols-4 lg:grid-rows-1">
        {ids.map((id) => (
          <Link key={id} href={`/Component/Product/${id}`}>
            <BookCard key={id} id={id} isTagVisible={true} />
          </Link>
        ))}
      </section>
    </section>
  );
}
