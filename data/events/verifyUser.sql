/****** Script for SelectTopNRows command from SSMS  ******/
SELECT [user_id]
        ,[user_mail]
        ,[user_pwd]
        ,[user_role]
        ,[user_fname]
        ,[user_lname]
        ,[user_gender]
        ,[user_mobile]
FROM [Blog_site].[dbo].[users]
WHERE [user_mail]=@user_mail AND [user_pwd]=@user_pwd