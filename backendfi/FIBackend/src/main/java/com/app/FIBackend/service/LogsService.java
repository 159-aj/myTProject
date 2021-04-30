package com.app.FIBackend.service;

import java.util.List;

import com.app.FIBackend.model.Logs;
import com.app.FIBackend.repository.LogsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LogsService {

    @Autowired
    LogsRepository logsRepo;

    public Logs postLogs(Logs log) {
        return logsRepo.save(log);

    }

    public List<Logs> fetchLogs(int id) {
        return logsRepo.findByUserId(id);

    }

}
