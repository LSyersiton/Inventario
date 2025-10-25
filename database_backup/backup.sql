-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: inventario
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ciudad`
--

DROP TABLE IF EXISTS `ciudad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ciudad` (
  `id_ciudad` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) NOT NULL,
  `id_departamento` int NOT NULL,
  PRIMARY KEY (`id_ciudad`),
  KEY `FK_id_departamentociudad` (`id_departamento`),
  CONSTRAINT `FK_id_departamentociudad` FOREIGN KEY (`id_departamento`) REFERENCES `departamento` (`id_departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=157 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ciudad`
--

LOCK TABLES `ciudad` WRITE;
/*!40000 ALTER TABLE `ciudad` DISABLE KEYS */;
INSERT INTO `ciudad` VALUES (1,'Leticia',1),(2,'Medellín',2),(3,'Arauca',3),(4,'Barranquilla',4),(5,'Bogotá',5),(6,'Cartagena',6),(7,'Tunja',7),(8,'Manizales',8),(9,'Florencia',9),(10,'Yopal',10),(11,'Popayán',11),(12,'Valledupar',12),(13,'Quibdó',13),(14,'Montería',14),(15,'Bogotá',15),(16,'Inírida',16),(17,'San José del Guaviare',17),(18,'Neiva',18),(19,'Riohacha',19),(20,'Santa Marta',20),(21,'Pasto',21),(22,'Cúcuta',22),(23,'Mocoa',23),(24,'Armenia',24),(25,'Pereira',25),(26,'San Andrés',26),(27,'Bucaramanga',27),(28,'Sincelejo',28),(29,'Ibagué',29),(30,'Cali',30),(31,'Mitú',31),(32,'Puerto Carreño',32),(33,'Cáceres',2),(34,'Caucasia',2),(35,'El Bagre',2),(36,'Nechí',2),(37,'Tarazá',2),(38,'Zaragoza',2),(39,'Caracolí',2),(40,'Maceo',2),(41,'Puerto Berrío',2),(42,'Puerto Nare',2),(43,'Puerto Triunfo',2),(44,'Yondó',2),(45,'Amalfi',2),(46,'Anorí',2),(47,'Bogotá',2),(48,'Cisneros',2),(49,'Remedios',2),(50,'San Roque',2),(51,'Santo Domingo',2),(52,'Segovia',2),(53,'Vegachí',2),(54,'Yalí',2),(55,'Yolombó',2),(56,'Angostura',2),(57,'Belmira',2),(58,'Briceño',2),(59,'Campamento',2),(60,'Carolina del Príncipe',2),(61,'Donmatías',2),(62,'Entrerríos',2),(63,'Gómez Plata',2),(64,'Guadalupe',2),(65,'Ituango',2),(66,'San Andrés de Cuerquia',2),(67,'San José de la Montaña',2),(68,'San Pedro de los Milagros',2),(69,'Santa Rosa de Osos',2),(70,'Toledo',2),(71,'Valdivia',2),(72,'Yarumal',2),(73,'Abriaquí',2),(74,'Santa Fe de Antioquia',2),(75,'Anzá',2),(76,'Armenia',2),(77,'Buriticá',2),(78,'Caicedo',2),(79,'Cañasgordas',2),(80,'Dabeiba',2),(81,'Ebéjico',2),(82,'Frontino',2),(83,'Giraldo',2),(84,'Heliconia',2),(85,'Liborina',2),(86,'Olaya',2),(87,'Peque',2),(88,'Sabanalarga',2),(89,'San Jerónimo',2),(90,'Sopetrán',2),(91,'Uramita',2),(92,'Abejorral',2),(93,'Alejandría',2),(94,'Argelia',2),(95,'El Carmen de Viboral',2),(96,'Cocorná',2),(97,'Concepción',2),(98,'El Peñol',2),(99,'La Ceja',2),(100,'El Retiro',2),(101,'El Santuario',2),(102,'Granada',2),(103,'Guarne',2),(104,'Guatapé',2),(105,'La Unión',2),(106,'Marinilla',2),(107,'Nariño',2),(108,'Rionegro',2),(109,'San Carlos',2),(110,'San Francisco',2),(111,'San Luis',2),(112,'San Rafael',2),(113,'San Vicente Ferrer',2),(114,'Sonsón',2),(115,'Amagá',2),(116,'Andes',2),(117,'Angelópolis',2),(118,'Betania',2),(119,'Betulia',2),(120,'Caramanta',2),(121,'Ciudad Bolívar',2),(122,'Concordia',2),(123,'Fredonia',2),(124,'Hispania',2),(125,'Jardín',2),(126,'Jericó',2),(127,'La Pintada',2),(128,'Montebello',2),(129,'Pueblorrico',2),(130,'Salgar',2),(131,'Santa Bárbara',2),(132,'Venecia',2),(133,'Tarso',2),(134,'Titiribí',2),(135,'Urrao',2),(136,'Valparaíso',2),(137,'Apartadó',2),(138,'Arboletes',2),(139,'Carepa',2),(140,'Chigorodó',2),(141,'Murindó',2),(142,'Mutatá',2),(143,'Necoclí',2),(144,'San Juan de Urabá',2),(145,'San Pedro de Urabá',2),(146,'Turbo',2),(147,'Vigía del Fuerte',2),(148,'Barbosa',2),(149,'Bello',2),(150,'Caldas',2),(151,'Copacabana',2),(152,'Envigado',2),(153,'	Girardota',2),(154,'Itagüí',2),(155,'La Estrella',2),(156,'Sabaneta',2);
/*!40000 ALTER TABLE `ciudad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departamento`
--

DROP TABLE IF EXISTS `departamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departamento` (
  `id_departamento` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) NOT NULL,
  `id_pais` int NOT NULL,
  PRIMARY KEY (`id_departamento`),
  KEY `FK_id_pais` (`id_pais`),
  CONSTRAINT `FK_id_pais` FOREIGN KEY (`id_pais`) REFERENCES `pais` (`id_pais`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departamento`
