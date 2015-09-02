<?php
/*
 * ************************************************************************** 
 * 
 * Created on
		2015-7-30 1:57:0
 * 
 * File:
		genero.php
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
class Genero extends CI_Controller {
	private $fields;
	private $name;
	public function __construct() {
		parent::__construct();
		$this -> load -> model("model_genero");
		$this -> fields = array();
		$this -> fields[1]='genero';
		$this -> load -> library('session');
		$this -> name = "generoid";
	}
	public function combo() {
		$answer = array();
		$genero_data = array(
			array("id"=>"M","genero"=>"masculino"),
			array("id"=>"F","genero"=>"femenino")
		);
		$generos = array();
		foreach ($genero_data as $key => $value) {
			$generos[$value['id']] = array();
			$generos[$value['id']] = $value;
		}
		foreach ($generos as $key => $value) {
			$answer[] = array("id" => $value['id'], "genero" => $value['genero']);
		}
		header("Content-Type: application/json; charset=utf-8");
		echo json_encode($answer);
	}
	public function all() { //datos
		$answer = array();
		$genero_data = array(
			array("id"=>"M","genero"=>"masculino"),
			array("id"=>"F","genero"=>"femenino")
		);
    	$generos = array();
		foreach ($genero_data as $key => $value) {
			$generos[$value['id']] = array();
			$generos[$value['id']] = $value;
		}
		foreach ($generos as $key => $value) {
			$answer[] = $value;
		}
		header("Content-Type: application/json; charset=utf-8");
		echo json_encode($answer);
	}
	public function save() {
		$answer = array("success" => "false");
		$data = array();
		$flag = true;
		foreach ($this->fields as $key => $value) {
			$data[$value] = $this -> input -> get_post($value, TRUE);
			if ($data[$value] == '') {
				$flag = false;
			}
		}
		if ($flag) {
			$this -> model_genero -> create($data);
			$answer = array("success" => "true");
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
			$this -> model_genero -> update($id, $data);
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
		$this -> model_genero -> delete($id);
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
		$data=$this -> model_genero -> getOne($id);
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

/* End of file genero.php */
/* Location: ./application/controllers/genero.php */
?>
