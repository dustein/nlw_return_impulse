import { FeedbacksRepository } from "../repositories/feedbacks-repository";
import { PrismaFeedbacksRepository } from "../repositories/prisma/prisma-feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
   type: string;
   comment: string;
   screenshot?: string;
}

export class SubmitFeedbackUseCase {
   
   private feedbacksRepository: FeedbacksRepository

   constructor(
      feedbacksRepository: FeedbacksRepository,
   ) {
      this.feedbacksRepository = feedbacksRepository
   }

   async execute(request: SubmitFeedbackUseCaseRequest) {
      const { type, comment, screenshot } = request;

      //se nao quisessemos seguir o principio da inversao de dependencias do SOLID para salvar no BD
      // const prismaFeedbacksRepository = new PrismaFeedbacksRepository();

      // await prismaFeedbacksRepository.create({
      //    type,
      //    comment,
      //    screenshot,
      // })
   }
}