var ctx;
var shapes;
var intervalTime;

function drawBackground() {
    shapes = document.getElementById("myCanvas");
    ctx = shapes.getContext("2d");

    // Sky
    ctx.shadowColor = "rgba(0,0,0,0)";
    ctx.strokeStyle = "rgba(255,255,255,1)";
    ctx.lineWidth = 1;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.beginPath();
    ctx.moveTo(-3, -5);
    ctx.lineTo(808, -5);
    ctx.lineTo(808, 319);
    ctx.lineTo(-3, 319);
    ctx.lineTo(-3, -5);
    ctx.closePath();
    ctx.stroke();
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = 15;
    ctx.shadowBlur = 0;
    ctx.shadowColor = "rgba(0,0,0,0)";
    grad = ctx.createLinearGradient(511, -12, 479, 691);
    grad.addColorStop(0, "rgba(0,6,90,1)");
    grad.addColorStop(1, "rgba(255,255,255,1)");
    ctx.fillStyle = grad;
    ctx.fill();

    // Moon
    ctx.beginPath();
    ctx.moveTo(656, 34);
    ctx.bezierCurveTo(684, 39, 694, 41, 704, 53);
    ctx.bezierCurveTo(714, 66, 711, 84, 705, 109);
    ctx.bezierCurveTo(743, 87, 747, 56, 738, 39);
    ctx.bezierCurveTo(730, 22, 689, 5, 656, 34);
    ctx.closePath();
    ctx.fillStyle = "rgba(241,249,12,0.81)";
    ctx.fill();

    // Building on the right
    ctx.shadowColor = "rgba(0,0,0,0)";
    ctx.strokeStyle = "rgba(0,0,0,1)";
    ctx.lineWidth = 1;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.beginPath();
    ctx.moveTo(688, 115);
    ctx.lineTo(816, 115);
    ctx.lineTo(816, 322);
    ctx.lineTo(688, 322);
    ctx.lineTo(688, 115);
    ctx.closePath();
    ctx.stroke();
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = 15;
    ctx.shadowBlur = 0;
    ctx.shadowColor = "rgba(0,0,0,0)";
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.fill();

    // Building on the right
    ctx.beginPath();
    ctx.moveTo(275, 115);
    ctx.lineTo(500, 115);
    ctx.lineTo(500, 322);
    ctx.lineTo(275, 322);
    ctx.lineTo(275, 115);
    ctx.closePath();
    ctx.stroke();
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = 15;
    ctx.shadowBlur = 0;
    ctx.shadowColor = "rgba(0,0,0,0)";
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.fill();

    // Building 1
    ctx.shadowColor = "rgba(0,0,0,0)";
    ctx.strokeStyle = "rgba(0,0,0,1)";
    ctx.lineWidth = 1;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.beginPath();
    ctx.moveTo(388, 66);
    ctx.lineTo(542, 66);
    ctx.lineTo(542, 339);
    ctx.lineTo(388, 339);
    ctx.lineTo(388, 66);
    ctx.closePath();
    ctx.stroke();
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = 15;
    ctx.shadowBlur = 0;
    ctx.shadowColor = "rgba(0,0,0,0)";
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.fill();

    // Building 3
    ctx.shadowColor = "rgba(0,0,0,0)";
    ctx.strokeStyle = "rgba(0,0,0,1)";
    ctx.lineWidth = 1;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.beginPath();
    ctx.moveTo(583, 171);
    ctx.lineTo(678, 171);
    ctx.lineTo(678, 325);
    ctx.lineTo(583, 325);
    ctx.lineTo(583, 171);
    ctx.closePath();
    ctx.stroke();
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = 15;
    ctx.shadowBlur = 0;
    ctx.shadowColor = "rgba(0,0,0,0)";
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.fill();

    // Building 2
    ctx.shadowColor = "rgba(0,0,0,0)";
    ctx.strokeStyle = "rgba(0,0,0,1)";
    ctx.lineWidth = 1;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.beginPath();
    ctx.moveTo(514, 143);
    ctx.lineTo(609, 143);
    ctx.lineTo(609, 324);
    ctx.lineTo(514, 324);
    ctx.lineTo(514, 143);
    ctx.closePath();
    ctx.stroke();
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = 15;
    ctx.shadowBlur = 0;
    ctx.shadowColor = "rgba(0,0,0,0)";
    ctx.fillStyle = "rgba(20,20,20,1)";
    ctx.fill();

    // Building 1 Window 1
    ctx.shadowColor = "rgba(0,0,0,0)";
    ctx.strokeStyle = "rgba(255,255,255,0)";
    ctx.lineWidth = 1;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.beginPath();
    ctx.moveTo(397, 77);
    ctx.lineTo(411, 77);
    ctx.lineTo(411, 90);
    ctx.lineTo(397, 90);
    ctx.lineTo(397, 77);
    ctx.closePath();
    ctx.stroke();
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = 15;
    ctx.shadowBlur = 0;
    ctx.shadowColor = "rgba(0,0,0,0)";
    ctx.fillStyle = "rgba(87,103,33,1)";
    ctx.fill();

    // Building 1 Window 2
    ctx.shadowColor = "rgba(0,0,0,0)";
    ctx.strokeStyle = "rgba(255,255,255,0)";
    ctx.lineWidth = 1;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.beginPath();
    ctx.moveTo(425, 77);
    ctx.lineTo(439, 77);
    ctx.lineTo(439, 90);
    ctx.lineTo(425, 90);
    ctx.lineTo(425, 77);
    ctx.closePath();
    ctx.stroke();
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = 15;
    ctx.shadowBlur = 0;
    ctx.shadowColor = "rgba(0,0,0,0)";
    ctx.fillStyle = "rgba(87,103,33,1)";
    ctx.fill();

    // Building 1 Window 3
    ctx.shadowColor = "rgba(0,0,0,0)";
    ctx.strokeStyle = "rgba(255,255,255,0)";
    ctx.lineWidth = 1;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.beginPath();
    ctx.moveTo(452, 77);
    ctx.lineTo(466, 77);
    ctx.lineTo(466, 90);
    ctx.lineTo(452, 90);
    ctx.lineTo(452, 77);
    ctx.closePath();
    ctx.stroke();
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = 15;
    ctx.shadowBlur = 0;
    ctx.shadowColor = "rgba(0,0,0,0)";
    ctx.fillStyle = "rgba(87,103,33,1)";
    ctx.fill();

    // Building 1 Window 4
    ctx.shadowColor = "rgba(0,0,0,0)";
    ctx.strokeStyle = "rgba(255,255,255,0)";
    ctx.lineWidth = 1;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.beginPath();
    ctx.moveTo(521, 112);
    ctx.lineTo(535, 112);
    ctx.lineTo(535, 125);
    ctx.lineTo(521, 125);
    ctx.lineTo(521, 112);
    ctx.closePath();
    ctx.stroke();
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = 15;
    ctx.shadowBlur = 0;
    ctx.shadowColor = "rgba(0,0,0,0)";
    ctx.fillStyle = "rgba(87,103,33,1)";
    ctx.fill();

    // Building 1 Window 5
    ctx.shadowColor = "rgba(0,0,0,0)";
    ctx.strokeStyle = "rgba(255,255,255,0)";
    ctx.lineWidth = 1;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.beginPath();
    ctx.moveTo(498, 111);
    ctx.lineTo(512, 111);
    ctx.lineTo(512, 124);
    ctx.lineTo(498, 124);
    ctx.lineTo(498, 111);
    ctx.closePath();
    ctx.stroke();
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = 15;
    ctx.shadowBlur = 0;
    ctx.shadowColor = "rgba(0,0,0,0)";
    ctx.fillStyle = "rgba(87,103,33,1)";
    ctx.fill();

    // Building 2 Window 1
    ctx.shadowColor = "rgba(0,0,0,0)";
    ctx.strokeStyle = "rgba(255,255,255,0)";
    ctx.lineWidth = 1;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.beginPath();
    ctx.moveTo(522, 151);
    ctx.lineTo(533, 151);
    ctx.lineTo(533, 161);
    ctx.lineTo(522, 161);
    ctx.lineTo(522, 151);
    ctx.closePath();
    ctx.stroke();
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = 15;
    ctx.shadowBlur = 0;
    ctx.shadowColor = "rgba(0,0,0,0)";
    ctx.fillStyle = "rgba(45,51,26,1)";
    ctx.fill();

    // Building 2 Window 2
    ctx.shadowColor = "rgba(0,0,0,0)";
    ctx.strokeStyle = "rgba(255,255,255,0)";
    ctx.lineWidth = 1;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.beginPath();
    ctx.moveTo(540, 150);
    ctx.lineTo(551, 150);
    ctx.lineTo(551, 160);
    ctx.lineTo(540, 160);
    ctx.lineTo(540, 150);
    ctx.closePath();
    ctx.stroke();
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = 15;
    ctx.shadowBlur = 0;
    ctx.shadowColor = "rgba(0,0,0,0)";
    ctx.fillStyle = "rgba(45,51,26,1)";
    ctx.fill();

    // Ground
    ctx.beginPath();
    ctx.moveTo(-11, 319);
    ctx.lineTo(810, 319);
    ctx.lineTo(810, 500);
    ctx.lineTo(-11, 500);
    ctx.lineTo(-11, 319);
    ctx.closePath();
    grad = ctx.createLinearGradient(376, 333, 373, 676);
    grad.addColorStop(0, "rgba(0,100,47,1)");
    grad.addColorStop(1, "rgba(255,255,255,1)");
    ctx.fillStyle = grad;
    ctx.fill();

    // Road
    ctx.beginPath();
    ctx.moveTo(190, 317);
    ctx.bezierCurveTo(271, 368, 337, 469, 370, 520);
    ctx.bezierCurveTo(483, 520, 708, 519, 821, 519);
    ctx.bezierCurveTo(822, 502, 825, 468, 826, 451);
    ctx.bezierCurveTo(774, 417, 669, 350, 617, 316);
    ctx.bezierCurveTo(522, 316, 333, 319, 238, 319);
    ctx.closePath();
    ctx.stroke();
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = 15;
    ctx.shadowBlur = 0;
    ctx.shadowColor = "rgba(0,0,0,0)";
    grad = ctx.createLinearGradient(283, 270, 871, 604);
    grad.addColorStop(0, "rgba(42,40,40,1)");
    grad.addColorStop(1, "rgba(93,93,93,1)");
    ctx.fillStyle = grad;
    ctx.fill();
}

