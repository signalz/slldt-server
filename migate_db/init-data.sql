--User
INSERT INTO public."user"(
	user_id, user_name, password, name, date_of_birth, mail, phone, address, created_by, created_date, updated_by, updated_date)
	VALUES (1, 'hieutc', '$2a$10$gyV1hkPk0gBYur0bTXxkaee3.d.CDEDdLfN5SOPUDHAeZOF57IUQa', 'Hieu Trinh', now(), 'hieutrinh54@gmail.com', '0943434', 'Address', 1, now(), 1, now());

--Role
INSERT INTO public.role(
	role_id, role_name, created_by, created_date, updated_by, updated_date)
	VALUES (1, 'ADMIN', 1, now(), 1, now());
			
INSERT INTO public.role(
	role_id, role_name, created_by, created_date, updated_by, updated_date)
	VALUES (2, 'TEACHER', 1, now(), 1, now());

INSERT INTO public.role(
	role_id, role_name, created_by, created_date, updated_by, updated_date)
	VALUES (3, 'PARENT', 1, now(), 1, now());

--Function
INSERT INTO public.function(
	function_id, function_name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES (1, 'Create User', 'POST', '/users', 1, now(), 1, now());

INSERT INTO public.function(
	function_id, function_name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES (2, 'Modify User', 'PATCH', '/users/*', 1, now(), 1, now());

INSERT INTO public.function(
	function_id, function_name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES (3, 'Delete User', 'DELETE', '/users/*', 1, now(), 1, now());

INSERT INTO public.function(
	function_id, function_name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES (4, 'Create Student', 'POST' ,'/students', 1, now(), 1, now());

INSERT INTO public.function(
	function_id, function_name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES (5, 'Modify Student', 'PATH' ,'/students/*', 1, now(), 1, now());

INSERT INTO public.function(
	function_id, function_name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES (6, 'Delete Student', 'DELETE' ,'/students/*', 1, now(), 1, now());

INSERT INTO public.function(
	function_id, function_name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES (7, 'Search Student', 'GET' ,'/students?*', 1, now(), 1, now());

INSERT INTO public.function(
	function_id, function_name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES (8, 'View Student', 'GET' ,'/students/*', 1, now(), 1, now());
			
INSERT INTO public.function(
	function_id, function_name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES (9, 'Create Class', 'POST', '/classes', 1, now(), 1, now());

INSERT INTO public.function(
	function_id, function_name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES (10, 'Modify Class', 'PATH', '/classes/*', 1, now(), 1, now());

INSERT INTO public.function(
	function_id, function_name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES (11, 'Delete Class', 'DELETE', '/classes/*', 1, now(), 1, now());

INSERT INTO public.function(
	function_id, function_name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES (12, 'Search Class', 'GET', '/classes?*', 1, now(), 1, now());

INSERT INTO public.function(
	function_id, function_name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES (13, 'Search Class', 'GET', '/classes/*', 1, now(), 1, now());
			
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
	VALUES (2, 8, 1, now(), 1, now());

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
	VALUES (2, 13, 1, now(), 1, now());

INSERT INTO public.role_function(
	role_id, function_id, created_by, created_date, updated_by, updated_date)
	VALUES (2, 14, 1, now(), 1, now());

INSERT INTO public.role_function(
	role_id, function_id, created_by, created_date, updated_by, updated_date)
	VALUES (2, 15, 1, now(), 1, now());
			
INSERT INTO public.role_function(
	role_id, function_id, created_by, created_date, updated_by, updated_date)
	VALUES (3, 8, 1, now(), 1, now());

INSERT INTO public.role_function(
	role_id, function_id, created_by, created_date, updated_by, updated_date)
	VALUES (3, 15, 1, now(), 1, now());


--User_role
INSERT INTO public.user_role(
	role_id, user_id, created_by, created_date, updated_by, updated_date)
	VALUES (1, 1, 1, now(), 1, now());