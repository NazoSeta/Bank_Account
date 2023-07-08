package com.Sugar_Bank.fullstacbackend_Sugar_Bank.model;

import com.Sugar_Bank.fullstacbackend_Sugar_Bank.FullstacBackendSugarBankApplication;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.ArrayList;

@Entity
public class User {

    @Id
    @GeneratedValue
    private Long id;
    private String IBAN = createIBAN();
    private String cardName;
    private double amount;
    private String type;
    private String name;
    private String email;

    private double tempAmount = amount;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIBAN() {
        return IBAN;
    }

    public void setIBAN(String IBAN) {
        this.IBAN = IBAN;
    }

    public String getCardName() {
        return cardName;
    }

    public void setCardName(String cardName) {
        this.cardName = cardName;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
        setTempAmount(this.amount);
    }

    public double getTempAmount() {
        return tempAmount;
    }

    public void setTempAmount(double tempAmount) {
        this.tempAmount = tempAmount;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String createIBAN() {
        String temp = "TR";
        for (int i = 0 ; i < 26 ; i++) {
            if (i%4 == 2) {
                temp = temp + " ";
            }
            temp = temp + (int)(Math.random()*10);
            if (i == 25 && FullstacBackendSugarBankApplication.list.contains(temp)) {
                i = 0;
                temp = "TR";
            }
        }
        FullstacBackendSugarBankApplication.list.add(temp);
        return temp;
    }
}
