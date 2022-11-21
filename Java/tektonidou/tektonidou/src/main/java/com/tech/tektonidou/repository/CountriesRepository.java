/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tech.tektonidou.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.tech.tektonidou.model.Countries;
import org.springframework.stereotype.Repository;

/**
 *
 * @author ctekt
 */
@Repository
public interface CountriesRepository extends JpaRepository<Countries, Long> {
    
}
