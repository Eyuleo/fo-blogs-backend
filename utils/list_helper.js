const dummy = (blogs) => {
	return 1
}

const totalLikes = (blogs) => {
	return blogs.length === 0
		? 0
		: blogs.reduce((total, blogs) => {
				return total + blogs.likes
		  }, 0)
}

const favoriteBlog = (blogs) => {
	let mostLikes = 0
	let mostLikedBlog = null

	blogs.forEach((blog) => {
		if (blog.likes > mostLikes) {
			mostLikes = blog.likes
			mostLikedBlog = blog
		}
	})
	return {
		title: mostLikedBlog.title,
		author: mostLikedBlog.author,
		likes: mostLikedBlog.likes,
	}
}

module.exports = { dummy, totalLikes, favoriteBlog }
