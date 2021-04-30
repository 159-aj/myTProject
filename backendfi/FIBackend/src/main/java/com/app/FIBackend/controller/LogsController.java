package com.app.FIBackend.controller;

import java.util.List;

import com.app.FIBackend.model.Logs;
import com.app.FIBackend.model.User;
import com.app.FIBackend.repository.RegistrationRepository;
import com.app.FIBackend.requestBody.LogsRequestBody;
import com.app.FIBackend.service.LogsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LogsController {

    @Autowired
    LogsService logsService;

    @Autowired
    RegistrationRepository registrationRepository;

    @PostMapping("/postLogs")
    public List<Logs> postLogs(@RequestBody LogsRequestBody log) {
        User user = registrationRepository.findById(log.getUserId()).get();
        Logs mainLog = new Logs(log.getResponse(), log.getDate(), log.getFileName(), user);
        logsService.postLogs(mainLog);
        return logsService.fetchLogs(log.getUserId());
    }

    @GetMapping("/getlogs/{id}")
    public List<Logs> fetchLogs(@PathVariable int id) {
        return logsService.fetchLogs(id);
    }
}
