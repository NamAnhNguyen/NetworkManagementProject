/*
 Navicat Premium Data Transfer

 Source Server         : localhost_5432
 Source Server Type    : PostgreSQL
 Source Server Version : 130001
 Source Host           : localhost:5432
 Source Catalog        : SaleDB
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 130001
 File Encoding         : 65001

 Date: 27/05/2021 08:07:11
*/


-- ----------------------------
-- Table structure for agents
-- ----------------------------
DROP TABLE IF EXISTS "public"."agents";
CREATE TABLE "public"."agents" (
  "agent_code" char(6) COLLATE "pg_catalog"."default" NOT NULL,
  "agent_name" char(40) COLLATE "pg_catalog"."default",
  "working_area" char(35) COLLATE "pg_catalog"."default",
  "commission" numeric(10,2),
  "phone_no" char(15) COLLATE "pg_catalog"."default",
  "country" varchar(25) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of agents
-- ----------------------------
INSERT INTO "public"."agents" VALUES ('A007  ', 'Ramasundar                              ', 'Bangalore                          ', 0.15, '077-25814763   ', '');
INSERT INTO "public"."agents" VALUES ('A003  ', 'Alex                                    ', 'London                             ', 0.13, '075-12458969   ', '');
INSERT INTO "public"."agents" VALUES ('A008  ', 'Alford                                  ', 'New York                           ', 0.12, '044-25874365   ', '');
INSERT INTO "public"."agents" VALUES ('A011  ', 'Ravi Kumar                              ', 'Bangalore                          ', 0.15, '077-45625874   ', '');
INSERT INTO "public"."agents" VALUES ('A010  ', 'Santakumar                              ', 'Chennai                            ', 0.14, '007-22388644   ', '');
INSERT INTO "public"."agents" VALUES ('A012  ', 'Lucida                                  ', 'San Jose                           ', 0.12, '044-52981425   ', '');
INSERT INTO "public"."agents" VALUES ('A005  ', 'Anderson                                ', 'Brisban                            ', 0.13, '045-21447739   ', '');
INSERT INTO "public"."agents" VALUES ('A001  ', 'Subbarao                                ', 'Bangalore                          ', 0.14, '077-12346674   ', '');
INSERT INTO "public"."agents" VALUES ('A002  ', 'Mukesh                                  ', 'Mumbai                             ', 0.11, '029-12358964   ', '');
INSERT INTO "public"."agents" VALUES ('A006  ', 'McDen                                   ', 'London                             ', 0.15, '078-22255588   ', '');
INSERT INTO "public"."agents" VALUES ('A004  ', 'Ivan                                    ', 'Torento                            ', 0.15, '008-22544166   ', '');
INSERT INTO "public"."agents" VALUES ('A009  ', 'Benjamin                                ', 'Hampshair                          ', 0.11, '008-22536178   ', '');

-- ----------------------------
-- Table structure for customers
-- ----------------------------
DROP TABLE IF EXISTS "public"."customers";
CREATE TABLE "public"."customers" (
  "cust_code" varchar(6) COLLATE "pg_catalog"."default" NOT NULL,
  "cust_name" varchar(40) COLLATE "pg_catalog"."default" NOT NULL,
  "cust_city" char(35) COLLATE "pg_catalog"."default",
  "working_area" varchar(35) COLLATE "pg_catalog"."default" NOT NULL,
  "cust_country" varchar(20) COLLATE "pg_catalog"."default" NOT NULL,
  "grade" numeric,
  "opening_amt" numeric(12,2) NOT NULL,
  "receive_amt" numeric(12,2) NOT NULL,
  "payment_amt" numeric(12,2) NOT NULL,
  "outstanding_amt" numeric(12,2) NOT NULL,
  "phone_no" varchar(17) COLLATE "pg_catalog"."default" NOT NULL,
  "agent_code" char(6) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of customers
-- ----------------------------
INSERT INTO "public"."customers" VALUES ('C00013', 'Holmes', 'London                             ', 'London', 'UK', 2, 6000.00, 5000.00, 7000.00, 4000.00, 'BBBBBBB', 'A003  ');
INSERT INTO "public"."customers" VALUES ('C00001', 'Micheal', 'New York                           ', 'New York', 'USA', 2, 3000.00, 5000.00, 2000.00, 6000.00, 'CCCCCCC', 'A008  ');
INSERT INTO "public"."customers" VALUES ('C00020', 'Albert', 'New York                           ', 'New York', 'USA', 3, 5000.00, 7000.00, 6000.00, 6000.00, 'BBBBSBB', 'A008  ');
INSERT INTO "public"."customers" VALUES ('C00025', 'Ravindran', 'Bangalore                          ', 'Bangalore', 'India', 2, 5000.00, 7000.00, 4000.00, 8000.00, 'AVAVAVA', 'A011  ');
INSERT INTO "public"."customers" VALUES ('C00024', 'Cook', 'London                             ', 'London', 'UK', 2, 4000.00, 9000.00, 7000.00, 6000.00, 'FSDDSDF', 'A006  ');
INSERT INTO "public"."customers" VALUES ('C00015', 'Stuart', 'London                             ', 'London', 'UK', 1, 6000.00, 8000.00, 3000.00, 11000.00, 'GFSGERS', 'A003  ');
INSERT INTO "public"."customers" VALUES ('C00002', 'Bolt', 'New York                           ', 'New York', 'USA', 3, 5000.00, 7000.00, 9000.00, 3000.00, 'DDNRDRH', 'A008  ');
INSERT INTO "public"."customers" VALUES ('C00018', 'Fleming', 'Brisban                            ', 'Brisban', 'Australia', 2, 7000.00, 7000.00, 9000.00, 5000.00, 'NHBGVFC', 'A005  ');
INSERT INTO "public"."customers" VALUES ('C00021', 'Jacks', 'Brisban                            ', 'Brisban', 'Australia', 1, 7000.00, 7000.00, 7000.00, 7000.00, 'WERTGDF', 'A005  ');
INSERT INTO "public"."customers" VALUES ('C00019', 'Yearannaidu', 'Chennai                            ', 'Chennai', 'India', 1, 8000.00, 7000.00, 7000.00, 8000.00, 'ZZZZBFV', 'A010  ');
INSERT INTO "public"."customers" VALUES ('C00005', 'Sasikant', 'Mumbai                             ', 'Mumbai', 'India', 1, 7000.00, 11000.00, 7000.00, 11000.00, '147-25896312', 'A002  ');
INSERT INTO "public"."customers" VALUES ('C00007', 'Ramanathan', 'Chennai                            ', 'Chennai', 'India', 1, 7000.00, 11000.00, 9000.00, 9000.00, 'GHRDWSD', 'A010  ');
INSERT INTO "public"."customers" VALUES ('C00022', 'Avinash', 'Mumbai                             ', 'Mumbai', 'India', 2, 7000.00, 11000.00, 9000.00, 9000.00, '113-12345678', 'A002  ');
INSERT INTO "public"."customers" VALUES ('C00004', 'Winston', 'Brisban                            ', 'Brisban', 'Australia', 1, 5000.00, 8000.00, 7000.00, 6000.00, 'AAAAAAA', 'A005  ');
INSERT INTO "public"."customers" VALUES ('C00023', 'Karl', 'London                             ', 'London', 'UK', 0, 4000.00, 6000.00, 7000.00, 3000.00, 'AAAABAA', 'A006  ');
INSERT INTO "public"."customers" VALUES ('C00006', 'Shilton', 'Torento                            ', 'Torento', 'Canada', 1, 10000.00, 7000.00, 6000.00, 11000.00, 'DDDDDDD', 'A004  ');
INSERT INTO "public"."customers" VALUES ('C00010', 'Charles', 'Hampshair                          ', 'Hampshair', 'UK', 3, 6000.00, 4000.00, 5000.00, 5000.00, 'MMMMMMM', 'A009  ');
INSERT INTO "public"."customers" VALUES ('C00017', 'Srinivas', 'Bangalore                          ', 'Bangalore', 'India', 2, 8000.00, 4000.00, 3000.00, 9000.00, 'AAAAAAB', 'A007  ');
INSERT INTO "public"."customers" VALUES ('C00012', 'Steven', 'San Jose                           ', 'San Jose', 'USA', 1, 5000.00, 7000.00, 9000.00, 3000.00, 'KRFYGJK', 'A012  ');
INSERT INTO "public"."customers" VALUES ('C00008', 'Karolina', 'Torento                            ', 'Torento', 'Canada', 1, 7000.00, 7000.00, 9000.00, 5000.00, 'HJKORED', 'A004  ');
INSERT INTO "public"."customers" VALUES ('C00003', 'Martin', 'Torento                            ', 'Torento', 'Canada', 2, 8000.00, 7000.00, 7000.00, 8000.00, 'MJYURFD', 'A004  ');
INSERT INTO "public"."customers" VALUES ('C00009', 'Ramesh', 'Mumbai                             ', 'Mumbai', 'India', 3, 8000.00, 7000.00, 3000.00, 12000.00, 'Phone No', 'A002  ');
INSERT INTO "public"."customers" VALUES ('C00014', 'Rangarappa', 'Bangalore                          ', 'Bangalore', 'India', 2, 8000.00, 11000.00, 7000.00, 12000.00, 'AAAATGF', 'A001  ');
INSERT INTO "public"."customers" VALUES ('C00016', 'Venkatpati', 'Bangalore                          ', 'Bangalore', 'India', 2, 8000.00, 11000.00, 7000.00, 12000.00, 'JRTVFDD', 'A007  ');
INSERT INTO "public"."customers" VALUES ('C00011', 'Sundariya', 'Chennai                            ', 'Chennai', 'India', 3, 7000.00, 11000.00, 7000.00, 11000.00, 'PPHGRTS', 'A010  ');

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS "public"."orders";
CREATE TABLE "public"."orders" (
  "ord_num" numeric(6) NOT NULL,
  "ord_amount" numeric(12,2) NOT NULL,
  "advance_amount" numeric(12,2) NOT NULL,
  "ord_date" date NOT NULL,
  "cust_code" varchar(6) COLLATE "pg_catalog"."default" NOT NULL,
  "agent_code" char(6) COLLATE "pg_catalog"."default" NOT NULL,
  "ord_description" varchar(60) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO "public"."orders" VALUES (200100, 1000.00, 600.00, '2008-08-01', 'C00013', 'A003  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200110, 3000.00, 500.00, '2008-04-15', 'C00019', 'A010  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200107, 4500.00, 900.00, '2008-08-30', 'C00007', 'A010  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200112, 2000.00, 400.00, '2008-05-30', 'C00016', 'A007  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200113, 4000.00, 600.00, '2008-06-10', 'C00022', 'A002  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200102, 2000.00, 300.00, '2008-05-25', 'C00012', 'A012  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200114, 3500.00, 2000.00, '2008-08-15', 'C00002', 'A008  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200122, 2500.00, 400.00, '2008-09-16', 'C00003', 'A004  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200118, 500.00, 100.00, '2008-07-20', 'C00023', 'A006  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200119, 4000.00, 700.00, '2008-09-16', 'C00007', 'A010  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200121, 1500.00, 600.00, '2008-09-23', 'C00008', 'A004  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200130, 2500.00, 400.00, '2008-07-30', 'C00025', 'A011  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200134, 4200.00, 1800.00, '2008-09-25', 'C00004', 'A005  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200108, 4000.00, 600.00, '2008-02-15', 'C00008', 'A004  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200103, 1500.00, 700.00, '2008-05-15', 'C00021', 'A005  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200105, 2500.00, 500.00, '2008-07-18', 'C00025', 'A011  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200109, 3500.00, 800.00, '2008-07-30', 'C00011', 'A010  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200101, 3000.00, 1000.00, '2008-07-15', 'C00001', 'A008  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200111, 1000.00, 300.00, '2008-07-10', 'C00020', 'A008  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200104, 1500.00, 500.00, '2008-03-13', 'C00006', 'A004  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200106, 2500.00, 700.00, '2008-04-20', 'C00005', 'A002  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200125, 2000.00, 600.00, '2008-10-10', 'C00018', 'A005  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200117, 800.00, 200.00, '2008-10-20', 'C00014', 'A001  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200123, 500.00, 100.00, '2008-09-16', 'C00022', 'A002  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200120, 500.00, 100.00, '2008-07-20', 'C00009', 'A002  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200116, 500.00, 100.00, '2008-07-13', 'C00010', 'A009  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200124, 500.00, 100.00, '2008-06-20', 'C00017', 'A007  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200126, 500.00, 100.00, '2008-06-24', 'C00022', 'A002  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200129, 2500.00, 500.00, '2008-07-20', 'C00024', 'A006  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200127, 2500.00, 400.00, '2008-07-20', 'C00015', 'A003  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200128, 3500.00, 1500.00, '2008-07-20', 'C00009', 'A002  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200135, 2000.00, 800.00, '2008-09-16', 'C00007', 'A010  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200131, 900.00, 150.00, '2008-08-26', 'C00012', 'A012  ', 'SOD');
INSERT INTO "public"."orders" VALUES (200133, 1200.00, 400.00, '2008-06-29', 'C00009', 'A002  ', 'SOD');

-- ----------------------------
-- Primary Key structure for table agents
-- ----------------------------
ALTER TABLE "public"."agents" ADD CONSTRAINT "agents_pkey" PRIMARY KEY ("agent_code");

-- ----------------------------
-- Primary Key structure for table customers
-- ----------------------------
ALTER TABLE "public"."customers" ADD CONSTRAINT "customers_pkey" PRIMARY KEY ("cust_code");

-- ----------------------------
-- Primary Key structure for table orders
-- ----------------------------
ALTER TABLE "public"."orders" ADD CONSTRAINT "orders_pkey" PRIMARY KEY ("ord_num");

-- ----------------------------
-- Foreign Keys structure for table customers
-- ----------------------------
ALTER TABLE "public"."customers" ADD CONSTRAINT "customers_agent_code_fkey" FOREIGN KEY ("agent_code") REFERENCES "public"."agents" ("agent_code") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table orders
-- ----------------------------
ALTER TABLE "public"."orders" ADD CONSTRAINT "orders_agent_code_fkey" FOREIGN KEY ("agent_code") REFERENCES "public"."agents" ("agent_code") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."orders" ADD CONSTRAINT "orders_cust_code_fkey" FOREIGN KEY ("cust_code") REFERENCES "public"."customers" ("cust_code") ON DELETE NO ACTION ON UPDATE NO ACTION;
