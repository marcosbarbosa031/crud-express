-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 13/04/2018 às 05:42
-- Versão do servidor: 10.1.31-MariaDB
-- Versão do PHP: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `express`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `email` varchar(128) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL,
  `name` varchar(128) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL,
  `password` varchar(128) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `Users`
--

INSERT INTO `Users` (`id`, `email`, `name`, `password`, `createdAt`, `updatedAt`) VALUES
(3, 'teste@teste.com', 'Teste', '$2a$08$JLbZSklzCDWB0hMXKXsVkuZPguXsxpNMa7G67OxnqibsHNqHSOmWy', '2018-04-13 02:24:22', '2018-04-13 02:24:22'),
(4, 'marcosbarbosa031@gmail.com', 'Marcos Barbosa', '$2a$08$/.N4tGTyhO/SVuSOMfeequ3Wg9kxbxyWY1MNpR/MLgZami1BevX/y', '2018-04-13 02:25:01', '2018-04-13 02:25:01');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
