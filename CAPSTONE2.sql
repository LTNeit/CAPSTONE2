/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP TABLE IF EXISTS `Banner`;
DROP TABLE IF EXISTS `CumRap`;
DROP TABLE IF EXISTS `DatVe`;
DROP TABLE IF EXISTS `Ghe`;
DROP TABLE IF EXISTS `HeThongRap`;
DROP TABLE IF EXISTS `LichChieu`;
DROP TABLE IF EXISTS `NguoiDung`;
DROP TABLE IF EXISTS `Phim`;
DROP TABLE IF EXISTS `RapPhim`;
CREATE TABLE `Banner` (
  `ma_banner` int NOT NULL AUTO_INCREMENT,
  `ma_phim` int NOT NULL,
  `hinh_anh` varchar(500) NOT NULL,
  PRIMARY KEY (`ma_banner`),
  KEY `fk_banner_phim` (`ma_phim`),
  CONSTRAINT `fk_banner_phim` FOREIGN KEY (`ma_phim`) REFERENCES `Phim` (`ma_phim`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `CumRap` (
  `ma_cum_rap` int NOT NULL AUTO_INCREMENT,
  `ten_cum_rap` varchar(255) NOT NULL,
  `dia_chi` varchar(500) DEFAULT NULL,
  `ma_he_thong_rap` int NOT NULL,
  PRIMARY KEY (`ma_cum_rap`),
  KEY `fk_cumrap_hethongrap` (`ma_he_thong_rap`),
  CONSTRAINT `fk_cumrap_hethongrap` FOREIGN KEY (`ma_he_thong_rap`) REFERENCES `HeThongRap` (`ma_he_thong_rap`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `DatVe` (
  `tai_khoan` int NOT NULL,
  `ma_lich_chieu` int NOT NULL,
  `ma_ghe` int NOT NULL,
  PRIMARY KEY (`tai_khoan`,`ma_lich_chieu`,`ma_ghe`),
  KEY `fk_datve_lichchieu` (`ma_lich_chieu`),
  KEY `fk_datve_ghe` (`ma_ghe`),
  CONSTRAINT `fk_datve_ghe` FOREIGN KEY (`ma_ghe`) REFERENCES `Ghe` (`ma_ghe`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_datve_lichchieu` FOREIGN KEY (`ma_lich_chieu`) REFERENCES `LichChieu` (`ma_lich_chieu`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_datve_nguoidung` FOREIGN KEY (`tai_khoan`) REFERENCES `NguoiDung` (`tai_khoan`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Ghe` (
  `ma_ghe` int NOT NULL AUTO_INCREMENT,
  `ten_ghe` varchar(50) NOT NULL,
  `loai_ghe` varchar(50) DEFAULT NULL,
  `ma_rap` int NOT NULL,
  PRIMARY KEY (`ma_ghe`),
  KEY `fk_ghe_rapphim` (`ma_rap`),
  CONSTRAINT `fk_ghe_rapphim` FOREIGN KEY (`ma_rap`) REFERENCES `RapPhim` (`ma_rap`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `HeThongRap` (
  `ma_he_thong_rap` int NOT NULL AUTO_INCREMENT,
  `ten_he_thong_rap` varchar(255) NOT NULL,
  `logo` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`ma_he_thong_rap`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `LichChieu` (
  `ma_lich_chieu` int NOT NULL AUTO_INCREMENT,
  `ma_rap` int NOT NULL,
  `ma_phim` int NOT NULL,
  `ngay_gio_chieu` datetime NOT NULL,
  `gia_ve` int NOT NULL,
  PRIMARY KEY (`ma_lich_chieu`),
  KEY `fk_lichchieu_rapphim` (`ma_rap`),
  KEY `fk_lichchieu_phim` (`ma_phim`),
  CONSTRAINT `fk_lichchieu_phim` FOREIGN KEY (`ma_phim`) REFERENCES `Phim` (`ma_phim`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_lichchieu_rapphim` FOREIGN KEY (`ma_rap`) REFERENCES `RapPhim` (`ma_rap`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `NguoiDung` (
  `tai_khoan` int NOT NULL AUTO_INCREMENT,
  `ho_ten` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `so_dt` varchar(20) DEFAULT NULL,
  `mat_khau` varchar(255) NOT NULL,
  `loai_nguoi_dung` varchar(50) DEFAULT 'KhachHang',
  PRIMARY KEY (`tai_khoan`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Phim` (
  `ma_phim` int NOT NULL AUTO_INCREMENT,
  `ten_phim` varchar(255) NOT NULL,
  `trailer` varchar(500) DEFAULT NULL,
  `hinh_anh` varchar(500) DEFAULT NULL,
  `mo_ta` text,
  `ngay_khoi_chieu` date DEFAULT NULL,
  `danh_gia` int DEFAULT '0',
  `hot` tinyint(1) DEFAULT '0',
  `dang_chieu` tinyint(1) DEFAULT '0',
  `sap_chieu` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`ma_phim`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `RapPhim` (
  `ma_rap` int NOT NULL AUTO_INCREMENT,
  `ten_rap` varchar(255) NOT NULL,
  `ma_cum_rap` int NOT NULL,
  PRIMARY KEY (`ma_rap`),
  KEY `fk_rapphim_cumrap` (`ma_cum_rap`),
  CONSTRAINT `fk_rapphim_cumrap` FOREIGN KEY (`ma_cum_rap`) REFERENCES `CumRap` (`ma_cum_rap`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `Banner` (`ma_banner`, `ma_phim`, `hinh_anh`) VALUES
(1, 1, 'banner-avengers.jpg'),
(2, 2, 'banner-spiderman.jpg'),
(3, 3, 'banner-batman.jpg');
INSERT INTO `CumRap` (`ma_cum_rap`, `ten_cum_rap`, `dia_chi`, `ma_he_thong_rap`) VALUES
(1, 'CGV Vincom Center', '72 Le Thanh Ton, Quan 1, TP.HCM', 1),
(2, 'CGV Aeon Mall Tan Phu', '30 Tan Thang, Tan Phu, TP.HCM', 1),
(3, 'Lotte Cinema Nam Sai Gon', '469 Nguyen Huu Tho, Quan 7, TP.HCM', 2),
(4, 'Lotte Cinema Go Vap', '242 Nguyen Van Luong, Go Vap, TP.HCM', 2);
INSERT INTO `DatVe` (`tai_khoan`, `ma_lich_chieu`, `ma_ghe`) VALUES
(3, 10, 4);
INSERT INTO `Ghe` (`ma_ghe`, `ten_ghe`, `loai_ghe`, `ma_rap`) VALUES
(4, 'A01', 'Thuong', 1),
(5, 'A02', 'Thuong', 1),
(6, 'A03', 'Thuong', 1),
(7, 'A04', 'Thuong', 1),
(8, 'A05', 'Thuong', 1),
(9, 'B01', 'VIP', 1),
(10, 'B02', 'VIP', 1),
(11, 'B03', 'VIP', 1),
(12, 'B04', 'VIP', 1),
(13, 'B05', 'VIP', 1),
(14, 'A01', 'Thuong', 2),
(15, 'A02', 'Thuong', 2),
(16, 'A03', 'Thuong', 2),
(17, 'A04', 'Thuong', 2),
(18, 'A05', 'Thuong', 2),
(19, 'B01', 'VIP', 2),
(20, 'B02', 'VIP', 2),
(21, 'B03', 'VIP', 2),
(22, 'B04', 'VIP', 2),
(23, 'B05', 'VIP', 2),
(24, 'A01', 'Thuong', 3),
(25, 'A02', 'Thuong', 3),
(26, 'A03', 'Thuong', 3),
(27, 'A04', 'Thuong', 3),
(28, 'A05', 'Thuong', 3),
(29, 'B01', 'VIP', 3),
(30, 'B02', 'VIP', 3),
(31, 'B03', 'VIP', 3),
(32, 'B04', 'VIP', 3),
(33, 'B05', 'VIP', 3),
(34, 'A01', 'Thuong', 4),
(35, 'A02', 'Thuong', 4),
(36, 'A03', 'Thuong', 4),
(37, 'A04', 'Thuong', 4),
(38, 'A05', 'Thuong', 4),
(39, 'B01', 'VIP', 4),
(40, 'B02', 'VIP', 4),
(41, 'B03', 'VIP', 4),
(42, 'B04', 'VIP', 4),
(43, 'B05', 'VIP', 4),
(44, 'A01', 'Thuong', 5),
(45, 'A02', 'Thuong', 5),
(46, 'A03', 'Thuong', 5),
(47, 'A04', 'Thuong', 5),
(48, 'A05', 'Thuong', 5),
(49, 'B01', 'VIP', 5),
(50, 'B02', 'VIP', 5),
(51, 'B03', 'VIP', 5),
(52, 'B04', 'VIP', 5),
(53, 'B05', 'VIP', 5),
(54, 'A01', 'Thuong', 6),
(55, 'A02', 'Thuong', 6),
(56, 'A03', 'Thuong', 6),
(57, 'A04', 'Thuong', 6),
(58, 'A05', 'Thuong', 6),
(59, 'B01', 'VIP', 6),
(60, 'B02', 'VIP', 6),
(61, 'B03', 'VIP', 6),
(62, 'B04', 'VIP', 6),
(63, 'B05', 'VIP', 6),
(64, 'A01', 'Thuong', 7),
(65, 'A02', 'Thuong', 7),
(66, 'A03', 'Thuong', 7),
(67, 'A04', 'Thuong', 7),
(68, 'A05', 'Thuong', 7),
(69, 'B01', 'VIP', 7),
(70, 'B02', 'VIP', 7),
(71, 'B03', 'VIP', 7),
(72, 'B04', 'VIP', 7),
(73, 'B05', 'VIP', 7),
(74, 'A01', 'Thuong', 8),
(75, 'A02', 'Thuong', 8),
(76, 'A03', 'Thuong', 8),
(77, 'A04', 'Thuong', 8),
(78, 'A05', 'Thuong', 8),
(79, 'B01', 'VIP', 8),
(80, 'B02', 'VIP', 8),
(81, 'B03', 'VIP', 8),
(82, 'B04', 'VIP', 8),
(83, 'B05', 'VIP', 8);
INSERT INTO `HeThongRap` (`ma_he_thong_rap`, `ten_he_thong_rap`, `logo`) VALUES
(1, 'CGV', 'cgv.png'),
(2, 'Lotte Cinema', 'lotte.png');
INSERT INTO `LichChieu` (`ma_lich_chieu`, `ma_rap`, `ma_phim`, `ngay_gio_chieu`, `gia_ve`) VALUES
(2, 1, 1, '2026-08-22 09:00:00', 90000),
(3, 1, 1, '2026-08-22 13:00:00', 100000),
(4, 1, 2, '2026-08-22 16:00:00', 100000),
(5, 2, 3, '2026-08-22 10:00:00', 90000),
(7, 3, 1, '2026-08-23 09:30:00', 90000),
(8, 3, 2, '2026-08-23 14:00:00', 100000),
(10, 1, 1, '2026-09-20 12:30:00', 100000);
INSERT INTO `NguoiDung` (`tai_khoan`, `ho_ten`, `email`, `so_dt`, `mat_khau`, `loai_nguoi_dung`) VALUES
(3, 'Tiến Hồ Hoàng', 'tien@gmail.com', '090987654321', '$2b$10$GbNgYQHUks6dI.mvbv0aAe/XzffXKfigDN8I9km4lA1CnSorF0ME6', 'Admin'),
(4, 'Nguoi Dung Test', 'testuser@gmail.com', '0912345678', '$2b$10$LSNizqjobKacTO/ZHTSRMePVvBDcGcOfS6RlH7.PqR4qAqkyWj.Iq', 'KhachHang');
INSERT INTO `Phim` (`ma_phim`, `ten_phim`, `trailer`, `hinh_anh`, `mo_ta`, `ngay_khoi_chieu`, `danh_gia`, `hot`, `dang_chieu`, `sap_chieu`) VALUES
(1, 'Avengers Endgame 2', 'https://www.youtube.com/', 'avengers-endgame.jpg', 'Phim khoa học viễn tưởng', '2026-09-20', 5, 1, 0, 1),
(2, 'Spider-Man: No Way Home', 'https://www.youtube.com/watch?v=JfVOs4VSpmA', 'spiderman.jpg', 'Spider-Man đối mặt với những kẻ thù đến từ các vũ trụ khác.', '2026-08-05', 4, 1, 1, 0),
(3, 'The Batman', 'https://www.youtube.com/watch?v=mqqft2x_Aa4', 'the-batman.jpg', 'Batman điều tra những bí ẩn xảy ra tại Gotham.', '2026-08-10', 4, 0, 1, 0),
(8, 'Interstellar', 'https://www.youtube.com/', 'local-1787381020700-703590657.jpg', 'Phim khoa học viễn tưởng', '2026-09-20', 5, 1, 0, 0);
INSERT INTO `RapPhim` (`ma_rap`, `ten_rap`, `ma_cum_rap`) VALUES
(1, 'Rap 1', 1),
(2, 'Rap 2', 1),
(3, 'Rap 1', 2),
(4, 'Rap 2', 2),
(5, 'Rap 1', 3),
(6, 'Rap 2', 3),
(7, 'Rap 1', 4),
(8, 'Rap 2', 4);


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;