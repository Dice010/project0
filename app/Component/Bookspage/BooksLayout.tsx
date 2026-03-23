import { ReactNode } from "react";

type ProbBookLayout = {
    children: ReactNode
}

export default function BookLayout ({children} : ProbBookLayout) {
    return (
        <section className="bg-white px-5 pt-10 lg:px-50 md:pt-20"> {/* nhớ set padding top và px */}
            <h1 style={{fontSize: "clamp(30px, 30px + 0.5vw, 36px)"}} className="font-medium text-black">Bộ Sưu Tập Truyện Tranh</h1>
            <p style={{fontSize:"clamp(14px, 14px + 0.5vw, 16px)"}} className="text-[#4A5565] pb-10">Khám phá bộ sưu tập đầy đủ gồm 12 cuốn truyện tranh được chọn lọc kỹ lưỡng của chúng tôi</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 md:gap-10">
                {children}
            </div>
        </section>
    )
}