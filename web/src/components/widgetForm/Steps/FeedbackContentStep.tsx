import { ArrowArcLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep ({feedbackType, onFeedbackRestartRequested, onFeedbackSent}: FeedbackContentStepProps) {
  
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('');
  
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleSubmitFeedback(Event: FormEvent) {


    Event.preventDefault();
    console.log({
      screenshot,
      comment
    })

    onFeedbackSent();
  }

  return (
    <>
      <header>

        <button type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" onClick={onFeedbackRestartRequested}>
          <ArrowArcLeft weight="bold" className="w-4 h-4"></ArrowArcLeft> 
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
        
          <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6"></img>
        
          {feedbackTypeInfo.title}
        
        </span>

        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
      
        <textarea className="min-w-[304px] w-full min-h-[112px]  text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-cornova-500 focus:ring-cornova-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin" placeholder="Conte com detalhes o que esta acontecendo" onChange={Event => setComment(Event.target.value)}/>
      
        <footer className="flex gap-2 mt-2">

          {/* <button type="button" className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transitions-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-cornova-500 ">

            <Camera className="w-6 h-6" />/

          </button> */}
          <ScreenshotButton screenshot={screenshot} onScreenshotTook={setScreenshot} />

          <button type="submit" className="p-2 bg-cornova-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-cornova-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-cornova-500 transitions-colors disabled:opacity-50 disabled:hover:bg-cornova-500" disabled={comment.length === 0}>
        
            Enviar Feedback
          </button>
        
        </footer>
      
      </form>
    </>
  );
}