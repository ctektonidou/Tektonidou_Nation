-- MariaDB dump 10.19  Distrib 10.10.2-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: nation
-- ------------------------------------------------------
-- Server version	10.10.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `region_areas`
--

DROP TABLE IF EXISTS `region_areas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `region_areas` (
  `region_name` varchar(100) NOT NULL,
  `region_area` decimal(15,2) NOT NULL,
  PRIMARY KEY (`region_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `region_areas`
--

LOCK TABLES `region_areas` WRITE;
/*!40000 ALTER TABLE `region_areas` DISABLE KEYS */;
INSERT INTO `region_areas` VALUES
('Antarctica',13132101.00),
('Australia and New Zealand',8011939.00),
('Baltic Countries',175117.00),
('British Islands',313173.00),
('Caribbean',234423.00),
('Central Africa',6612667.00),
('Central America',2479532.00),
('Eastern Africa',6299891.00),
('Eastern Asia',11774482.00),
('Eastern Europe',18814094.00),
('Melanesia',540774.00),
('Micronesia',3102.00),
('Micronesia/Caribbean',16.00),
('Middle East',4820592.00),
('Nordic Countries',1321901.00),
('North America',21500515.00),
('Northern Africa',8524703.00),
('Polynesia',8463.00),
('South America',17864926.00),
('Southeast Asia',4494801.00),
('Southern Africa',2674778.00),
('Southern and Central Asia',10791130.00),
('Southern Europe',1316392.40),
('Western Africa',6138338.00),
('Western Europe',1108456.50);
/*!40000 ALTER TABLE `region_areas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-21  9:09:38
