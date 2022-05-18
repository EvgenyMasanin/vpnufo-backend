import { Router } from 'express'
import FaqController from '../faq/faq.controller'

const FAQRouter = Router()

FAQRouter.get('/faq', FaqController.getAll)
FAQRouter.post('/faq', FaqController.create)
FAQRouter.patch('/faq', FaqController.update)
FAQRouter.delete('/faq/:id', FaqController.delete)

export default FAQRouter
