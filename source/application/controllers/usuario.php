<?php
/*
 * ************************************************************************** 
 * 
 * Created on
		2015-7-30 1:57:0
 * 
 * File:
		usuario.php
 * 
 * 
 * 
 * Created for project:
		Crud
 * 
 * Time of creation:
		2015-7-30 1:57:0
 * 
 * ************************************************************************** 
 * ************************************************************************** 
 */
if (!defined('BASEPATH'))
	exit('No direct script access allowed');
class Usuario extends CI_Controller {
	private $fields;
	private $name;
	public function __construct() {
		parent::__construct();
		$this -> load -> model("model_usuario");
		$this -> fields = array();
		$this -> fields[1]='nombres';
		$this -> fields[2]='apellidos';
		$this -> fields[3]='email';
		$this -> fields[4]='genero';
		$this -> fields[5]='nacimiento';
		$this -> fields[6]='registro';
		$this -> fields[7]='usuario';
		$this -> fields[8]='clave';
		$this -> fields[9]='borrado';
		$this -> load -> library('session');
		$this -> name = "usuarioid";
	}
	public function combo() {
		$answer = array();
		$usuario_data = $this -> model_usuario-> getAll();
		$usuarios = array();
		foreach ($usuario_data as $key => $value) {
			$usuarios[$value['id']] = array();
			$usuarios[$value['id']] = $value;
		}
		foreach ($usuarios as $key => $value) {
			$answer[] = array("id" => $value['id'], "usuario" => $value['usuario']);
		}
		header("Content-Type: application/json; charset=utf-8");
		echo json_encode($answer);
	}
	public function all() { //datos
		$answer = array();
		$usuario_data = $this -> model_usuario -> getAll();
    	$usuarios = array();
		foreach ($usuario_data as $key => $value) {
			$usuarios[$value['id']] = array();
			$usuarios[$value['id']] = $value;
		}
		foreach ($usuarios as $key => $value) {
			$answer[] = $value;
		}
		header("Content-Type: application/json; charset=utf-8");
		echo json_encode($answer);
	}
	public function save() {
		$answer = array("success" => "false");
		$data = array();
		$flag = true;
		
		$id = "";
		try{
			$id=$this -> input -> get_post("id", TRUE);	
		}catch(exception $ex){}
		if($id==NULL){
			$id="";
		}
				
		$_POST['registro']=date("Y-m-d");
		$_POST['borrado']='0';// no borrado
		
		foreach ($this->fields as $key => $value) {
			$data[$value] = $this -> input -> get_post($value, TRUE);
			if ($data[$value] == '') {
				$flag = false;
			}
		}
		if ($flag) {
			if(strlen(trim($id))>0){
				$this -> model_usuario -> update($id, $data);
				$answer = array("success" => "true");
			}else{
				$this -> model_usuario -> create($data);
				$answer = array("success" => "true");	
			}
			
		}
		header("Content-Type: application/json; charset=utf-8");
		echo json_encode($answer);
	}
	public function update() {
		$answer = array("success" => "false");
		$id = $this -> input -> get_post("id", TRUE);
		$data = array();
		$flag = true;
		foreach ($this->fields as $key => $value) {
			$data[$value] = $this -> input -> get_post($value, TRUE);
			if ($data[$value] == '') {
				$flag = false;
			}
		}
		if ($flag) {
			$this -> model_usuario -> update($id, $data);
			$answer = array("success" => "true");
		}

		header("Content-Type: application/json; charset=utf-8");
		echo json_encode($answer);
	}
	public function delete() {
		$answer = array("success" => "true");
		$id="";
		if (isset($_SESSION[$this -> name]) == true) {
			$id = $_SESSION[$this -> name];
		}
		$this -> model_usuario -> delete($id);
		header("Content-Type: application/json; charset=utf-8");
		echo json_encode($answer);
	}
	public function session($data) {
		$answer = array("success" => "true");
		$data = trim($data);
		if (strlen($data) > 0) {
			$_SESSION[$this -> name] = $data;
		}
		$answer = array("success" => "true", "session" => $_SESSION[$this -> name]);
		header("Content-Type: application/json; charset=utf-8");
		echo json_encode($answer);
	}
	public function data(){
		$answer = array("success" => "true");
		$id="";
		if (isset($_SESSION[$this -> name]) == true) {
			$id = $_SESSION[$this -> name];
		}
		$data=$this -> model_usuario -> getOne($id);
		if(isset($data['data'])==true){
			$data=$data['data'];
		}else{
			$data=array();
		}
		foreach ($data as $key => $value) {
			$answer[$key]=$value;
		}
		header("Content-Type: application/json; charset=utf-8");
		echo json_encode($answer);
	}
}

/* End of file usuario.php */
/* Location: ./application/controllers/usuario.php */
?>
