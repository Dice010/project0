import Image from "next/image";
import Link from "next/link";

export default function BoxComic() {
  return (
    <section
      className="bg-white 
        rounded-lg 
        shadow-md 
        overflow-hidden 
        text-black
        text-wrap
        
        p-5
        flex
        flex-col
        items-center
        justify-center
        gap-2
        w-148
        
        cursor-pointer
        transition-transform 
        duration-300 
        ease-out
        hover:scale-105"
    >
      <div className="w-fit bg-[#E0E7FF] p-2 rounded-full">
        <Image
          src={"/img/Icon/BooksIcon.png"}
          alt="Books Icon"
          width={32}
          height={32}
          className="w-8 h-8"
        />
      </div>
      <h3 style={{fontSize:"clamp(18px, 18px + 0.5vw, 20px)"}} className="text-[#101828] font-medium">12 Tác Phẩm Truyện Tranh</h3>
      <p style={{fontSize:"clamp(14px, 14px + 0.5vw, 16px)"}} className="text-center text-[#4A5565]"> Những tựa truyện được tuyển chọn kỹ lưỡng từ nhiều thể loại khác nhau.</p>
      <div style={{fontSize:"clamp(14px, 14px + 0.5vw, 16px)"}} className="inline-flex items-center gap-2 text-[#4F39F6] cursor-pointer hover:underline">
          <Link href={"/Component/Bookspage"}>Xem thêm</Link>
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
        </div>
    </section>
  );
}
