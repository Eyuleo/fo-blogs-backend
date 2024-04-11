const blogRouter = require('express').Router()
const Blog = require('../model/blog')

blogRouter.get('/', (req, res) => {
	Blog.find({}).then((blogs) => {
		res.json(blogs)
	})
})

blogRouter.post('/', (req, res, next) => {
	const blog = new Blog(req.body)

	blog
		.save()
		.then((response) => {
			res.status(201).json(response)
		})
		.catch((error) => next(error))
})

module.exports = blogRouter
