
UPDATE [dbo].[users]
    SET [user_mail] = @user_mail
        ,[user_fname] = @user_fname
        ,[user_lname] = @user_lname
        ,[user_gender] = @user_gender
        ,[user_mobile] = @user_mobile
    WHERE [user_id]=@id