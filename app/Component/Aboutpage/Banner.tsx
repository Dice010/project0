import Link from "next/link";

export default function Banner() {
  return (
    <section className="rounded-xl text-center flex flex-col justify-center items-center gap-2 bg-linear-to-l from-purple-100 to-orange-100 py-10 px-2 lg:px-75 mt-30 mb-20">
      <h3
        style={{ fontSize: "clamp(24px, 24px + 0.5vw, 30px)" }}
        className="text-black font-medium"
      >
        Khám Phá Ngay
      </h3>
      <p
        style={{ fontSize: "clamp(14px, 14px + 0.5vw, 16px)" }}
        className="text-[#4A5565]"
      >
        Khám phá những tựa truyện tranh đã truyền cảm hứng cho chúng tôi và tìm
        hiểu thêm về các thành viên đã lựa chọn chúng
      </p>
      <div className="flex flex-row justify-center gap-2 pt-4">
        <Link
          className="aspect-123/44 w-fit flex justify-center items-center bg-[#4F39F6] px-3 rounded-md text-white font-medium cursor-pointer hover:bg-[#5546cc]"
          href={"/Component/Bookspage"}
          style={{ fontSize: "clamp(14px, 14px + 0.5vw, 16px)" }}
        >
          Khám phá thêm
        </Link>
        <Link
          className="aspect-122/44 w-fit flex justify-center items-center bg-[#E5E7EB] px-3 rounded-md text-[#1E2939] font-medium cursor-pointer hover:bg-[#d5d5d8]"
          href={"/Component/Memberspage"}
          style={{ fontSize: "clamp(14px, 14px + 0.5vw, 16px)" }}
        >
          Gặp gỡ đội ngũ
        </Link>
      </div>
    </section>
  );
}
