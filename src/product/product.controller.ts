import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProductRepository } from './product.repository';

@Controller('/products')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createProduct(@Body() userData) {
    this.productRepository.save(userData);
    return userData;
  }

  @Get()
  async listAllProduct() {
    return this.productRepository.list();
  }
}
