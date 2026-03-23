import { Navbar_padding, Body_padding } from "./Homepage";
import Link from "next/link";

export default function Banner_Homepage() {
  return (
    <article
      style={{
        paddingTop: Navbar_padding,
        paddingLeft: Body_padding,
        paddingRight: Body_padding,
      }}
      className={` bg-linear-to-b from-purple-100 to-white text-center`}
    >
      <section className="aspect-32/5 mx-auto w-86.5 lg:w-3xl md:w-xl">
        {/* Header */}
        <h1
          style={{ fontSize: "clamp(30px, 30px + 0.5vw, 48px)" }}
          className="text-black font-medium"
        >
          Góc trưng bày truyện tranh
        </h1>
        {/* Description */}
        <p
          style={{ fontSize: "clamp(16px, 16px + 0.5vw, 20px)" }}
          className="text-gray-500"
        >
          Một bộ sưu tập truyện tranh được tuyển chọn kỹ lưỡng từ những tác phẩm
          yêu thích của chúng tôi, do bốn sinh viên đầy đam mê lựa chọn. Khám
          phá những câu chuyện truyền cảm hứng, khơi gợi suy nghĩ và mang lại
          giải trí.
        </p>
      </section>
      {/* Button Contain */}
      <div
        style={{ alignItems: "flex-start" }}
        className="flex flex-row justify-center gap-2 pt-4"
      >
        <Link
          href={"/Component/Bookspage"}
          style={{
            fontSize: "clamp(14px, 14px + 0.5vw, 16px)",
            aspectRatio: "122/44",
          }}
          className="w-fit flex justify-center items-center bg-[#4F39F6] px-3 rounded-md text-white font-medium cursor-pointer hover:bg-[#5546cc]"
        >
          Khám phá thêm
        </Link>
        <Link
          href={"/Component/Memberspage"}
          style={{
            fontSize: "clamp(14px, 14px + 0.5vw, 16px)",
            aspectRatio: "122/44",
          }}
          className="w-fit flex justify-center items-center bg-[#E5E7EB] px-3 rounded-md text-[#1E2939] font-medium cursor-pointer hover:bg-[#d5d5d8]"
        >
          Gặp gỡ đội ngũ
        </Link>
      </div>
    </article>
  );
}
