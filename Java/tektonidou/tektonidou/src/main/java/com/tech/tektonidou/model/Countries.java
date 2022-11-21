/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tech.tektonidou.model;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

/**
 *
 * @author ctekt
 */
@Entity
@Table(name = "countries")
@NamedQueries({
@NamedQuery(name = "Countries.findAll", query = "SELECT se FROM Countries se"), 
@NamedQuery(name = "Countries.findById", query = "SELECT se FROM Countries se WHERE se.ISBN = :ISBN"),
@NamedQuery(name = "Countries.findByTitle", query = "SELECT se FROM Countries se WHERE se.title LIKE :title"),
@NamedQuery(name = "Countries.findByCategory", query = "SELECT se FROM Countries se WHERE se.category LIKE :category")
})
public class Countries implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "country_id")
    private Integer country_id;
    
    @Column(name = "name")
    private String name;

    @Column(name = "area")
    private String area;
    
    @Column(name = "country_code2")
    private String country_code2;

    @Column(name = "country_code3")
    private String country_code3;
    
    @Lob
    @Column(name = "region_id")
    private Integer region_id;
    
    @Column(name = "national_date")
    private String national_date;
    
    public Countries(){
        
    }

    public Countries(String name, String area, String country_code2, String country_code3, Integer region_id, String national_date) {
        this.name = name;
        this.area = area;
        this.country_code2 = country_code2;
        this.country_code3 = country_code3;
        this.region_id = region_id;
        this.national_date = national_date;
    }

    public Integer getCountry_id() {
        return country_id;
    }

    public void setCountry_id(Integer country_id) {
        this.country_id = country_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getCountry_code2() {
        return country_code2;
    }

    public void setCountry_code2(String country_code2) {
        this.country_code2 = country_code2;
    }

    public String getCountry_code3() {
        return country_code3;
    }

    public void setCountry_code3(String country_code3) {
        this.country_code3 = country_code3;
    }

    public Integer getRegion_id() {
        return region_id;
    }

    public void setRegion_id(Integer region_id) {
        this.region_id = region_id;
    }

    public String getNational_date() {
        return national_date;
    }

    public void setNational_date(String national_date) {
        this.national_date = national_date;
    }
    
    
}
