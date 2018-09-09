-- Exported from QuickDBD: https://www.quickdatatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/schema/I95TiXKsvU6JJeOxVz9KWQ
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

CREATE TABLE "student" (
  "student_id" int NOT NULL,
  "student_name" varchar(200) NOT NULL,
  "admission_date" date,
  "date_of_birth" date,
  "school" varchar(200),
  "parent_name" varchar(200),
  "parent_phone" varchar(200),
  "parent_mail" varchar(200),
  "adress" varchar(200),
  "created_by" int NOT NULL,
  "created_date" date NOT NULL,
  "updated_by" int NOT NULL,
  "dated_date" date NOT NULL,
  CONSTRAINT "pk_student" PRIMARY KEY (
    "student_id"
   )
);

CREATE TABLE "score" (
  "student_id" int NOT NULL,
  "month" varchar(200) NOT NULL,
  "score" varchar(200) NOT NULL,
  "link" varchar(200),
  -- "file_upload_id" int,
  "created_by" int NOT NULL,
  "created_date" date NOT NULL,
  "updated_by" int NOT NULL,
  "updated_date" date NOT NULL,
  CONSTRAINT "pk_score" PRIMARY KEY (
    "student_id","month"
   )
);

--CREATE TABLE "files" (
--  "file_id" int NOT NULL,
--  "content" blob,
--  "created_by" int NOT NULL,
--  "created_date" date NOT NULL,
--  "updated_by" int NOT NULL,
--  "updated_date" date NOT NULL,
--  CONSTRAINT "pk_files" PRIMARY KEY (
--    "file_id"
--   )
--);

CREATE TABLE "notify" (
  "notify_id" int NOT NULL,
  "student_id" int NOT NULL,
  "content" varchar(200),
  "created_by" int NOT NULL,
  "created_date" date NOT NULL,
  "updated_by" int NOT NULL,
  "updated_date" date NOT NULL,
  CONSTRAINT "pk_notify" PRIMARY KEY (
    "notify_id","student_id"
   )
);

CREATE TABLE "class" (
  "class_id" int NOT NULL,
  "class_name" varchar(200) NOT NULL,
  "teacher_name" varchar(200),
  "teacher_phone" varchar(200),
  "created_by" int NOT NULL,
  "created_date" date NOT NULL,
  "updated_by" int NOT NULL,
  "updated_date" date NOT NULL,
  CONSTRAINT "pk_class" PRIMARY KEY (
    "class_id"
   )
);

CREATE TABLE "class_student" (
  "class_id" int NOT NULL,
  "student_id" int NOT NULL,
  "created_by" int NOT NULL,
  "created_date" date NOT NULL,
  "updated_by" int NOT NULL,
  "updated_date" date NOT NULL,
  CONSTRAINT "pk_class_student" PRIMARY KEY (
    "class_id","student_id"
   )
);

CREATE TABLE "user" (
  "user_id" int NOT NULL,
  "user_name" varchar(200) NOT NULL,
  "password" varchar(100) NOT NULL,
  "name" varchar(200) NOT NULL,
  "date_of_birth" date,
  "mail" varchar(100),
  "phone" varchar(100),
  "address" varchar(100),
  "created_by" int NOT NULL,
  "created_date" date NOT NULL,
  "updated_by" int NOT NULL,
  "updated_date" date NOT NULL,
  CONSTRAINT "pk_user" PRIMARY KEY (
    "user_id"
   )
);

CREATE TABLE "role" (
  "role_id" int NOT NULL,
  "role_name" varchar(200),
  "created_by" int NOT NULL,
  "created_date" date NOT NULL,
  "updated_by" int NOT NULL,
  "updated_date" date NOT NULL,
  CONSTRAINT "pk_role" PRIMARY KEY (
    "role_id"
   )
);

CREATE TABLE "user_role" (
  "role_id" int NOT NULL,
  "user_id" int NOT NULL,
  "created_by" int NOT NULL,
  "created_date" date NOT NULL,
  "updated_by" int NOT NULL,
  "updated_date" date NOT NULL,
  CONSTRAINT "pk_user_role" PRIMARY KEY (
    "role_id","user_id"
   )
);

CREATE TABLE "function" (
  "function_id" int NOT NULL,
  "path" varchar(100) NOT NULL,
  "created_by" int NOT NULL,
  "created_date" date NOT NULL,
  "updated_by" int NOT NULL,
  "updated_date" date NOT NULL,
  CONSTRAINT "pk_function" PRIMARY KEY (
    "function_id"
   )
);

CREATE TABLE "role_function" (
  "role_id" int NOT NULL,
  "function_id" int NOT NULL,
  "created_by" int NOT NULL,
  "created_date" date NOT NULL,
  "updated_by" int NOT NULL,
  "updated_date" date NOT NULL,
  CONSTRAINT "pk_role_function" PRIMARY KEY (
    "role_id","function_id"
   )
);

-- Free plan table limit reached. SUBSCRIBE for more.



ALTER TABLE "score" ADD CONSTRAINT "fk_score_student_id" FOREIGN KEY("student_id")
REFERENCES "student" ("student_id");

-- ALTER TABLE "score" ADD CONSTRAINT "fk_score_file_upload_id" FOREIGN KEY("file_upload_id")
-- REFERENCES "files" ("file_id");

ALTER TABLE "notify" ADD CONSTRAINT "fk_notify_student_id" FOREIGN KEY("student_id")
REFERENCES "student" ("student_id");

ALTER TABLE "class_student" ADD CONSTRAINT "fk_class_student_class_id" FOREIGN KEY("class_id")
REFERENCES "class" ("class_id");

ALTER TABLE "class_student" ADD CONSTRAINT "fk_class_student_student_id" FOREIGN KEY("student_id")
REFERENCES "student" ("student_id");

ALTER TABLE "user_role" ADD CONSTRAINT "fk_user_role_role_id" FOREIGN KEY("role_id")
REFERENCES "role" ("role_id");

ALTER TABLE "user_role" ADD CONSTRAINT "fk_user_role_user_id" FOREIGN KEY("user_id")
REFERENCES "user" ("user_id");

ALTER TABLE "role_function" ADD CONSTRAINT "fk_role_function_role_id" FOREIGN KEY("role_id")
REFERENCES "role" ("role_id");

ALTER TABLE "role_function" ADD CONSTRAINT "fk_role_function_function_id" FOREIGN KEY("function_id")
REFERENCES "function" ("function_id");
-- Free plan table limit reached. SUBSCRIBE for more.



-- Free plan table limit reached. SUBSCRIBE for more.



