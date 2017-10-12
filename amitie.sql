-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 11-10-2017 a las 21:16:29
-- Versión del servidor: 5.7.19-0ubuntu0.16.04.1
-- Versión de PHP: 7.0.23-1+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `amitie`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bases_y_condiciones`
--

CREATE TABLE `bases_y_condiciones` (
  `id` int(10) NOT NULL,
  `texto` varchar(1000) DEFAULT NULL,
  `vigencia_desde` date DEFAULT NULL,
  `vigencia_hasta` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `bases_y_condiciones`
--

INSERT INTO `bases_y_condiciones` (`id`, `texto`, `vigencia_desde`, `vigencia_hasta`) VALUES
(1, 'Tarifas por persona en habitación doble o en la base indicada, para residentes argentinos al tipo de cambio del día sujetas a cotización del dólar del día de pago efectivo. Impuestos y gastos de reserva incluidos, excepto tasas de aeropuerto y gastos de cancelación. No aplica para fines de semana largos ni fechas especiales, excepto que se indique en la descripción. Compra en el período indicado en cada paquete o hasta agotar 5 plazas o lo primero que ocurra. Las tarifas publicadas corresponden a precio de contado (tarjeta de débito o tarjeta de crédito en un pago, transferencia bancaria o cheque). Consulte planes de financiación. Las fotografías son ilustrativas del lugar de destino. Las mismas no corresponden específicamente a los servicios ofrecidos ni forman parte de la oferta. EVT ITS SA Res. 228/83 Leg 3399. CUIT 30-67675791-7.', '2017-01-01', '2019-04-30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(10) NOT NULL,
  `comentario` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `comentario`) VALUES
(1, 'Aereos en primera clase'),
(2, 'Aereos en clase economica'),
(3, 'Habitación en base doble'),
(4, 'Hotel con wifi'),
(5, 'Incluye garage'),
(6, 'Habitación en base doble');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario_producto`
--

