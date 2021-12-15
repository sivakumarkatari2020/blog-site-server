USE [Blog_site]
INSERT INTO [dbo].[posts]
        ([post_id]
        ,[post_owner]
        ,[post_likes]
        ,[post_dislikes]
        ,[post_body]
        ,[post_title])
VALUES
        (@post_id
        ,@post_owner
        ,@post_likes
        ,@post_dislikes
        ,@post_body
        ,@post_title)


