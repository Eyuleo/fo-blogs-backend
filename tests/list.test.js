const { test, describe } = require('node:test')
const assert = require('node:assert')
const { favoriteBlog } = require('../utils/list_helper')
const dummy = require('../utils/list_helper').dummy
const totalLikes = require('../utils/list_helper').totalLikes

test('dummy return one', () => {
	const blogs = []

	const result = dummy(blogs)
	assert.strictEqual(result, 1)
})

describe('total likes', () => {
	test('of empty list is zero', () => {
		const blogs = []
		const result = totalLikes(blogs)

		assert.strictEqual(result, 0)
	})
	const listWithOneBlog = [
		{
			_id: '5a422aa71b54a676234d17f8',
			title: 'Go To Statement Considered Harmful',
			author: 'Edsger W. Dijkstra',
			url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
			likes: 5,
			__v: 0,
		},
	]
	test('when list has only one blog, equals the likes of that', () => {
		const result = totalLikes(listWithOneBlog)
		assert.strictEqual(result, 5)
	})
	const blogs = [
		{
			_id: '5a422a851b54a676234d17f7',
			title: 'React patterns',
			author: 'Michael Chan',
			url: 'https://reactpatterns.com/',
			likes: 7,
			__v: 0,
		},
		{
			_id: '5a422aa71b54a676234d17f8',
			title: 'Go To Statement Considered Harmful',
			author: 'Edsger W. Dijkstra',
			url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
			likes: 5,
			__v: 0,
		},
		{
			_id: '5a422b3a1b54a676234d17f9',
			title: 'Canonical string reduction',
			author: 'Edsger W. Dijkstra',
			url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
			likes: 12,
			__v: 0,
		},
		{
			_id: '5a422b891b54a676234d17fa',
			title: 'First class tests',
			author: 'Robert C. Martin',
			url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
			likes: 10,
			__v: 0,
		},
	]
	test('of a bigger list is calculates right', () => {
		const result = totalLikes(blogs)
		assert.strictEqual(result, 34)
	})
})

describe('favorite blog', () => {
	test('most liked blog', () => {
		const blogs = [
			{
				_id: '5a422a851b54a676234d17f7',
				title: 'React patterns',
				author: 'Michael Chan',
				url: 'https://reactpatterns.com/',
				likes: 7,
				__v: 0,
			},
			{
				_id: '5a422aa71b54a676234d17f8',
				title: 'Go To Statement Considered Harmful',
				author: 'Edsger W. Dijkstra',
				url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
				likes: 5,
				__v: 0,
			},
			{
				_id: '5a422b3a1b54a676234d17f9',
				title: 'Canonical string reduction',
				author: 'Edsger W. Dijkstra',
				url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
				likes: 12,
				__v: 0,
			},
			{
				_id: '5a422b891b54a676234d17fa',
				title: 'First class tests',
				author: 'Robert C. Martin',
				url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
				likes: 10,
				__v: 0,
			},
		]
		const result = favoriteBlog(blogs)
		assert.deepStrictEqual(result, {
			title: 'Canonical string reduction',
			author: 'Edsger W. Dijkstra',
			likes: 12,
		})
	})
	test('only one blog', () => {
		const blog = [
			{
				_id: '5a422a851b54a676234d17f7',
				title: 'React patterns',
				author: 'Michael Chan',
				url: 'https://reactpatterns.com/',
				likes: 7,
				__v: 0,
			},
		]
		const result = favoriteBlog(blog)
		assert.deepStrictEqual(result, {
			title: 'React patterns',
			author: 'Michael Chan',
			likes: 7,
		})
	})
})
