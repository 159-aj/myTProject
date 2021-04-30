package com.app.FIBackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.FIBackend.model.User;
import com.app.FIBackend.repository.RegistrationRepository;

@Service
public class RegistrationService {
	
	@Autowired
	private RegistrationRepository repo;
	public User saveUser(User user) {
		
		 return repo.save(user);
		
	}
	
	public User fetchUserByEmailId(String email) {
		return repo.findByEmailId(email);	
		
	}
	
	public User fetchUserByEmailIdAndPassword(String email, String password) {
		return repo.findByEmailIdAndPassword(email, password);	
		
	}

}
