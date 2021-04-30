package com.app.FIBackend.controller;

import com.app.FIBackend.model.User;
import com.app.FIBackend.service.RegistrationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class RegistrationController {
	
	@Autowired
	private RegistrationService service;
	
	@PostMapping("/registeruser" )
	@CrossOrigin(origins = "https://localhost:4200")
	public User registerUser(@RequestBody User user) throws Exception {
		String tempEmailId = user.getEmailId();
		
//		System.out.print(user.toString());
		if(tempEmailId!=null  && !"".equals(tempEmailId)) {
			User userobj = service.fetchUserByEmailId(tempEmailId);
			if(userobj != null) {
				throw new Exception("User Id "+tempEmailId+" already exists");
			}
			
		}
		User userObj=null;
//		System.out.print(userObj);
		userObj = service.saveUser(user);
//		System.out.print(userObj);
		return userObj;
	
	}
	
	@PostMapping("/login")
	public User loginUser(@RequestBody User user) throws Exception {
		String tempEmailId = user.getEmailId();
		String tempPass = user.getPassword();
		User userObj =null;
		if(tempEmailId != null && tempPass != null) {
			
			userObj = service.fetchUserByEmailIdAndPassword(tempEmailId, tempPass);
		}
		if(userObj == null) {
			throw new Exception("wrong credentials");
		}
		return userObj;
	}
	
}
