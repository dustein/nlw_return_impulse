import { useState } from 'react';

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';

import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';


export const feedbackTypes = {
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

//recurso do typescript
export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

     const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
     const [feedbackSent, setFeedbackSent] = useState(false);

     function handleRestartFeedback() {
          setFeedbackSent(false);
          setFeedbackType(null)
     }

     return (
          <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">


          { feedbackSent ? (
               <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
          ) : (
               <>
                    {!feedbackType ? (
          < FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
) : (
          <FeedbackContentStep 
               onFeedbackSent={() => setFeedbackSent(true)}
               feedbackType={feedbackType} 
               onFeedbackRestartRequested={handleRestartFeedback}
          />
)}
               </>
)}
               <footer className="text-xs text-neutral-400">
                    Feito no curso <a className="underline underline-offset-4" href="https://dustein.com">Rocketseat</a>
               </footer>
          </div>
     );
};