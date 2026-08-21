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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `CumRap` (
  `ma_cum_rap` int NOT NULL AUTO_INCREMENT,
  `ten_cum_rap` varchar(255) NOT NULL,
  `dia_chi` varchar(500) DEFAULT NULL,
  `ma_he_thong_rap` int NOT NULL,
  PRIMARY KEY (`ma_cum_rap`),
  KEY `fk_cumrap_hethongrap` (`ma_he_thong_rap`),
  CONSTRAINT `fk_cumrap_hethongrap` FOREIGN KEY (`ma_he_thong_rap`) REFERENCES `HeThongRap` (`ma_he_thong_rap`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `HeThongRap` (
  `ma_he_thong_rap` int NOT NULL AUTO_INCREMENT,
  `ten_he_thong_rap` varchar(255) NOT NULL,
  `logo` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`ma_he_thong_rap`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `NguoiDung` (
  `tai_khoan` int NOT NULL AUTO_INCREMENT,
  `ho_ten` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `so_dt` varchar(20) DEFAULT NULL,
  `mat_khau` varchar(255) NOT NULL,
  `loai_nguoi_dung` varchar(50) DEFAULT 'KhachHang',
  PRIMARY KEY (`tai_khoan`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `RapPhim` (
  `ma_rap` int NOT NULL AUTO_INCREMENT,
  `ten_rap` varchar(255) NOT NULL,
  `ma_cum_rap` int NOT NULL,
  PRIMARY KEY (`ma_rap`),
  KEY `fk_rapphim_cumrap` (`ma_cum_rap`),
  CONSTRAINT `fk_rapphim_cumrap` FOREIGN KEY (`ma_cum_rap`) REFERENCES `CumRap` (`ma_cum_rap`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;