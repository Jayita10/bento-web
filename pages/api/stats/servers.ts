// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import database from '../../../database/database'
import { guild, initModels } from '../../../database/models/init-models'

type Data = {
  count: number
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    initModels(database)
    const serverData = await guild.findAndCountAll();
    
    res.status(200).json({count: serverData.count})
}
