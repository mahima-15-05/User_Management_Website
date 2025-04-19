package com.example.user_management_project.model;

public class User {
    private int id;
    private String name;
    private int age;

    private String username;

    private String password;

    public int getID(){
        return id;
    }

    public void setId(int id){

        this.id = id;
    }public String getPassword(){
        return password;
    }

    public void setPassword(int String){

        this.password = password;
    }

    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name = name;
    }

    public int getAge(){
        return age;
    }

    public void setAge(int age){
        this.age = age;
    }

    public String getUsername(){
        return username;
    }
    public void setUsername(String username){
        this.username=username;
    }

}
