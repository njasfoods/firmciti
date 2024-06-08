import React from 'react'

const BlogHero = () => {
  return (
    <section className='grid md:grid-cols-3 gap-2 min-h-screen pt-20 pb-12 px-12 overflow-hidden bg-gray-50'>
        <div class="overflow-hidden col-span-2 bg-cover  cursor-pointer group h-full "
            style={{backgroundImage:'url(https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80)'}}>
            <div
                class="flex flex-col justify-center w-full h-full px-8 py-4  bg-gray-800/60 group-hover:opacity-100">
                <h2 class="mt-4 text-xl font-semibold text-white capitalize">Best website collections</h2>
                <p class="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Website</p>
            </div>
        </div>

        <div className='col-span-1 space-y-2 flex-col h-full pb-2'>

            <div class="overflow-hidden bg-cover  cursor-pointer h-1/2 group"
                style={{backgroundImage:'url(https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)'}}>
                <div
                    class="flex flex-col justify-center w-full h-full px-8 py-4  bg-gray-800/60 group-hover:opacity-100">
                    <h2 class="mt-4 text-xl font-semibold text-white capitalize">Block of Ui kit collections</h2>
                    <p class="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Ui kit</p>
                </div>
            </div>

            <div class="overflow-hidden bg-cover  cursor-pointer h-1/2 group"
                style={{backgroundImage:'url(https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80)'}}>
                <div
                    class="flex flex-col justify-center w-full h-full px-8 py-4 bg-gray-800/60 group-hover:opacity-100">
                    <h2 class="mt-4 text-xl font-semibold text-white capitalize">Ton’s of mobile mockup</h2>
                    <p class="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Mockups</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogHero