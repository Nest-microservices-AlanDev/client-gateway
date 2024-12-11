import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class HealthCheckControllerController {
  @Get()
  healthCheck() {
    return 'Client gateway is up and running';
  }
}
 