import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import mikroOrmConfig from "@nx-multirepo/config/mikro-orm.config"
@Module({
  imports: [ProductModule, MikroOrmModule.forRoot(mikroOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
