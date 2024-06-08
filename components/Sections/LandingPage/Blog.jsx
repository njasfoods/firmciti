const posts = [
    {
      id: 1,
      title: 'The Future of Farming: Technological Innovations',
      href: '#',
      description:
        'Explore how cutting-edge technology is transforming modern agriculture, from AI-driven machinery to precision farming techniques.',
      date: 'Jan 10, 2024',
      datetime: '2024-01-10',
      category: { title: 'Technology', href: '#' },
      author: {
        name: 'Jane Doe',
        role: 'Agritech Expert',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 2,
      title: 'Weather Patterns and Crop Yields: What to Expect in 2024',
      href: '#',
      description:
        'A detailed analysis of upcoming weather patterns and their potential impact on crop yields and farming practices.',
      date: 'Feb 5, 2024',
      datetime: '2024-02-05',
      category: { title: 'Agriculture', href: '#' },
      author: {
        name: 'John Smith',
        role: 'Climatologist',
        href: '#',
        imageUrl:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    },
    {
      id: 3,
      title: 'Agricultural News: Policy Changes and Market Trends',
      href: '#',
      description:
        'Stay informed about the latest policy changes and market trends affecting the agriculture industry.',
      date: 'Mar 20, 2024',
      datetime: '2024-03-20',
      category: { title: 'Business', href: '#' },
      author: {
        name: 'Emily Johnson',
        role: 'Agriculture Journalist',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
]
  
  
  export default function LandingBlog() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
         
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  