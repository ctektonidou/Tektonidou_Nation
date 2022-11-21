/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tech.tektonidou.Controller;
import com.tech.tektonidou.EntityBeans.CountriesFacade;
import com.tech.tektonidou.api.Routes;
import com.tech.tektonidou.repository.CountriesRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.tech.tektonidou.model.Countries;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;

/**
 *
 * @author ctekt
 */
@CrossOrigin( origins = "http://localhost:4200")
@RestController
public class CountriesController {
    
    private static final Logger LOGGER = LoggerFactory.getLogger(CountriesController.class);
    
    @Autowired
    private CountriesRepository countriesRepository;
    private CountriesFacade countriesFacade;
    
    @GetMapping(Routes.COUNTRIES_ROOT)
    public List<Countries> getCountries(){
        LOGGER.trace("get all countries");
        return this.countriesFacade.findAll();
    }
}
