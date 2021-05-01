package com.victolee.stamp.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainContoller {
    @GetMapping("/api")
    public String main() {
        return "hello";
    }
}
