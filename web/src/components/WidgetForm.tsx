import { CloseButton } from './CloseButton';

import bugImageUrl from '../assets/bug.svg';
import ideaImageUrl from '../assets/idea.svg';
import thoughtImageUrl from '../assets/thought.svg';


const feedbackTypes = {
     BUG: {
          title: "Problema",
          image: {
               source: bugImageUrl,
               alt: 'imagem de uma minhoca'
          }
     },
     IDEA: {
          title: "Ideia",
          image: {
               source: ideaImageUrl,
               alt: "imagem de uma lâmpada"
          }
     },
     OTHER: {
          title: "Outro",
          image: {
               source: thoughtImageUrl,
               alt: "imagem de uma nuvem pensando"
          }
     }
}

export function WidgetForm () {

     

     return (
          <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
               <header>
                    <span className="text-xl leading-6">Deixe seu Feedback</span>

                    <CloseButton />
               </header>

          <div className='flex py-8 gap-2 w-full'>
               { Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                         <button
                              key={key}
                              className='bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-cornova-500 focus:border-cornova-500 focus:outline-none'
                              // onClick={}
                              type="button"
                         >
                              <img src={value.image.source} alt={value.image.alt} />
                              <span>{value.title}</span>
                         </button>
                    );
               })}
          </div>

               <p>Hello World</p>

               <footer className="text-xs text-neutral-400">
                    Feito no curso <a className="underline underline-offset-4" href="https://dustein.com">Rocketseat</a>
               </footer>
          </div>
     );
};