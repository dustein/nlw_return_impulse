import { CloseButton } from './CloseButton';

export function WidgetForm () {

     return (
          <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
               <header>
                    <span className="text-xl leading-6">Deixe seu Feedback</span>

                    <CloseButton />
               </header>

               <p>Hello World</p>

               <footer className="text-xs text-neutral-400">
                    Feito no curso <a className="underline underline-offset-4" href="https://dustein.com">Rocketseat</a>
               </footer>
          </div>
     );
};