const db = require('../db');

class PostController {
    async createPost(req, res) {
        const { title, content, userId } = req;
        const newPost = await db.query('insert into post (title, content, user_id) values ($1, $2, $3) returning *', [title, content, userId]);
        return

    }

    async getPostByUser(req, res) {
        const id = req.query.id
        const posts = await db.query('select * from post where user_id = $1', [id]);
        res.json(posts.rows);
    }
}

module.exports = new PostController();