<?php
require '../../../vendor/autoload.php';
use Ahc\Jwt\JWT;
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
global $request,$errores;
$arreglo = array();
$type = $request->type;
$database = $request->database;
$uid = $request->uid;
$pwd = $request->pwd;
$connectionInfo = array();

if ($type == 'E') {

$jwt = new JWT('secret');

$encryption = $jwt->encode([
    'Database'    => $database,
    'UID'    => $uid,
    'PWD' => $pwd,
    'CharacterSet' => 'UTF-8',
]);
	$res = array('codigo'=>0,'mensaje'=>'Se genero el archivo encriptado', 'encryption' => $encryption);
	echo json_encode($res);	

} else {
	$jwt = new JWT('secret');
	$respuesta = $jwt->decode('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJEYXRhYmFzZSI6IjEyMzEyMyIsIlVJRCI6ImRzYWFzZGFkIiwiUFdEIjoiMTMyMTMyMzIxIiwiQ2hhcmFjdGVyU2V0IjoiVVRGLTgiLCJleHAiOjE2NjQ4MTY0MzN9.sDI-j1ez5kiE2u8aClyjDmFbaCChr7MmsWrZ9boxuDs', false);
	print_r($respuesta);
}
?>