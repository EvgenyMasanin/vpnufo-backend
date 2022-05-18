import { CreateFAQDto, UpdateFAQDto } from './dto/faq.dto'
import { Request, Response } from 'express'
import FAQService from './faq.service'
import { FAQ } from './schemas/faq.schema'
import { HttpError, HttpStatus } from './../constants'

export class FAQController {
  async getAll(req: Request, res: Response) {
    try {
      res.send({ faqItems: await FAQService.getAll() })
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).send({ message: HttpError.BAD_REQUEST })
    }
  }

  async create(req: Request<unknown, FAQ, CreateFAQDto>, res: Response) {
    try {
      return res.status(HttpStatus.CREATED).send(await FAQService.create(req.body))
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).send({ message: HttpError.BAD_REQUEST })
    }
  }

  async update(req: Request<unknown, FAQ, UpdateFAQDto>, res: Response) {
    try {
      res.send(await FAQService.update(req.body))
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).send({ message: HttpError.BAD_REQUEST })
    }
  }

  async delete(req: Request<{ id: string }>, res: Response) {
    try {
      await FAQService.delete(req.params.id)
      res.status(HttpStatus.OK).send({ message: 'FAQ deleted successfully' })
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).send({ message: HttpError.BAD_REQUEST })
    }
  }
}

export default new FAQController()
