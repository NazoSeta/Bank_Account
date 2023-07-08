package com.Sugar_Bank.fullstacbackend_Sugar_Bank;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;

@SpringBootApplication
public class FullstacBackendSugarBankApplication {

	public static ArrayList<String> list = new ArrayList<String>();

	public static void main(String[] args) {
		SpringApplication.run(FullstacBackendSugarBankApplication.class, args);
	}

}
