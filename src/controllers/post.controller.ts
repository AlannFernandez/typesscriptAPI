import { Request, Response } from 'express'

// DB
// import { connect } from '../database'
const pool = require('../database')
// Interfaces
import { Post } from '../interface/Post'


export async function getPosts(req: Request, res: Response): Promise<Response | void> {
    try {        
        const posts = await pool.query('SELECT * FROM posts');
        console.log('here posts')
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function createPost(req: Request, res: Response) {
    const Fp = {
        "title":"first post",
        "description":"lorem ipsum",
        "image_url":"aaaa"
    }
    const newPost: Post = req.body;     
    await pool.query('INSERT INTO posts SET ?', [Fp]);
    res.json({
        message: 'New Post Created'
    });
}

export async function getPost(req: Request, res: Response) {
    const id = req.params.postId;    
    const posts = await pool.query('SELECT * FROM posts WHERE id = ?', [id]);
    res.json(posts[0]);
}

export async function deletePost(req: Request, res: Response) {
    const id = req.params.postId;    
    await pool.query('DELETE FROM posts WHERE id = ?', [id]);
    res.json({
        message: 'Post deleted'
    });
}

export async function updatePost(req: Request, res: Response) {
    const id = req.params.postId;
    const updatePost: Post = req.body;
    await pool.query('UPDATE posts set ? WHERE id = ?', [updatePost, id]);
    res.json({
        message: 'Post Updated'
    });
}