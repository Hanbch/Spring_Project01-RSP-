package edu.hi.ex.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import edu.hi.ex.vo.Rsp;

@Controller
public class MainController {

	@GetMapping("/main")
	public String main(Rsp rsp){
		
		return "main";
	}
	
	@PostMapping("/result_page")
	public String result_page(Rsp rsp){
		
		return "result_page";
	}
	

}
