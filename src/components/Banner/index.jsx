import { MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

export function Banner(){
    return(
        <section style={{backgroundImage: `url('/images/mao.jpg')`}} className="bg-cover bg-no-repeat bg-fixed  h-screen relative overflow-hidden">
            <Shadow/>
            <div className="relative z-10 sm:px-6 lg:px-8 py-10 lg:py-16 h-full">
                <div className="mt-[15%] max-w-2xl text-center mx-auto">
                    <p className="inline-block text-base font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-400 text-transparent">
                        <strong className='font-extrabold'>ABC</strong> ANGOLA BUSINESS CONNECT
                    </p>
                    <h1 className="mt-5 max-w-2xl block font-semibold text-4xl md:text-5xl lg:text-6xl">
                        Conectando o mundo dos negócios
                    </h1>
                    <p className="mt-5 max-w-3xl text-base text-gray-200">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi impedit, veritatis delectus deleniti ducimus tempora voluptatem eveniet obcaecati dolorem a facere sequi id. Omnis asperiores harum iure sapiente rem voluptas?</p>
                    <Link to="/" className="mt-8 mx-auto py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        Saiba mais
                        <MdChevronRight className="flex-shrink-0 size-4"/>
                    </Link>
                </div>
            </div>
        </section>
    );
}

const Shadow = () =>  {
    return <div className="flex absolute inset-0 bg-black/70"></div>
}