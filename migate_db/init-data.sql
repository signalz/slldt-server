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
	id, name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES ('25242a3f-abf2-4e62-92ea-29a18bd0b1b3', 'Create User', 'POST', '/users', '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now());

INSERT INTO public.function(
	id, name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES ('4fefd78a-391c-4745-b1a1-f4537506dcc1', 'Modify User', 'PATCH', '/users', '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now());

INSERT INTO public.function(
	id, name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES ('285d3150-7504-4dca-8c89-5d90dd88bace', 'Delete User', 'DELETE', '/users', '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now());

INSERT INTO public.function(
	id, name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES ('12f7bab7-9467-4d35-a64a-109cca478eab', 'Search User', 'GET', '/users', '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now());

INSERT INTO public.function(
	id, name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES ('3dc4b839-96f3-4a61-9eb5-44a0457c29a9', 'Create Student', 'POST' ,'/students', '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now());

INSERT INTO public.function(
	id, name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES ('cb648a9a-346d-41ae-8c89-46bd16570aee', 'Modify Student', 'PATCH' ,'/students', '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now());

INSERT INTO public.function(
	id, name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES ('b9cccde2-d755-4ae1-b5c3-4ecb83dfe90a', 'Delete Student', 'DELETE' ,'/students', '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now());

INSERT INTO public.function(
	id, name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES ('95224b02-8b68-4197-afe4-306f395d9f62', 'Search Student', 'GET' ,'/students', '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now());

INSERT INTO public.function(
	id, name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES ('414e77d6-8d25-4adf-904f-bf624859ddfe', 'Create Class', 'POST', '/classes', '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now());

INSERT INTO public.function(
	id, name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES ('3f672408-9273-46e2-9d57-73f5f6142bea', 'Modify Class', 'PATCH', '/classes', '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now());

INSERT INTO public.function(
	id, name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES ('6f701a97-c01a-4867-ae99-0d6526c47ba5', 'Delete Class', 'DELETE', '/classes', '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now());

INSERT INTO public.function(
	id, name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES ('191a62c8-bef6-48c2-8253-0f4cc5e2cbfb', 'Search Class', 'GET', '/classes', '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now());

INSERT INTO public.function(
	id, name, method, path, created_by, created_date, updated_by, updated_date)
	VALUES ('8d231c64-6909-4d5f-9a86-5d58ad9f4fc4', 'Notify', 'POST', '/notify', '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now());

--Role_Function

--Admin
INSERT INTO public.role_function(
	id, role_id, function_id, created_by, created_date, updated_by, updated_date)
	VALUES ('cefd2e1a-6001-44d1-8f59-c0ad95eafda8', '52ca2335-8a10-4f5e-8538-4fc8e8a2a6d2', '25242a3f-abf2-4e62-92ea-29a18bd0b1b3', '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now());

INSERT INTO public.role_function(
	id, role_id, function_id, created_by, created_date, updated_by, updated_date)
	VALUES ('199e3945-e61f-4071-97f0-8f6a68d4d576', '52ca2335-8a10-4f5e-8538-4fc8e8a2a6d2', '4fefd78a-391c-4745-b1a1-f4537506dcc1', '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now());

INSERT INTO public.role_function(
	id, role_id, function_id, created_by, created_date, updated_by, updated_date)
	VALUES ('b7728c53-1176-46b9-af68-50c7608554c4', '52ca2335-8a10-4f5e-8538-4fc8e8a2a6d2', '285d3150-7504-4dca-8c89-5d90dd88bace', '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now());

INSERT INTO public.role_function(
	id, role_id, function_id, created_by, created_date, updated_by, updated_date)
	VALUES ('685773a8-0568-4ae1-b103-5cd3172cbdf0', '52ca2335-8a10-4f5e-8538-4fc8e8a2a6d2', '12f7bab7-9467-4d35-a64a-109cca478eab', '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now());

INSERT INTO public.role_function(
	id, role_id, function_id, created_by, created_date, updated_by, updated_date)
	VALUES ('3f1abf19-0baa-4b46-a23d-3cb80e9c750d', '52ca2335-8a10-4f5e-8538-4fc8e8a2a6d2', '3dc4b839-96f3-4a61-9eb5-44a0457c29a9', '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now());

INSERT INTO public.role_function(
	id, role_id, function_id, created_by, created_date, updated_by, updated_date)
	VALUES ('6b6785c3-18fa-4353-a462-3241a11a64dc', '52ca2335-8a10-4f5e-8538-4fc8e8a2a6d2', 'cb648a9a-346d-41ae-8c89-46bd16570aee', '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now());

INSERT INTO public.role_function(
	id, role_id, function_id, created_by, created_date, updated_by, updated_date)
	VALUES ('5a66953b-0464-4e3c-b5f1-3e648ab7db27', '52ca2335-8a10-4f5e-8538-4fc8e8a2a6d2', 'b9cccde2-d755-4ae1-b5c3-4ecb83dfe90a', '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now());

INSERT INTO public.role_function(
	id, role_id, function_id, created_by, created_date, updated_by, updated_date)
	VALUES ('ecc4c9a6-fbd5-479a-a1e7-a78dbaa13720', '52ca2335-8a10-4f5e-8538-4fc8e8a2a6d2', '95224b02-8b68-4197-afe4-306f395d9f62', '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now(), '8a48f9f5-a38d-4c57-b795-9cc3a26186ca', now());
