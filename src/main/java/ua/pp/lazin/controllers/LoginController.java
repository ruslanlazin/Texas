package ua.pp.lazin.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author Ruslan Lazin
 */

@Controller
public class LoginController {


    @RequestMapping({"/", "/login", "/register"})
    public String doLogin() {
        System.out.println("jhjhj");
        return "index2";
    }
}
