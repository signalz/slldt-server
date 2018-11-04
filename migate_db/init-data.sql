--Role
INSERT INTO public.role(
	id, name, created_by, created_date, updated_by, updated_date)
	VALUES ('52ca2335-8a10-4f5e-8538-4fc8e8a2a6d2', 'ADMIN', '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now());

INSERT INTO public.role(
	id, name, created_by, created_date, updated_by, updated_date)
	VALUES ('1ea3be18-f1b4-4448-b0e4-efc8e1cb3259', 'TEACHER', '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now());

INSERT INTO public.role(
	id, name, created_by, created_date, updated_by, updated_date)
	VALUES ('c4066b18-3cfe-4b0e-aae7-f9b6f9abea76', 'PARENT', '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now());

--User
INSERT INTO public."user"(
	id, user_name, password, name, date_of_birth, mail, phone, address, created_by, created_date, updated_by, updated_date, role_id)
	VALUES ('8a48f9f5-a38d-4c57-b795-9cc3a26186ca', 'admin', '$2a$10$gyV1hkPk0gBYur0bTXxkaee3.d.CDEDdLfN5SOPUDHAeZOF57IUQa', 'administrator', now(), 'admin@test.com', '0943434', 'Address', '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '52ca2335-8a10-4f5e-8538-4fc8e8a2a6d2');

INSERT INTO public."user"(
	id, user_name, password, name, date_of_birth, mail, phone, address, created_by, created_date, updated_by, updated_date, role_id)
	VALUES ('d9b32dc4-fee6-4be1-b3c1-fdc36b943d95', 'teacher', '$2a$10$gyV1hkPk0gBYur0bTXxkaee3.d.CDEDdLfN5SOPUDHAeZOF57IUQa', 'teacher', now(), 'teacher@test.com', '0943434', 'Address', '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '1ea3be18-f1b4-4448-b0e4-efc8e1cb3259');

INSERT INTO public."user"(
	id, user_name, password, name, date_of_birth, mail, phone, address, created_by, created_date, updated_by, updated_date, role_id)
	VALUES ('4a7d8172-0a17-4b3b-8213-b7a8a3ae9436', 'parent', '$2a$10$gyV1hkPk0gBYur0bTXxkaee3.d.CDEDdLfN5SOPUDHAeZOF57IUQa', 'parent', now(), 'parent@test.com', '0943434', 'Address', '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), 'c4066b18-3cfe-4b0e-aae7-f9b6f9abea76');

--Function
INSERT INTO public.function(
	function_id, function_name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES (1, 'Create User', 'POST', '/users', 1, now(), 1, now());

INSERT INTO public.function(
	function_id, function_name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES (2, 'Modify User', 'PATCH', '/users', 1, now(), 1, now());

INSERT INTO public.function(
	function_id, function_name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES (3, 'Delete User', 'DELETE', '/users', 1, now(), 1, now());

INSERT INTO public.function(
	function_id, function_name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES (16, 'Search User', 'GET', '/users', 1, now(), 1, now());

INSERT INTO public.function(
	function_id, function_name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES (4, 'Create Student', 'POST' ,'/students', 1, now(), 1, now());

INSERT INTO public.function(
	function_id, function_name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES (5, 'Modify Student', 'PATCH' ,'/students', 1, now(), 1, now());

INSERT INTO public.function(
	function_id, function_name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES (6, 'Delete Student', 'DELETE' ,'/students', 1, now(), 1, now());

INSERT INTO public.function(
	function_id, function_name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES (7, 'Search Student', 'GET' ,'/students', 1, now(), 1, now());

INSERT INTO public.function(
	function_id, function_name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES (9, 'Create Class', 'POST', '/classes', 1, now(), 1, now());

INSERT INTO public.function(
	function_id, function_name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES (10, 'Modify Class', 'PATCH', '/classes', 1, now(), 1, now());

INSERT INTO public.function(
	function_id, function_name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES (11, 'Delete Class', 'DELETE', '/classes', 1, now(), 1, now());

INSERT INTO public.function(
	function_id, function_name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES (12, 'Search Class', 'GET', '/classes', 1, now(), 1, now());

INSERT INTO public.function(
	function_id, function_name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES (14, 'Notify', 'POST', '/notify', 1, now(), 1, now());

INSERT INTO public.function(
	function_id, function_name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES (15, 'Login', 'POST', '/login', 1, now(), 1, now());

--Role_Function
INSERT INTO public.role_function(
	role_id, function_id, created_by, created_date, updated_by, updated_date)
	VALUES (1, 1, 1, now(), 1, now());

INSERT INTO public.role_function(
	role_id, function_id, created_by, created_date, updated_by, updated_date)
	VALUES (1, 2, 1, now(), 1, now());

INSERT INTO public.role_function(
	role_id, function_id, created_by, created_date, updated_by, updated_date)
	VALUES (1, 3, 1, now(), 1, now());

INSERT INTO public.role_function(
	role_id, function_id, created_by, created_date, updated_by, updated_date)
	VALUES (2, 4, 1, now(), 1, now());

INSERT INTO public.role_function(
	role_id, function_id, created_by, created_date, updated_by, updated_date)
	VALUES (2, 5, 1, now(), 1, now());

INSERT INTO public.role_function(
	role_id, function_id, created_by, created_date, updated_by, updated_date)
	VALUES (2, 6, 1, now(), 1, now());

INSERT INTO public.role_function(
	role_id, function_id, created_by, created_date, updated_by, updated_date)
	VALUES (2, 7, 1, now(), 1, now());

INSERT INTO public.role_function(
	role_id, function_id, created_by, created_date, updated_by, updated_date)
	VALUES (2, 9, 1, now(), 1, now());

INSERT INTO public.role_function(
	role_id, function_id, created_by, created_date, updated_by, updated_date)
	VALUES (2, 10, 1, now(), 1, now());

INSERT INTO public.role_function(
	role_id, function_id, created_by, created_date, updated_by, updated_date)
	VALUES (2, 11, 1, now(), 1, now());

INSERT INTO public.role_function(
	role_id, function_id, created_by, created_date, updated_by, updated_date)
	VALUES (2, 12, 1, now(), 1, now());

INSERT INTO public.role_function(
	role_id, function_id, created_by, created_date, updated_by, updated_date)
	VALUES (2, 14, 1, now(), 1, now());

INSERT INTO public.role_function(
	role_id, function_id, created_by, created_date, updated_by, updated_date)
	VALUES (2, 15, 1, now(), 1, now());

INSERT INTO public.role_function(
	role_id, function_id, created_by, created_date, updated_by, updated_date)
	VALUES (3, 15, 1, now(), 1, now());

INSERT INTO public.role_function(
	role_id, function_id, created_by, created_date, updated_by, updated_date)
	VALUES (1, 16, 1, now(), 1, now());


--User_role
INSERT INTO public.user_role(
	role_id, user_id, created_by, created_date, updated_by, updated_date)
	VALUES (1, 1, 1, now(), 1, now());

INSERT INTO public.user_role(
	role_id, user_id, created_by, created_date, updated_by, updated_date)
	VALUES (2, 2, 1, now(), 1, now());

INSERT INTO public.user_role(
	role_id, user_id, created_by, created_date, updated_by, updated_date)
	VALUES (3, 3, 1, now(), 1, now());
