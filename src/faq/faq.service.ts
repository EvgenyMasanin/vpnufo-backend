import { CreateFAQDto, UpdateFAQDto } from './dto/faq.dto'
import FAQModel from './schemas/faq.schema'

class FAQService {
  async getAll() {
    const faqs = await FAQModel.find()
    return faqs.map(({ _id, title, content }) => ({
      id: _id,
      title,
      content,
    }))
  }

  async create(faq: CreateFAQDto) {
    const { title, content, _id } = await FAQModel.create(faq)

    return {
      id: _id,
      title,
      content,
    }
  }

  async update(faqDto: UpdateFAQDto) {
    return await FAQModel.findByIdAndUpdate(faqDto.id, faqDto, { new: true })
  }
  
  async delete(id: string) {
    const isDeleted = await FAQModel.deleteOne({ _id: id })
    return isDeleted
  }
}

export default new FAQService()
