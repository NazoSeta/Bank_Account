package com.Sugar_Bank.fullstacbackend_Sugar_Bank.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id) {
       super("Could not found the bank account with the id: " + id);
    }
}
