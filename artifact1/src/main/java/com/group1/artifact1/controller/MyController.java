package com.group1.artifact1.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/")
public class MyController {

    @GetMapping(value="/hello")
    public String sayHello() {

        return "Hello there!";
    }
}
