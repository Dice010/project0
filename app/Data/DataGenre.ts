export const Genres = {
  Detective: "Trinh thám",
  Crime: "Hình sự",
  Psychological_mystery: "Bí ẩn tâm lý",
  Isekai: "Dị giới",
  Cooking: "Ẩm thực",
  Slice_of_Life: "Đời thường",
  Science_Fiction: "Khoa học viễn tưởng",
  Comedy: "Hài hước",
  Family: "Gia đình",
  Slapstick_Comedy: "Hài hước kịch tính",
  Adventure: "Phiêu lưu",
  Children: "Thiếu nhi",
  Allegory: "Ngụ ngôn",
  Mecha: "Mecha",
  Military: "Quân sự",
  Action: "Hành động",
  Fantasy: "Giả tưởng",
  School: "Học đường",
  Romance: "Lãng mạn",
} as const;

export type Genrekey = keyof typeof Genres;
export type GenreValue = (typeof Genres)[Genrekey];