--

LOCK TABLES `departamento` WRITE;
/*!40000 ALTER TABLE `departamento` DISABLE KEYS */;
INSERT INTO `departamento` VALUES (1,'Amazonas',1),(2,'Antioquia',1),(3,'Arauca',1),(4,'Atlántico',1),(5,'Bogotá, Distrito Capital',1),(6,'Bolívar',1),(7,'Boyacá',1),(8,'Caldas',1),(9,'Caquetá',1),(10,'Casanare',1),(11,'Cauca',1),(12,'Cesar',1),(13,'Chocó',1),(14,'Córdoba',1),(15,'Cundinamarca',1),(16,'Guainía',1),(17,'Guaviare',1),(18,'Huila',1),(19,'La Guajira',1),(20,'Magdalena',1),(21,'Nariño',1),(22,'Norte de Santander',1),(23,'Putumayo',1),(24,'Quindío',1),(25,'Risaralda',1),(26,'San Andrés y Providencia',1),(27,'Santander',1),(28,'Sucre',1),(29,'Tolima',1),(30,'Valle del Cauca',1),(31,'Vaupés',1),(32,'Vichada',1);
/*!40000 ALTER TABLE `departamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marcas`
--

DROP TABLE IF EXISTS `marcas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marcas` (
  `id_marcas` int NOT NULL AUTO_INCREMENT,
  `nombres` varchar(60) NOT NULL,
  PRIMARY KEY (`id_marcas`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marcas`
--

LOCK TABLES `marcas` WRITE;
/*!40000 ALTER TABLE `marcas` DISABLE KEYS */;
INSERT INTO `marcas` VALUES (1,'postobon'),(2,'coca cola'),(3,'Ron caldas'),(4,'Elrito'),(5,'firenze'),(6,'Quinta las cabras'),(7,'coca cola'),(8,'LG');
/*!40000 ALTER TABLE `marcas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pais`
--

DROP TABLE IF EXISTS `pais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pais` (
  `id_pais` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) NOT NULL,
  PRIMARY KEY (`id_pais`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pais`
--

LOCK TABLES `pais` WRITE;
/*!40000 ALTER TABLE `pais` DISABLE KEYS */;
INSERT INTO `pais` VALUES (1,'colombia');
/*!40000 ALTER TABLE `pais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id_productos` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) NOT NULL,
  `precio` int NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `id_tipo` int NOT NULL,
  `imagen` varchar(120) NOT NULL,
  `stock` int NOT NULL,
  `id_marcas` int NOT NULL,
  PRIMARY KEY (`id_productos`),
  KEY `FK_id_tipo` (`id_tipo`),
  KEY `FK_productos_marcas` (`id_marcas`),
  CONSTRAINT `FK_id_tipo` FOREIGN KEY (`id_tipo`) REFERENCES `tipos_producto` (`id_tipo_producto`),
  CONSTRAINT `FK_productos_marcas` FOREIGN KEY (`id_marcas`) REFERENCES `marcas` (`id_marcas`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'sprite',4000,'Gaseosa Lima limon',3,'default.jpg',16,2),(2,'sprite',4000,'Bebida lima limon',3,'1759556921673-284485993-imagen_lol.jpeg',16,2);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos_sucursal`
--

DROP TABLE IF EXISTS `productos_sucursal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos_sucursal` (
  `id_productos` int NOT NULL,
  `id_sucursal` int NOT NULL,
  KEY `FK_productos_sucursal` (`id_productos`),
  KEY `FK_sucursal_productos` (`id_sucursal`),
  CONSTRAINT `FK_productos_sucursal` FOREIGN KEY (`id_productos`) REFERENCES `productos` (`id_productos`),
  CONSTRAINT `FK_sucursal_productos` FOREIGN KEY (`id_sucursal`) REFERENCES `sucursal` (`id_sucursal`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos_sucursal`
--

LOCK TABLES `productos_sucursal` WRITE;
/*!40000 ALTER TABLE `productos_sucursal` DISABLE KEYS */;
/*!40000 ALTER TABLE `productos_sucursal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos_ventas`
--

DROP TABLE IF EXISTS `productos_ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos_ventas` (
  `id_productos` int NOT NULL,
  `id_ventas` int NOT NULL,
  KEY `FK_productos_ventas` (`id_productos`),
  KEY `FK_ventas_productos` (`id_ventas`),
  CONSTRAINT `FK_productos_ventas` FOREIGN KEY (`id_productos`) REFERENCES `productos` (`id_productos`),
  CONSTRAINT `FK_ventas_productos` FOREIGN KEY (`id_ventas`) REFERENCES `ventas` (`id_ventas`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos_ventas`
--

LOCK TABLES `productos_ventas` WRITE;
/*!40000 ALTER TABLE `productos_ventas` DISABLE KEYS */;
/*!40000 ALTER TABLE `productos_ventas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sucursal`
--

DROP TABLE IF EXISTS `sucursal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sucursal` (
  `id_sucursal` int NOT NULL AUTO_INCREMENT,
  `direccion` varchar(60) NOT NULL,
  `id_ciudad` int NOT NULL,
  PRIMARY KEY (`id_sucursal`),
  KEY `FK_ciudad` (`id_ciudad`),
  CONSTRAINT `FK_ciudad` FOREIGN KEY (`id_ciudad`) REFERENCES `ciudad` (`id_ciudad`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sucursal`
--

LOCK TABLES `sucursal` WRITE;
/*!40000 ALTER TABLE `sucursal` DISABLE KEYS */;
INSERT INTO `sucursal` VALUES (1,'y',1);
/*!40000 ALTER TABLE `sucursal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipos_producto`
--

DROP TABLE IF EXISTS `tipos_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipos_producto` (
  `id_tipo_producto` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) NOT NULL,
  PRIMARY KEY (`id_tipo_producto`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipos_producto`
--

LOCK TABLES `tipos_producto` WRITE;
/*!40000 ALTER TABLE `tipos_producto` DISABLE KEYS */;
INSERT INTO `tipos_producto` VALUES (1,'Disponible'),(2,'Agotado'),(3,'gaseosa');
/*!40000 ALTER TABLE `tipos_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas`
--

DROP TABLE IF EXISTS `ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas` (
  `id_ventas` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(500) DEFAULT NULL,
  `n_productos` int NOT NULL,
  `total_v` int NOT NULL,
  `fecha` date NOT NULL,
  PRIMARY KEY (`id_ventas`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas`
--

LOCK TABLES `ventas` WRITE;
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-10-19 16:51:54
