import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
   type: string;
   comment: string;
   screenshot?: string;
}

export class SubmitFeedbackUseCase {
   
   constructor(
      private feedbacksRepository: FeedbacksRepository,
   ) {}

   async execute(request: SubmitFeedbackUseCaseRequest) {
      const { type, comment, screenshot } = request;

      await this.feedbacksRepository.create({
         type,
         comment,
         screenshot,
      })
   }
}

//agora dentro do caso de uso nao tem nenhuma referencia do Prisma, entao se quisermos trocar a ORM em qualquer tempo, nao tera problema, pois essa classe nao depende diretamente do Prisma, o qual sera inversamente injetado dentro dessa classe como faremos a seguir. 