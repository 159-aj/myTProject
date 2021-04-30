package com.app.FIBackend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String emailId;
	private String username;
	private String password;

	// @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	// @JoinColumn(name = "logId", referencedColumnName = "id")
	// private List<Logs> log;

	public User() {

	}

	public User(int id, String emailId, String username, String password) {
		super();
		this.id = id;
		this.emailId = emailId;
		this.username = username;
		this.password = password;
		// this.log = new ArrayList<Logs>();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getUsername() {
		return username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	// public List<Logs> getLog() {
	// return log;
	// }

	// public void setLog(List<Logs> log) {
	// this.log = log;
	// }

	@Override
	public String toString() {
		return "User [id=" + id + ", emailId=" + emailId + ", userName=" + username + ", password=" + password + "]";
	}

}
