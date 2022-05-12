// test('sum 2 + 2', () => {
//    expect(2 + 2).toBe(4)
// });

import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

describe('Submit Feedback', () => {
   it('deveria ser capaz de enviar um feedback na aplicacao', async () => {
      const submitFeedback = new SubmitFeedbackUseCase(
         { create: async () => {} },
         { sendMail: async () => {} }
      )
      await expect(submitFeedback.execute({
         type: 'BUG',
         comment: 'exemplo de comment',
         screenshot: 'teste.imagem'
      })).resolves.not.toThrow();
   })
})