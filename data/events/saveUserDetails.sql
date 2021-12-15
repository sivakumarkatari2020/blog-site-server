USE [Blog_site]
INSERT INTO [dbo].[users]
        ([user_id]
        ,[user_mail]
        ,[user_pwd]
        ,[user_role]
        ,[user_fname]
        ,[user_lname]
        ,[user_gender]
        ,[user_mobile])
    VALUES
        (@user_id
        ,@user_mail
        ,@user_pwd
        ,@user_role
        ,@user_fname
        ,@user_lname
        ,@user_gender
        ,@user_mobile)

