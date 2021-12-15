'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getUsers = async () => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const getUsers = await pool.request()
                                    .query(sqlQueries.getUsers);
        return getUsers.recordset;
    }catch (error) {
        return error.message;
    }
}

const saveUserDetails = async (values) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const noofUsers = await getUsers();
        const saveUserDetails = await pool.request()
                                    .input('user_id',sql.VarChar(50),++noofUsers.length)
                                    .input('user_mail',sql.VarChar(50),values.mail)
                                    .input('user_pwd',sql.VarChar(50),values.password)
                                    .input('user_role',sql.Int,2)
                                    .input('user_fname',sql.VarChar(50),values.fname)
                                    .input('user_lname',sql.VarChar(50),values.lname)
                                    .input('user_Gender',sql.VarChar(50),values.gender)
                                    .input('user_mobile',sql.VarChar(50),values.mobile)
                                    .query(sqlQueries.saveUserDetails);
        if(saveUserDetails.rowsAffected[0] === 1){
            return {
                status: 200,
                message: 'User Created Successfully!',
            }
        }
        else{
            return {status: 422,message: 'Try sometime later!.'}
        }
    } catch (error) {
        return error.message;
    }
}

const verifyUser = async (email,password) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const verifyUser = await pool.request()
                                .input('user_mail',sql.VarChar(50),email)
                                .input('user_pwd',sql.VarChar(20),password)
                                .query(sqlQueries.verifyUser);
        if(verifyUser.recordset.length > 0){
            return {
                status: 200,
                data: verifyUser.recordset,
                message: 'Successfully Logged In!'
            }
        }
        else{
            return {status: 422,message: 'This user does not exist, Please contact Admin'}
        }
    } catch (error) {
        return error.message;
    }
}

const getPosts = async () => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const getPosts = await pool.request()
                                    .query(sqlQueries.getPosts);
        return getPosts.recordset;
    }catch (error) {
        return error.message;
    }
}

const saveBlogPost = async (values) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const noofPosts = await getPosts();
        const saveBlogPost = await pool.request()
                                    .input('post_id',sql.NVarChar(50),++noofPosts.length)
                                    .input('post_owner',sql.NVarChar(50),values.owner)
                                    .input('post_likes',sql.BigInt,values.likes)
                                    .input('post_dislikes',sql.BigInt,values.dislikes)
                                    .input('post_body',sql.VarChar(sql.MAX),values.body)
                                    .input('post_title',sql.VarChar(50),values.title)
                                    .query(sqlQueries.saveBlogPost);
        if(saveBlogPost.rowsAffected[0] === 1){
            return {
                status: 200,
                message: 'Post Created Successfully!',
            }
        }
        else{
            return {status: 422,message: 'Try sometime later!.'}
        }
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    saveUserDetails,
    getPosts,
    verifyUser,
    saveBlogPost,
}