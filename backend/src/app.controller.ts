import {
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseDto } from './core/dto/api/response.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import uploader from './core/utils/uploader';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): ResponseDto {
    return <ResponseDto>{
      message: 'GET /',
      result: this.appService.getHello(),
    };
  }

  @Get(':name')
  getHelloName(@Param('name') name: string): ResponseDto {
    return {
      message: 'GET /:name',
      result: this.appService.getHello(name),
    };
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', uploader.uploaderOptions))
  singleImage(@UploadedFile() image: Express.Multer.File): ResponseDto {
    console.log(image.originalname);
    return {
      message: 'POST /upload',
      result: image,
    };
  }
}