function drawCar() {
    shapes = document.getElementById("myCanvas");
    ctx = shapes.getContext("2d");
    ctx.scale(0.95, 0.95);

    //Inner front wheel gap
    ctx.beginPath();
    ctx.bezierCurveTo(489, 285, 506, 308, 506, 337);
    ctx.bezierCurveTo(447, 389, 430, 366, 430, 337);
    ctx.bezierCurveTo(430, 308, 447, 285, 468, 285);
    ctx.closePath();
    ctx.fillStyle = "rgba(187,15,15,1)";
    ctx.fill();

    //Back wheel
    ctx.beginPath();
    ctx.bezierCurveTo(322, 274, 337, 302, 337, 337);
    ctx.bezierCurveTo(337, 372, 322, 400, 303, 400);
    ctx.bezierCurveTo(284, 400, 269, 372, 269, 337);
    ctx.bezierCurveTo(269, 302, 284, 274, 303, 274);
    ctx.closePath();
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.fill();

    //Back rim
    ctx.beginPath();
    ctx.moveTo(289, 306);
    ctx.bezierCurveTo(295, 306, 300, 322, 300, 343);
    ctx.bezierCurveTo(300, 363, 295, 379, 289, 379);
    ctx.bezierCurveTo(283, 379, 278, 363, 278, 343);
    ctx.bezierCurveTo(278, 322, 283, 306, 289, 306);
    ctx.closePath();
    ctx.fillStyle = "rgba(134,134,134,1)";
    ctx.fill();

    //Front left wheel
    ctx.beginPath();
    ctx.bezierCurveTo(516, 305, 540, 338, 540, 378);
    ctx.bezierCurveTo(540, 418, 516, 451, 488, 451);
    ctx.bezierCurveTo(459, 451, 435, 418, 435, 378);
    ctx.bezierCurveTo(435, 338, 459, 305, 488, 305);
    ctx.closePath();
    ctx.fillStyle = "rgba(4,0,0,1)";
    ctx.fill();

    //Front right wheel
    ctx.beginPath();
    ctx.bezierCurveTo(789, 278, 813, 311, 813, 351);
    ctx.bezierCurveTo(813, 391, 789, 424, 761, 424);
    ctx.bezierCurveTo(732, 424, 708, 391, 708, 351);
    ctx.closePath();
    ctx.fillStyle = "rgba(5,0,0,1)";
    ctx.fill();

    //Back wheel spokes
    ctx.beginPath();
    ctx.moveTo(290, 323);
    ctx.lineTo(291, 340);
    ctx.bezierCurveTo(293, 339, 292, 337, 297, 333);
    ctx.lineTo(293, 343);
    ctx.bezierCurveTo(295, 345, 297, 348, 298, 350);
    ctx.bezierCurveTo(296, 349, 294, 348, 292, 347);
    ctx.bezierCurveTo(292, 351, 291, 358, 292, 362);
    ctx.bezierCurveTo(291, 357, 288, 351, 288, 345);
    ctx.bezierCurveTo(293, 347, 283, 354, 283, 356);
    ctx.bezierCurveTo(283, 353, 286, 347, 285, 344);
    ctx.bezierCurveTo(283, 341, 281, 335, 280, 333);
    ctx.bezierCurveTo(282, 335, 285, 337, 287, 339);
    ctx.lineTo(290, 323);
    ctx.closePath();
    ctx.fillStyle = "rgba(213,213,213,1)";
    ctx.fill();

    //Front wheel rim
    ctx.beginPath();
    ctx.moveTo(470, 338);
    ctx.bezierCurveTo(480, 338, 488, 358, 488, 383);
    ctx.bezierCurveTo(488, 407, 480, 427, 470, 427);
    ctx.bezierCurveTo(459, 427, 451, 407, 451, 383);
    ctx.bezierCurveTo(451, 358, 459, 338, 470, 338);
    ctx.closePath();
    ctx.fillStyle = "rgba(134,134,134,1)";
    ctx.fill();

    //Front wheel spoke
    ctx.beginPath();
    ctx.moveTo(470, 350);
    ctx.lineTo(471, 380);
    ctx.bezierCurveTo(475, 378, 473, 374, 482, 367);
    ctx.lineTo(475, 385);
    ctx.bezierCurveTo(478, 387, 481, 393, 483, 396);
    ctx.bezierCurveTo(479, 395, 476, 392, 472, 391);
    ctx.bezierCurveTo(473, 399, 472, 410, 472, 417);
    ctx.bezierCurveTo(470, 409, 466, 399, 465, 388);
    ctx.bezierCurveTo(474, 391, 458, 403, 457, 407);
    ctx.bezierCurveTo(457, 401, 462, 391, 460, 385);
    ctx.bezierCurveTo(458, 381, 455, 371, 453, 367);
    ctx.bezierCurveTo(457, 371, 460, 374, 464, 378);
    ctx.lineTo(470, 350);
    ctx.closePath();
    ctx.fillStyle = "rgba(213,213,213,1)";
    ctx.fill();

    //Car body
    ctx.beginPath();
    ctx.moveTo(698, 238);
    ctx.bezierCurveTo(664, 221, 636, 186, 605, 175);
    ctx.bezierCurveTo(574, 164, 403, 165, 361, 174);
    ctx.bezierCurveTo(320, 183, 292, 226, 271, 229);
    ctx.bezierCurveTo(251, 232, 259, 342, 271, 349);
    ctx.bezierCurveTo(277, 352, 265, 290, 284, 290);
    ctx.bezierCurveTo(304, 296, 304, 341, 311, 370);
    ctx.bezierCurveTo(329, 374, 443, 407, 449, 409);
    ctx.bezierCurveTo(439, 375, 440, 331, 447, 319);
    ctx.bezierCurveTo(455, 306, 468, 300, 481, 324);
    ctx.bezierCurveTo(507, 372, 509, 391, 516, 413);
    ctx.bezierCurveTo(551, 415, 612, 412, 642, 412);
    ctx.bezierCurveTo(687, 404, 805, 394, 822, 386);
    ctx.bezierCurveTo(821, 368, 834, 348, 819, 323);
    ctx.bezierCurveTo(804, 298, 816, 283, 783, 269);
    ctx.bezierCurveTo(750, 255, 732, 255, 698, 238);
    ctx.closePath();
    var grad = ctx.createLinearGradient(502, 305, 531, 264);
    grad.addColorStop(0, "rgba(149,11,21,1)");
    grad.addColorStop(1, "rgba(246,26,42,1)");
    ctx.fillStyle = grad;
    ctx.fill();

    //Outer grill
    ctx.beginPath();
    ctx.bezierCurveTo(659, 301, 659, 301, 659, 301);
    ctx.bezierCurveTo(659, 301, 659, 301, 659, 301);
    ctx.lineTo(659, 301);
    ctx.bezierCurveTo(684, 301, 755, 296, 781, 293);
    ctx.bezierCurveTo(773, 324, 776, 338, 754, 340);
    ctx.bezierCurveTo(732, 342, 701, 346, 672, 345);
    ctx.bezierCurveTo(650, 344, 624, 308, 614, 301);
    ctx.bezierCurveTo(619, 301, 654, 301, 659, 301);
    ctx.closePath();
    ctx.fillStyle = "rgba(255,255,255,1)";
    ctx.fill();

    //Inner grill
    ctx.beginPath();
    ctx.bezierCurveTo(674, 310, 674, 310, 674, 310);
    ctx.bezierCurveTo(674, 310, 674, 310, 674, 310);
    ctx.bezierCurveTo(693, 310, 745, 307, 764, 306);
    ctx.bezierCurveTo(758, 323, 760, 330, 744, 331);
    ctx.bezierCurveTo(728, 332, 705, 335, 684, 334);
    ctx.bezierCurveTo(654, 332, 651, 324, 637, 311);
    ctx.bezierCurveTo(641, 311, 670, 310, 674, 310);
    ctx.closePath();
    ctx.fillStyle = "rgba(82,78,78,1)";
    ctx.fill();

    //Front left bumper light
    ctx.beginPath();
    ctx.moveTo(504, 293);
    ctx.bezierCurveTo(532, 295, 569, 294, 581, 299);
    ctx.bezierCurveTo(593, 304, 607, 323, 621, 337);
    ctx.bezierCurveTo(581, 335, 526, 332, 521, 325);
    ctx.bezierCurveTo(516, 318, 508, 302, 504, 293);
    ctx.closePath();
    ctx.fillStyle = "rgba(208,200,200,1)";
    ctx.fill();

    //Front left bumper light (inside)
    ctx.beginPath();
    ctx.moveTo(520, 300);
    ctx.bezierCurveTo(532, 302, 566, 302, 569, 304);
    ctx.bezierCurveTo(572, 306, 582, 315, 593, 327);
    ctx.bezierCurveTo(569, 326, 534, 323, 531, 319);
    ctx.bezierCurveTo(528, 314, 523, 305, 520, 300);
    ctx.closePath();
    ctx.fillStyle = "rgba(255,254,254,1)";
    ctx.fill();

    //Windshield
    ctx.beginPath();
    ctx.moveTo(423, 183);
    ctx.bezierCurveTo(472, 178, 590, 179, 600, 182);
    ctx.bezierCurveTo(610, 185, 667, 229, 678, 239);
    ctx.bezierCurveTo(638, 241, 467, 248, 454, 246);
    ctx.bezierCurveTo(441, 244, 435, 217, 423, 183);
    ctx.closePath();
    grad = ctx.createLinearGradient(429, 192, 678, 212);
    grad.addColorStop(0, "rgba(94,84,84,1)");
    grad.addColorStop(1, "rgba(136,135,135,1)");
    ctx.fillStyle = grad;
    ctx.fill();

    //Front right bumper light
    ctx.beginPath();
    ctx.moveTo(780, 324);
    ctx.bezierCurveTo(827, 316, 805, 314, 811, 313);
    ctx.bezierCurveTo(818, 313, 811, 259, 787, 286);
    ctx.bezierCurveTo(781, 305, 785, 289, 780, 324);
    ctx.closePath();
    ctx.fillStyle = "rgba(208,200,200,1)";
    ctx.fill();

    //Front right bumper light (inside)
    ctx.beginPath();
    ctx.moveTo(791, 314);
    ctx.bezierCurveTo(820, 309, 807, 307, 810, 307);
    ctx.bezierCurveTo(815, 307, 810, 273, 795, 290);
    ctx.bezierCurveTo(792, 302, 794, 292, 791, 314);
    ctx.closePath();
    ctx.fillStyle = "rgba(255,255,255,1)";
    ctx.fill();

    //Side window frame
    ctx.beginPath();
    ctx.moveTo(408, 188);
    ctx.bezierCurveTo(420, 201, 430, 247, 432, 257);
    ctx.bezierCurveTo(402, 252, 339, 239, 308, 233);
    ctx.bezierCurveTo(310, 208, 317, 206, 336, 192);
    ctx.bezierCurveTo(355, 178, 396, 175, 408, 188);
    ctx.closePath();
    ctx.fillStyle = "rgba(255,255,255,1)";
    ctx.fill();

    //Window (inside)
    ctx.beginPath();
    ctx.moveTo(406, 191);
    ctx.bezierCurveTo(417, 203, 425, 242, 427, 251);
    ctx.bezierCurveTo(400, 247, 346, 235, 319, 230);
    ctx.bezierCurveTo(321, 209, 327, 207, 343, 195);
    ctx.bezierCurveTo(360, 183, 396, 180, 406, 191);
    ctx.closePath();
    ctx.fillStyle = "rgba(131,131,131,1)";
    ctx.fill();

    //Window seperation
    ctx.strokeStyle = "rgba(255,255,255,1)";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(384, 181);
    ctx.lineTo(376, 243);
    ctx.stroke();

    //Front door handle
    ctx.beginPath();
    ctx.moveTo(391, 263);
    ctx.bezierCurveTo(399, 265, 405, 268, 405, 270);
    ctx.bezierCurveTo(404, 272, 398, 272, 390, 271);
    ctx.bezierCurveTo(382, 269, 376, 266, 376, 264);
    ctx.bezierCurveTo(377, 262, 383, 262, 391, 263);
    ctx.closePath();
    ctx.fillStyle = "rgba(255,255,255,1)";
    ctx.fill();

    //Back door handle
    ctx.beginPath();
    ctx.moveTo(323, 246);
    ctx.bezierCurveTo(328, 247, 332, 249, 332, 250);
    ctx.bezierCurveTo(332, 252, 327, 252, 321, 251);
    ctx.bezierCurveTo(316, 250, 312, 248, 312, 246);
    ctx.bezierCurveTo(312, 245, 317, 245, 323, 246);
    ctx.closePath();
    ctx.fillStyle = "rgba(255,255,255,1)";
    ctx.fill();

    //Back bumper light
    ctx.beginPath();
    ctx.moveTo(259, 256);
    ctx.bezierCurveTo(259, 248, 258, 244, 262, 239);
    ctx.bezierCurveTo(270, 236, 273, 240, 273, 244);
    ctx.bezierCurveTo(269, 250, 263, 250, 259, 256);
    ctx.closePath();
    ctx.fillStyle = "rgba(198,198,198,1)";
    ctx.fill();

    //Mirror
    ctx.beginPath();
    ctx.moveTo(421, 259);
    ctx.bezierCurveTo(419, 252, 417, 240, 411, 235);
    ctx.bezierCurveTo(406, 231, 383, 231, 376, 233);
    ctx.bezierCurveTo(368, 235, 379, 253, 381, 254);
    ctx.bezierCurveTo(383, 255, 405, 253, 413, 253);
    ctx.bezierCurveTo(415, 254, 419, 257, 421, 259);
    ctx.closePath();
    grad = ctx.createRadialGradient(385, 252, 5, 389, 257, 40);
    grad.addColorStop(0, "rgba(155,12,12,1)");
    grad.addColorStop(1, "rgba(240,26,26,1)");
    ctx.fillStyle = grad;
    ctx.fill();

    //Front bumper
    ctx.beginPath();
    ctx.moveTo(501, 364);
    ctx.bezierCurveTo(550, 364, 678, 370, 696, 365);
    ctx.bezierCurveTo(714, 360, 784, 356, 824, 329);
    ctx.bezierCurveTo(825, 338, 831, 358, 830, 367);
    ctx.bezierCurveTo(829, 376, 826, 381, 825, 389);
    ctx.bezierCurveTo(779, 393, 668, 416, 642, 418);
    ctx.bezierCurveTo(616, 420, 548, 417, 517, 416);
    ctx.bezierCurveTo(513, 403, 505, 377, 501, 364);
    ctx.closePath();
    grad = ctx.createLinearGradient(520, 372, 830, 374);
    grad.addColorStop(0, "rgba(128,5,5,1)");
    grad.addColorStop(1, "rgba(216,3,3,1)");
    ctx.fillStyle = grad;
    ctx.fill();

}

