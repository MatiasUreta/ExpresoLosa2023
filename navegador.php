<?php
$servidor = ControladorRuta::ctrRutaServidor();
$cabecera = ControladorCabecera::ctrMostrarCabecera();
$footer = ControladorFooter::ctrMostrarFooter();


if(isset($_SESSION["validarSesion"])){

	if($_SESSION["validarSesion"] == "ok"){

		echo '<script>

			localStorage.setItem("usuario","'.$_SESSION["id"].'");

		</script>';

	}

}


foreach ($cabecera as $key => $colBoton) {

}

foreach ($cabecera as $key => $loguito) {

}
foreach ($footer as $key => $val) {

}
 ?>



 <div id="top_line" style="background:<?php echo $colBoton["colorBarra"];?>">
     <div class="container">
       <div class="row">
         <div class="col-sm-4 d-none d-md-block mt-2">

           <span><?php echo $loguito["contacto"]; ?>  <?php echo $loguito["contactoTxt"]; ?></span>

         </div>
         <div class="col-sm-8">

           <ul id="top_links">
             <li>

               <a href=""><i class="fa fa-phone ruedita" style="color: <?php echo $colBoton["color"]; ?>"></i><?php echo '<a style="color: '.$colBoton["colorTxtBarra"].'" href="tel:'.$val["tele"].'">'.$val["tele"].'</a>'; ?></a>
              <i class="fab fa-whatsapp ruedita" style="font-weight: 900;color: <?php echo $colBoton["color"]; ?>"></i><?php echo '<a style="color: '.$colBoton["colorTxtBarra"].'" href="tel:'.$val["celu"].'">'.$val["celu"].'</a>'; ?>
             </li>

           </ul>
					 <ul id="top_links" class="social-iconsNav mr-4">
							<?php include 'assets/modulos/redesSociales.php'; ?>
					</ul>
         </div>
       </div><!-- End row -->
     </div><!-- End container-->
   </div>
<header class="fixed-topn principal2"  id="navbars" >

   <div class="row bg-lightn " style="box-shadow: -2px 5px 5px rgba(0,0,0,.3);" >
   <div class="container">
   <nav class="navbar  navbar-expand-lg " >
		 <?php
		 echo '<a class="navbar-brands logo" href="'.$url.'">
			 <img src="'.$servidor.''.$loguito["logo"].'" >
		 </a>';

			?>

   <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
     <!-- <span class="navbar-toggler-icon"></span> -->

		 <i class="fas fa-bars hambur"></i>
   </button>







   <div class="collapse navbar-collapse " id="navbarTogglerDemo03">
     <ul class="navbar-nav ml-auto mt-2 mt-lg-0">

       <?php

       foreach ($cabecera as $key => $value) {
         $jsonLinks = json_decode($value["links"],true);

          foreach ($jsonLinks as $key => $elLink) {

            echo '
            <li class="nav-item1" style="">
            <a class="nav-link text-center" href="'.$elLink["url"].'">
            '.$elLink["link"].'<span class="sr-only">(current)</span>
            </a>
            </li>
            ';

          }
       }

        ?>

     </ul>

<?php

         echo '<div class="text-center">
           <a href="http://logisticalosa.digitaltres.com.ar" class="mx-auto ">
           <button type="button" class="btn btn-danger cliente">SEGUIMIENTO</button>
          </a>
         </div>';
       

 ?>


 </nav>
</div>
</div>




<div class="btCurveHeader" id="adorno">
			<div class="btCurveHolder">
				<div class="btCurveLeftHolder">
					<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="20px" viewBox="0 0 80 20" enable-background="new 0 0 80 20" xml:space="preserve">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M 81 20 c 0 0 -16 0 -30 0 c -30 0 -23 -15 -50 -15 l 0 -5 L 81 0 L 81 20 Z" class="btCurveLeft"></path>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M 81 -1 L 31 -1 c 27 -1 21 15 51 16 C 82 3 82 -1 82 -1 Z" class="btCurveLeftFill"></path>
					</svg>
				</div>
				<div class="btCurveRightHolder">
					<svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="20px" viewBox="0 0 80 20" enable-background="new 0 0 80 20" xml:space="preserve">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M 0 20 c 0 0 16 0 30 0 c 30 0 23 -15 50 -15 l 0 -5 L 0 0 L 0 20 Z" class="btCurveRight"></path>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M -1 -1 L 50 -1 C 23 -1 30 15 -1 15 C -1 3 -1 -1 -1 -1 Z" class="btCurveRightFill"></path>
					</svg>
				</div>
				<div class="btSiteHeaderCurveSleeve"></div>
			</div>
		</div>






</header>





<!--=====================================
VENTANA MODAL PARA EL INGRESO
======================================-->

<div class="modal fade modalFormulario" id="modalIngreso" role="dialog">

    <div class="modal-content modal-dialog">

      <div style="background: <?php echo $colBoton["color"]; ?>; padding: 10px;">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h3 class="text-center text-white mt-2">INGRESAR</h3>
      </div>

        <div class="modal-body ">







			<!--=====================================
			INGRESO DIRECTO
			======================================-->

			<form method="post">



				<div class="form-group">

					<div class="input-group">

						<span class="input-group-addon">
              <i class="fas fa-envelope mr-3 mt-2" style="font-size: 30px;color: #c1c1c1"></i>


						</span>

						<input type="email" class="form-control" id="ingEmail" name="ingEmail" placeholder="Correo Electrónico" required>

					</div>

				</div>

				<div class="form-group">

					<div class="input-group">

						<span class="input-group-addon">

							<i class="fas fa-key mr-3 mt-2" style="font-size: 30px;color: #c1c1c1"></i>

						</span>

						<input type="password" class="form-control" id="ingPassword" name="ingPassword" placeholder="Contraseña" required>

					</div>

				</div>



				<?php

					$ingreso = new ControladorClientes();
					$ingreso -> ctrIngresoCliente();

				?>

				<input type="submit" class="btn btn-default btn-success btn-block btnIngreso" value="INGRESAR">

				<br>


			</form>

        </div>



    </div>

</div>
