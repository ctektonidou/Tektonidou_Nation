/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tech.tektonidou.api;

/**
 *
 * @author ctekt
 */
public class Routes {
    public static final String ID = "identifier";
    public static final String ID_PH = "{" + ID + "}";
    public static final String ROOT_API = "/api";
    public static final String COUNTRIES_ROOT = ROOT_API + "/countries";
    public static final String COUNTRY = COUNTRIES_ROOT + "/" + ID_PH + "/langs";
}
