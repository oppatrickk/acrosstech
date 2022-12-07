-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 06, 2022 at 07:06 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `login`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `code` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `code`) VALUES
(1, 'brokencity', 'brokencity@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', 'ebe347987b754139cc32e1ea0d5d43e4'),
(2, 'Karl Cedric Enorme', 'karlcedricenorme@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', 'f225b8aa09d66ddea688448568949c1a'),
(3, 'brokencity', 'brokencity02@gmail.com', 'dd9d21e22391090ddce7c6ed58c6412d', '677e447a2dd386065b3ecb6cf943ed6c'),
(4, 'gago', 'gago@gago.com', 'efcea0e02912bc1d91eced3ed5444ac4', '09d87d584a3710a96bd6d69d34678bd6'),
(5, 'gago', 'gago2@gago.com', '62c8ad0a15d9d1ca38d5dee762a16e01', 'ada7b11e0884bb1e3329c78dec66e04b'),
(6, 'qwerty', 'gago3@gago.com', '62c8ad0a15d9d1ca38d5dee762a16e01', '5a7edcb2a06854c33cede45c915e8d45');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
