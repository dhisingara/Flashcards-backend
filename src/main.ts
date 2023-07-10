import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT; // || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}
bootstrap();

process.on('uncaughtException', (err) => {
  console.error('uncaughtException', err);
  console.error({
    method: 'uncaughtException',
    message: 'Some uncaught error is found, please fix this.',
    stack_trace: err,
  });
});