CREATE TABLE `comentario_producto` (
  `id` int(10) NOT NULL,
  `comentario_id` int(10) DEFAULT NULL,
  `producto_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `comentario_producto`
--

INSERT INTO `comentario_producto` (`id`, `comentario_id`, `producto_id`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 4),
(5, 5, 4),
(6, 6, 4),
(7, 7, 5),
(8, 8, 6),
(9, 9, 7),
(10, 10, 8),
(11, 4, 1),
(12, 5, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `iconos`
--

CREATE TABLE `iconos` (
  `id` int(10) NOT NULL,
  `path` varchar(255) DEFAULT NULL,
  `codigo` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `iconos`
--

INSERT INTO `iconos` (`id`, `path`, `codigo`, `descripcion`) VALUES
(1, 'assets/img/iconos/cama.ico', 'Hotel', 'Incluye hotel'),
(2, 'assets/img/iconos/media_pension.ico', 'Media P.', 'Incluye media pensión'),
(3, 'assets/img/iconos/autobus.ico', 'Traslados', 'Incluye traslados'),
(4, 'assets/img/iconos/aereos.ico', 'Aereos', 'Incluye aereos'),
(5, 'assets/img/iconos/desayuno.ico', 'Desayuno', 'Incluye desayuno');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `icono_producto`
--

CREATE TABLE `icono_producto` (
  `id` int(10) NOT NULL,
  `icono_id` int(10) DEFAULT NULL,
  `producto_id` int(10) DEFAULT NULL,
  `fecha_vigencia_desde` date DEFAULT NULL,
  `fecha_vigencia_hasta` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `icono_producto`
--

INSERT INTO `icono_producto` (`id`, `icono_id`, `producto_id`, `fecha_vigencia_desde`, `fecha_vigencia_hasta`) VALUES
(1, 4, 1, '2017-08-07', '2018-03-23'),
(2, 3, 1, '2017-08-07', '2018-01-27'),
(3, 4, 2, '2017-08-07', '2017-08-07'),
(4, 3, 2, '2017-08-07', '2017-08-07'),
(5, 4, 3, '2017-08-07', '2017-08-07'),
(6, 3, 3, '2017-08-07', '2017-08-07'),
(7, 1, 4, '2017-08-07', '2017-08-07'),
(8, 2, 4, '2017-08-07', '2017-08-07'),
(9, 1, 5, '2017-08-07', '2017-08-07'),
(10, 2, 5, '2017-08-07', '2017-08-07'),
(11, 1, 6, '2017-08-07', '2017-08-07'),
(12, 5, 6, '2017-08-07', '2017-08-07'),
(13, 1, 7, '2017-08-07', '2017-08-07'),
(14, 2, 7, '2017-08-07', '2017-08-07'),
(15, 3, 7, '2017-08-07', '2017-08-07'),
(16, 4, 7, '2017-08-07', '2017-08-07'),
(17, 1, 8, '2017-08-07', '2017-08-07'),
(18, 2, 8, '2017-08-07', '2017-08-07'),
(19, 3, 8, '2017-08-07', '2017-08-07'),
(20, 4, 8, '2017-08-07', '2017-08-07');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

CREATE TABLE `imagenes` (
  `id` int(10) NOT NULL,
  `producto_id` int(10) DEFAULT NULL,
  `path_img` varchar(255) DEFAULT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `epigrafe` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `imagenes`
--

INSERT INTO `imagenes` (`id`, `producto_id`, `path_img`, `titulo`, `epigrafe`) VALUES
(1, 1, 'assets/img/promociones/pruebatamano.jpg', 'Salta', 'Volá a Salta la linda'),
(2, 2, 'assets/img/promociones/buzios.jpg', 'Buzios', '	\r\nEnamorate de las playas de Buzios'),
(3, 3, 'assets/img/promociones/paris.jpg', 'Paris', 'oh la la Paris..'),
(4, 4, 'assets/img/promociones/san_martin_de_los_andes.jpg', 'San Martín de los Andes', 'Enamorate del Sur argentino'),
(5, 5, 'assets/img/promociones/hotel_paris.jpg', 'Hotel en Paris', 'Deleitate mirando una de las maravillas del mundo'),
(6, 6, 'assets/img/promociones/ilha_grande.jpg', 'Ilha Grande', 'Relajate mirando el mar'),
(7, 7, 'assets/img/promociones/peru.jpg', 'Machu Pichu', 'Maravillas del Perú'),
(8, 8, 'assets/img/promociones/cancun.jpg', 'Cancún', 'Disfruta del Caribe'),
(9, 1, 'assets/img/promociones/salta2.jpg', 'Purmamarca', 'Purmamarca!, Hermoso!'),
(10, 1, 'assets/img/promociones/salta3.jpg', 'Salta Capital', 'Salta Capital');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(10) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `tipo_id` int(10) DEFAULT NULL,
  `bases_y_condiciones_id` int(10) DEFAULT NULL,
  `destino_turistico_pais` varchar(255) DEFAULT NULL,
  `destino_turistico_lugar` varchar(255) DEFAULT NULL,
  `fecha_alta` date DEFAULT NULL,
  `fecha_vigencia_desde` date DEFAULT NULL,
  `fecha_vigencia_hasta` date DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `valor` decimal(10,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `tipo_id`, `bases_y_condiciones_id`, `destino_turistico_pais`, `destino_turistico_lugar`, `fecha_alta`, `fecha_vigencia_desde`, `fecha_vigencia_hasta`, `descripcion`, `valor`) VALUES
(1, 'Volá al norte. Temporada baja', 1, 1, 'Argentina', 'Salta', '2017-08-07', '2017-10-07', '2018-11-30', 'Aéreos ida y vuelta', '2500'),
(2, 'Aéreos a Buzios', 1, 1, 'Brasil', 'Buzios', '2017-08-07', '2017-10-07', '2019-09-17', 'Aéreos ida y vuelta', '12000'),
(3, 'Volá a europa. Temporada Alta', 1, 1, 'Francia', 'Paris', '2017-08-07', '2017-10-07', '2017-11-23', 'Aéreos ida y vuelta', '25000'),
(4, 'Hospedate mirando la Nieve', 2, 1, 'Argentina', 'San Martin de los Andes', '2017-08-07', '2017-10-07', '2018-01-31', 'Hotel 4* con media pensión', '5400'),
(5, 'Hotel 5* para el infarto', 2, 1, 'Francia', 'Paris', '2017-08-07', '2017-10-07', '2018-07-19', 'Hotel 5* con desayuno', '35000'),
(6, 'Relajate mirando el mar', 2, 1, 'Brasil', 'Ilha Grande', '2017-08-07', '2017-10-07', '2018-02-22', 'Hotel 4* con media pensión', '9000'),
(7, 'Maravillas del Perú', 3, 1, 'Perú', 'Machu Pichu', '2017-08-07', '2017-10-07', '2018-06-20', 'Salida grupal', '13000'),
(8, 'Cancún. Temporada baja', 3, 1, 'México', 'Cancún', '2017-08-07', '2017-10-07', '2018-05-21', 'Aéreos ida y vuelta. Traslados. Hotel. All inclusive', '9600');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_tipos`
--

CREATE TABLE `productos_tipos` (
  `id` int(10) NOT NULL,
  `codigo` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suscriptores`
--

CREATE TABLE `suscriptores` (
  `id` int(10) NOT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `fecha_alta` date DEFAULT NULL,
  `fecha_baja` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `suscriptores`
--

INSERT INTO `suscriptores` (`id`, `mail`, `fecha_alta`, `fecha_baja`) VALUES
(1, 'juan@gmail.com', '2017-10-09', '2017-10-31'),
(2, 'pedro@gmail.com', '2017-10-03', '2017-10-31'),
(8, 'prueba2@gmail.com', '2017-10-02', NULL),
(9, 'jeje@gmail.com', '2017-10-02', NULL),
(10, 'jj@gmail.com', '2017-10-02', NULL),
(13, 'juan.pelota@gmail.com', '2017-10-03', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bases_y_condiciones`
--
ALTER TABLE `bases_y_condiciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `comentario_producto`
--
ALTER TABLE `comentario_producto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `iconos`
--
ALTER TABLE `iconos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `icono_producto`
--
ALTER TABLE `icono_producto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos_tipos`
--
ALTER TABLE `productos_tipos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `suscriptores`
--
ALTER TABLE `suscriptores`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bases_y_condiciones`
--
ALTER TABLE `bases_y_condiciones`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `comentario_producto`
--
ALTER TABLE `comentario_producto`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT de la tabla `iconos`
--
ALTER TABLE `iconos`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `icono_producto`
--
ALTER TABLE `icono_producto`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT de la tabla `productos_tipos`
--
ALTER TABLE `productos_tipos`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `suscriptores`
--
ALTER TABLE `suscriptores`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
