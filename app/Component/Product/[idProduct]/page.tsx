import Footer from "@/app/Component/Footer_Homepage";
import Navbar from "@/app/Component/Navbar";
import Link from "next/link";
import Image from "next/image";
import { books, path } from "@/app/Data/DataBook";
import Tag from "@/app/Component/TagGenres";
import { members } from "@/app/Data/DataMember";

type Props = {
  params: { idProduct: number };
};

const clamp = (min: number, max: number) =>
  `clamp(${min}px, ${min}px + 0.5vw, ${max}px)`;

export default async function Product({ params }: Props) {
  const { idProduct } = await params;
  const book = books[idProduct];
  const member = members[book.selectedbyId];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-center px-5 py-10">
        <div className="flex flex-col w-full max-w-5xl">
          <Link
            href="/Component/Bookspage"
            className="inline-flex items-center gap-2 text-[#4A5565] hover:underline"
          >
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
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Trở về bộ sưu tập
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-10 pt-5">
            <Image
              src={book.coverImage ?? `${path}default.png`}
              alt={book.title || "Book Image"}
              width={200}
              height={300}
              className="w-[60vw] max-w-70 aspect-2/3 object-cover rounded-xl border border-black shadow-2xs"
            />

            <div className="flex flex-col gap-4 max-w-lg">
              <div className="flex flex-wrap gap-2">
                {book.genre.map((g) => (
                  <Tag key={g} name={g} />
                ))}
              </div>

              <div className="flex flex-col gap-1">
                <h1
                  style={{ fontSize: clamp(28, 36) }}
                  className="font-medium text-black"
                >
                  {book.title}
                </h1>
                <p
                  style={{ fontSize: clamp(18, 20) }}
                  className="text-[#4A5565]"
                >
                  Tác giả {book.author}
                </p>
                <p
                  style={{ fontSize: clamp(14, 16) }}
                  className="text-[#4A5565] mt-2"
                >
                  {book.summary}
                </p>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl shadow-xl bg-white">
                <Image
                  src={member.imgURL}
                  alt={`${member.name} Image`}
                  width={40}
                  height={40}
                  className="size-10 object-cover rounded-full"
                />
                <div>
                  <p className="text-[14px] text-[#4A5565]">Được chọn bởi</p>
                  <p className="text-[16px] text-black">{member.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