var x, y, x2, y2, x3, y3, x4, y4, x5, y5;
x = y = x2 = y2 = x3 = y3 = 220;
x4 = y4 = x5 = y5 = 210;
var alpha = 0.9;

function drawExhaust() {
    "use strict"
    shapes = document.getElementById("myCanvas");
    ctx = shapes.getContext("2d");

    ctx.clearRect(0, 0, 260, 300);
    grad = ctx.createLinearGradient(511, -12, 479, 691);
    grad.addColorStop(0, "rgba(0,6,90,1)");
    grad.addColorStop(1, "rgba(255,255,255,1)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 260, 300);

    //change position of the puffs
    y -= 1.5;
    x -= 1.5;
    if (y < 0) {
        x = 220;
        y = 220;
    }

    y2 -= 1.5;
    x2 -= 1;
    if (y2 < 0) {
        x2 = 220;
        y2 = 220;
    }

    y3 -= 1;
    x3 -= 1.5;
    if (y3 < 0) {
        x3 = 220;
        y3 = 220;
    }

    y4 -= 1;
    x4 -= 2;
    if (y4 < 0) {
        x4 = 210;
        y4 = 210;
    }

    y5 -= 2;
    x5 -= 1;
    if (y5 < 0) {
        x5 = 210;
        y5 = 210;
    }

    //puff 1
    ctx.beginPath();
    // (x,y,r,sAngle,eAngle,counterclockwise)
    ctx.arc(x, y, 18, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(129,123,123,0.8)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x + 7, y + 15, 15, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(129,123,123,0.8)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x + 15, y, 15, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(129,123,123,0.9)";
    ctx.fill();

    //puff 2
    ctx.beginPath();
    // (x,y,r,sAngle,eAngle,counterclockwise)
    ctx.arc(x2, y2, 18, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(82, 82, 82, 0.62)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x2 + 7, y2 + 15, 15, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(82, 82, 82, 0.62)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x2 + 15, y2, 15, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(82, 82, 82, 0.62)";
    ctx.fill();

    //puff 5
    ctx.beginPath();
    // (x,y,r,sAngle,eAngle,counterclockwise)
    ctx.arc(x5, y5, 20, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(71, 71, 71, 0.88)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x5 + 7, y5 + 20, 15, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(71, 71, 71, 0.88)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x5 + 15, y5, 20, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(71, 71, 71, 0.88)";
    ctx.fill();

    //puff 3
    ctx.beginPath();
    // (x,y,r,sAngle,eAngle,counterclockwise)
    ctx.arc(x3, y3, 17, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(129,123,123,0.8)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x3 + 7, y3 + 20, 15, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(129,123,123,0.9)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x3 + 15, y3, 18, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(129,123,123,0.8)";
    ctx.fill();

    //puff 4
    ctx.beginPath();
    // (x,y,r,sAngle,eAngle,counterclockwise)
    ctx.arc(x4, y4, 20, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(133, 133, 133, 0.88)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x4 + 7, y4 + 20, 15, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(133, 133, 133, 0.88)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x4 + 15, y4, 20, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(133, 133, 133, 0.88)";
    ctx.fill();

}

// connects the value of the input range to control the speed of the animated smoke
function car(speed) {
    clearInterval(intervalTime);
    "use strict";
    shapes = document.getElementById("myCanvas");
    intervalTime = setInterval(drawExhaust, 49 - speed);
}

// 
function drawAll() {
    drawBackground();
    drawCar();
}
