/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tech.tektonidou.EntityBeans;

import com.tech.tektonidou.model.Countries;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/**
 *
 * @author ctekt
 */
public class CountriesFacade extends AbstractFacade<Countries>{
    @PersistenceContext(unitName = "NationPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public CountriesFacade() {
        super(Countries.class);
    }
    
    public Countries findById(Integer country_id) {
        Query q = em.createNamedQuery("Countries.findById");
        q.setParameter("country_id", country_id);

        Countries entity;

        try {
            entity = (Countries) q.getSingleResult();
        } 
        catch (NoResultException e) {
            entity = null;
        }
        return entity;
    }
    
    @Override
    public List<Countries> findAll() {
        Query q = em.createNamedQuery("Countries.findAll");
        List<Countries> cList;

        try {
            cList = q.getResultList();
        } 
        catch (NoResultException e) {
            cList = null;
        }
        return cList;
    }  
}
