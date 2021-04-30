package com.app.FIBackend.requestBody;

public class LogsRequestBody {
    private String response;
    private String date;

    private String fileName;
    private int userId;

    public LogsRequestBody() {
    }

    public LogsRequestBody(String response, String date, String fileName, int userId) {
        this.response = response;
        this.date = date;
        this.fileName = fileName;
        this.userId = userId;
    }

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

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}
