package com.app.FIBackend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Logs {

	private String response;
	private String date;

	private String fileName;

	@ManyToOne()
	private User user;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;

	public Logs() {
	}

	public Logs(String response, String date, String fileName, User user) {
		super();
		this.response = response;
		this.date = date;
		this.fileName = fileName;
		this.user = user;
	}

	// public int getLogId() {
	// return logId;
	// }

	// public void setLogId(int logId) {
	// this.logId = logId;
	// }
	public String getResponse() {
		return response;
	}

	public void setResponse(String response) {
		this.response = response;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

}
