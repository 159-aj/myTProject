package com.app.FIBackend.repository;

import java.util.List;

import com.app.FIBackend.model.Logs;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LogsRepository extends JpaRepository<Logs, Integer> {

    List<Logs> findByUserId(int id);
}
