
import { Header } from '../../components/Header/index';
import { Banner } from '../../components/Banner';
import { FaGlobe, FaMicrophone, FaMoneyBill, FaTruck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const items = [
  {
    title: "Marketing",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, libero sequi odit dolore ab aliquam expedita vel suscipit vero, ipsam cupiditate eius doloribus est necessitatibus porro tempore repellendus rem hic.",
    icon: FaMicrophone
  },
  {
    title: "Importação e Exportação",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, libero sequi odit dolore ab aliquam expedita vel suscipit vero, ipsam cupiditate eius doloribus est necessitatibus porro tempore repellendus rem hic.",
    icon: FaTruck
  },
  {
    title: "Contabilidade",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, libero sequi odit dolore ab aliquam expedita vel suscipit vero, ipsam cupiditate eius doloribus est necessitatibus porro tempore repellendus rem hic.",
    icon: FaMoneyBill
  },
  {
    title: "Tecnologia",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, libero sequi odit dolore ab aliquam expedita vel suscipit vero, ipsam cupiditate eius doloribus est necessitatibus porro tempore repellendus rem hic.",
    icon: FaGlobe
  }
]

export function Home(){
  return(
    <>
      <Header/>
      <Banner/>
      <section class="bg-white text-zinc-700">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div class="mx-auto max-w-lg text-center">
            <h2 class="text-3xl font-bold sm:text-4xl">Algo que chame atenção</h2>
            <p class="mt-4 text-zinc-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit accusamus praesentium fuga dolorum amet alias. Animi adipisci recusandae, fuga iure, illo vero quae eum dolorem numquam alias dolor quaerat? Optio?</p>
          </div>
          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {items.map((item,index)=>(
              <article key={index} class="block rounded-xl border border-gray-200 p-6 shadow-xl transition hover:cursor-pointer hover:border-blue-500/10 hover:shadow-blue-500/10">
                <div className='w-fit p-4 bg-white border border-gray-200 rounded-full'>
                  <item.icon class="size-7 text-blue-500/95"/>
                </div>
                <h2 class="mt-4 text-base font-bold text-zinc-600/80">{item.title}</h2>
                <p class="mt-2 text-xs text-zinc-600/60 font-normal">{item.description}</p>
              </article>
            ))}
          </div>
          <div className='mt-12 text-center'>
            <Link to="" class="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition">
              Ver mais
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
