import { JSX } from "react";

type IconsType = (prob: { class_name?: string }) => JSX.Element;
type FeatureItem = {
  id: number;
  Icon: IconsType;
  title: string;
  description: string;
};

const Icons: Record<string, IconsType> = {
  Book: ({ class_name }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={class_name ?? "size-6"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
      />
    </svg>
  ),
  People: ({ class_name }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={class_name ?? "size-6"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      />
    </svg>
  ),
  Star: ({ class_name }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={class_name ?? "size-6"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  ),
};

export const features: FeatureItem[] = [
  {
    id: 0,
    Icon: Icons["Book"],
    title: "Bộ Sưu Tập Chọn Lọc",
    description: "12 tựa truyện được chọn lọc kỹ, đa dạng thể loại và phong cách",
  },
  {
    id: 1,
    Icon: Icons["People"],
    title: "Tinh Thần Đồng Đội",
    description: "Bốn thành viên, bốn phong cách khác nhau",
  },
  {
    id: 2,
    Icon: Icons["Star"],
    title: "Nội Dung Chất Lượng",
    description: "Thông tin chi tiết về từng tựa truyện",
  },
];

type FeatureCardProps = {
  feature: FeatureItem;
};

export default function Box({ feature }: FeatureCardProps) {
  const { id, Icon, title, description } = feature;
  return (
    <div
      key={id}
      className="flex flex-col justify-center gap-1 items-center text-center shadow-lg rounded-xl p-4 bg-white"
    >
      <Icon class_name="size-8 aspect-square rounded-full p-2 bg-[#FFEDD4] text-[#F54900]" />
      <h3
        style={{ fontSize: "clamp(16px, 16px + 0.5vw, 18px)" }}
        className="text-black font-medium"
      >
        {title}
      </h3>
      <p
        style={{ fontSize: "clamp(12px, 12px + 0.5vw, 14px)" }}
        className="text-[#4A5565]"
      >
        {description}
      </p>
    </div>
  );
}
