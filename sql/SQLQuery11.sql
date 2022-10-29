
create database isdm_project;
use isdm_project;


CREATE TABLE Customer(
Customer_ID char(5),First_name varchar(50),Last_name varchar(50),Phone_NO int,
Email varchar(50),Gender char(1),Age int
);
CREATE TABLE Employee(
Emp_id char(5),First_name varchar(50),Last_name varchar(50),Phone_NO int,
Email varchar(50),Gender char(1),Emp_Address varchar(100),DOB date,Age int);

CREATE TABLE LAND(
Land_id char(5),Land_type varchar(15),Land_location varchar(50),Land_size float(10),Land_Price FLOAT(50));

CREATE TABLE Payment(
Payment_ID char(10),Payment_Type varchar(20),Payment_Description varchar(100),Payment_Amount FLOAT(10));

CREATE TABLE CARD(
Card_No char(16),CVV_NO char(3),Holders_name varchar(50),Exp_Date char(10));

CREATE TABLE Auction(
Auction_ID char(10),Auction_Description varchar(100),Auction_Date date,Auction_Time time);

CREATE TABLE User_Statement(
Statement_ID char(10),Statement_Description varchar (100) );

CREATE TABLE Report(
Report_ID char(10),Report_Description varchar(100));

CREATE TABLE Admin(
Admin_ID char(10));

CREATE TABLE Agent(
Agent_ID char(10),Agent_Area varchar(100));

CREATE TABLE Manager(
Manager_ID char(10)
);
drop table Admin;