import { Genrekey } from "./DataGenre";

export const MemberRole = {
  Ld: "Leader",
  FE: "Frontend Developer",
  BE: "Backend Developer",
  Ds: "Designer",
  TT: "Tester",
  Doc: "Documenter",
  Ct: "Content Creator",
} as const;

export type MemberRoleKey = keyof typeof MemberRole;
export type MemberRoleValue = (typeof MemberRole)[MemberRoleKey];

const path = "/img/Members/default_profile.png";

export type Member = {
  id: number;

  imgURL: string;

  name: string;

  role: MemberRoleKey[];

  favoriteGenres: Genrekey[];

  introduction: string;

  contributions: string[];

  selectedBookIds: [number, number, number];
};

export const members: Member[] = [
  {
    id: 0,
    imgURL: path,
    name: "Phạm Quốc Toàn",
    role: ["TT", "Doc", "Ct"],
    favoriteGenres: ["Detective", "Cooking", "Children"],
    introduction:
      "Xin chào, mình là Phạm Quốc Toàn. Mình yêu thích những câu chuyện mang yếu tố trinh thám, ẩm thực và thiếu nhi, đặc biệt là các nội dung nhẹ nhàng nhưng có chiều sâu. Trong dự án, mình luôn cố gắng làm việc cẩn thận, rõ ràng và hỗ trợ nhóm hoàn thiện sản phẩm một cách chỉn chu nhất.",
    contributions: [
      "Tổng hợp và biên soạn nội dung tài liệu dự án. ",
      "Hỗ trợ xây dựng ý tưởng và cấu trúc tổng thể. ",
      "Đóng góp nội dung và kiểm tra tính nhất quán của dữ liệu. ",
    ],
    selectedBookIds: [0, 1, 2],
  },
  {
    id: 1,
    imgURL: path,
    name: "Nguyễn Trí",
    role: ["TT", "Doc", "Ct"],
    favoriteGenres: ["Children", "Comedy", "Allegory"],
    introduction:
      "Xin chào, mình là Nguyễn Trí. Mình yêu thích những tác phẩm mang màu sắc hài hước, ngụ ngôn và dành cho thiếu nhi, nơi các câu chuyện đơn giản nhưng truyền tải được nhiều ý nghĩa. Trong quá trình làm dự án, mình chú trọng đến sự dễ hiểu, gần gũi và trải nghiệm tổng thể của người dùng.",
    contributions: [
      "Đóng góp ý tưởng nội dung và hướng triển khai chủ đề. ",
      "Hỗ trợ viết mô tả và tóm tắt cho các mục dữ liệu. ",
      "Kiểm tra nội dung để đảm bảo tính dễ hiểu và phù hợp người dùng. ",
    ],
    selectedBookIds: [3, 4, 5],
  },
  {
    id: 2,
    imgURL: path,
    name: "Võ Hoàng Thanh Phúc",
    role: ["TT", "Doc", "Ct"],
    favoriteGenres: ["Adventure", "Action", "Mecha"],
    introduction:
      "Xin chào, mình là Võ Hoàng Thanh Phúc. Mình yêu thích những câu chuyện phiêu lưu, hành động và mecha, đặc biệt là các tác phẩm có nhịp nhanh và thế giới rộng lớn. Trong dự án, mình luôn sẵn sàng tham gia vào những phần việc cần tư duy logic và đóng góp vào các ý tưởng mang tính hệ thống.",
    contributions: [
      "Tham gia xây dựng ý tưởng và cấu trúc chức năng. ",
      "Hỗ trợ kiểm tra luồng dữ liệu và logic hiển thị. ",
      "Đóng góp góc nhìn về nội dung hành động và phiêu lưu. ",
    ],
    selectedBookIds: [6, 7, 8],
  },
  {
    id: 3,
    imgURL: path,
    name: "Thái Hoằng Nam",
    role: ["Ld", "FE", "BE", "Ds", "Ct"],
    favoriteGenres: ["Romance", "Comedy"],
    introduction:
      "Xin chào, tôi là Thái Hoằng Nam, một người đam mê công nghệ và yêu thích việc tạo ra những sản phẩm sáng tạo. Với vai trò là Leader, tôi cố gắng dẫn dắt nhóm của mình đạt được những mục tiêu chung và cố gắng tạo ra những trải nghiệm tuyệt vời cho người dùng.",
    contributions: [
      "Dẫn dắt nhóm phát triển dự án. ",
      "Thiết kế giao diện người dùng. ",
      "Phát triển cả frontend và backend. ",
    ],
    selectedBookIds: [9, 10, 11],
  },
];
