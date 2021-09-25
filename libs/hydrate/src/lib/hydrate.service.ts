import { HydrateConfigOption } from '@scop/hydrate'
import { HYDRATE } from '@scop/config/hydrate'
import { Injectable } from '@nestjs/common'

@Injectable()
export class HydrateService {

  async loop(config: HydrateConfigOption, callback?: any) : Promise<void>
  {
    for(const value of config.values)
    {
      const result = await config.entity.create(value).save()
      if (callback) await callback(result)
    }
  }

  async forEach(config: HydrateConfigOption, conditions: any, callback: any) : Promise<void>
  {
    for (const element of await config.entity.find((conditions) ? conditions : {}))
    {
      await callback(element)
    }
  }

  async hydrate() : Promise<void>
  {
    await this.loop(HYDRATE.MEETING_TYPES)
    await this.loop(HYDRATE.PROVIDERS)
    await this.loop(HYDRATE.ENTERPRISES)
    await this.loop(HYDRATE.MEMBERS)
    await this.loop(HYDRATE.CHOICES)
    await this.loop(HYDRATE.STATUS)
    await this.loop(HYDRATE.MEETINGS)
  }

}
