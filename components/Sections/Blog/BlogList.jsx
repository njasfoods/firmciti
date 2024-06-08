

function Contentdiv({ img, title, desc }) {
  return (
    <div
      className="relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"
      color="transparent"
    >
      <img
        src={img}
        alt="bg"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative flex flex-col justify-end">
        <h4 className="text-white">
          {title}
        </h4>
        <p
          
          className="my-2 font-normal text-white"
        >
          {desc}
        </p>
      </div>
    </div>
  );
}

const contents = [
  {
    img: "https://www.material-tailwind.com/image/blog-11.jpeg",
    title: "Search and Discovery",
    desc: "Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards we tend to offer.",
  },
  {
    img: "https://www.material-tailwind.com/image/blog-10.jpeg",
    title: "Last visits in US",
    desc: "Wealth creation is an evolutionarily recent positive-sum game. Status is an old zero-sum game. Those attacking wealth creation are often just seeking status.",
  },
  {
    img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/div-blog2.jpg",
    title: "Grow in a beautiful area",
    desc: "Free people make free choices. Free choices mean you get unequal outcomes. You can have freedom, or you can have equal outcomes. You can't have both.",
  },
];

export function BlogList() {
  return (
    <section class="">
    <div class="relative mx-auto  py-10 px-8">
      <h2 class="my-4 px-4 text-4xl font-bold">Recent Posts</h2>
      <div class="mx-auto grid w-full sm:grid-cols-2 lg:grid-cols-3">
        <article class="flex w-full p-4 duration-500 hover:bg-white hover:shadow-lg">
          <a href="#"
            ><div class="flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="block h-auto w-full max-w-full align-middle" />
            </div>
            <div class="p-5">
              <span class="py-2 text-xs font-bold">EBOOK</span>
              <p class="mb-4 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div></a>
        </article>
  
        <article class="flex w-full p-4 duration-500 hover:bg-white hover:shadow-lg">
          <a href="#"
            ><div class="flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="block h-auto w-full max-w-full align-middle" />
            </div>
  
            <div class="p-5">
              <span class="py-2 text-xs font-bold">SUCCESS STORY</span>
              <p class="mb-4 text-xl">Lorem ipsum dolor sit amet consectetur.</p>
            </div></a>
        </article>
  
        <article class="flex w-full p-4 duration-500 hover:bg-white hover:shadow-lg">
          <a href="#"
            ><div class="flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="block h-auto w-full max-w-full align-middle" />
            </div>
  
            <div class="p-5">
              <span class="py-2 text-xs font-bold">WHITE PAPER</span>
              <p class="mb-4 text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div></a>
        </article>
  
        <article class="flex w-full p-4 duration-500 hover:bg-white hover:shadow-lg">
          <a href="#"
            ><div class="flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="block h-auto w-full max-w-full align-middle" />
            </div>
  
            <div class="p-5">
              <span class="py-2 text-xs font-bold">SUCCESS STORY</span>
              <p class="mb-4 text-xl">Lorem ipsum dolor sit amet.</p>
            </div></a>
        </article>
  
        <article class="flex w-full p-4 duration-500 hover:bg-white hover:shadow-lg">
          <a href="#"
            ><div class="flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="block h-auto w-full max-w-full align-middle" />
            </div>
  
            <div class="p-5">
              <span class="py-2 text-xs font-bold">SUCCESS STORY</span>
              <p class="mb-4 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div></a>
        </article>
  
        <article class="flex w-full p-4 duration-500 hover:bg-white hover:shadow-lg">
          <a href="#"
            ><div class="flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="block h-auto w-full max-w-full align-middle" />
            </div>
  
            <div class="p-5">
              <span class="py-2 text-xs font-bold">INFOGRAPHIC</span>
              <p class="mb-4 text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div></a>
        </article>
      </div>
    </div>
    <svg class="-z-10 absolute -top-10 opacity-10" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="a" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="scale(2) rotate(0)">
          <rect x="0" y="0" width="100%" height="100%" fill="hsla(0,0%,100%,1)" />
          <path d="M3.25 10h13.5M10 3.25v13.5" stroke-linecap="square" stroke-width="0.5" stroke="hsla(258.5,59.4%,59.4%,1)" fill="none" />
        </pattern>
      </defs>
      <rect width="800%" height="800%" transform="translate(0,0)" fill="url(#a)" />
    </svg>
  </section>
  );
}

export default BlogList;