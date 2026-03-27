import Footer from "@/app/Component/Footer_Homepage";
import Navbar from "@/app/Component/Navbar";
import Link from "next/link";
import Image from "next/image";
import { members } from "@/app/Data/DataMember";
import TagRole from "@/app/Component/TagRole";
import TagGenres from "@/app/Component/TagGenres";
import BookCard from "@/app/Component/BookCard";

function clamp(min: number, max: number) {
  return `clamp(${min}px, ${min}px + 0.5vw, ${max}px)`;
}

type props = {
  params: { idMember: number };
};

export default async function Member({ params }: props) {
  const { idMember } = await params;
  return (
    <div className="bg-white">
      <Navbar />
      <div className="p-4">
        {/* Padding & Margin */}
        <Link
          href="/Component/Memberspage"
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
          Trở về đội chúng tôi
        </Link>
        <div className="flex flex-col pt-10 px-4 pb-40 lg:pb-80 lg:px-80">
          {/* Main Container */}
          <div className="flex flex-row max-sm:flex-wrap justify-center items-center gap-4">
            {/* Member */}
            <Image
              src={members[idMember].imgURL}
              alt={members[idMember].name || members[idMember].name + " Image"}
              width={200}
              height={200}
              className="aspect-square object-cover rounded-full"
            />
            <div className="flex flex-col justify-center items-start shadow-xl p-4 rounded-xl gap-2">
              {/* Member Info */}
              <h3
                style={{ fontSize: clamp(20, 24) }}
                className="font-medium text-black"
              >
                {members[idMember].name}
              </h3>
              <p style={{ fontSize: clamp(14, 16) }} className="text-gray-500">
                {members[idMember].introduction}
              </p>
              <div>
                {/* Favor Container */}
                <span
                  style={{ fontSize: clamp(14, 16) }}
                  className="text-gray-500 pb-2"
                >
                  Thể loại yêu thích:{" "}
                </span>
                <div className="mt-1 flex flex-wrap justify-start items-center gap-2 pb-2">
                  {members[idMember].favoriteGenres.map((g) => (
                    <TagGenres key={g} name={g} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4 flex flex-col gap-2.5">
            {/* Contri */}
            <h2
              style={{ fontSize: clamp(24, 26) }}
              className="font-medium text-black"
            >
              Đóng góp của bản thân
            </h2>
            <div className="flex flex-col justify-center items-start shadow-xl p-4 rounded-xl gap-2">
              {/* Member Contri */}
              <p style={{ fontSize: clamp(14, 16) }} className="text-gray-500">
                {members[idMember].contributions}
              </p>
              <div className="mt-2 flex flex-wrap justify-start items-center gap-2 pb-2">
                {members[idMember].role.map((g) => (
                  <TagRole key={g} keyCode={g} />
                ))}
              </div>
            </div>
          </div>
          <div className="pt-4 flex flex-col gap-2.5">
            {/* Comic */}
            <div className="flex flex-row justify-between items-center flex-wrap">
              {/* Comic Section Title */}
              <h2
                style={{ fontSize: clamp(24, 26) }}
                className="font-medium text-black"
              >
                Sách bản thân đã lựa chọn
              </h2>
              <Link
                href={"/Component/Bookspage"}
                className="inline-flex items-center gap-2 text-[#4F39F6] cursor-pointer lg:ml-auto md:ml-auto hover:underline"
              >
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
            <section className="grid max-sm:grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {members[idMember].selectedBookIds.map((id) => (
                <Link key={id} href={`/Component/Product/${id}`}>
                  <BookCard key={id} id={id} isTagVisible={true} />
                </Link>
              ))}
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
