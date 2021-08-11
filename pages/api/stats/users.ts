// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import database from '../../../database/database'
import { initModels, user } from '../../../database/models/init-models'

type Data = {
  count: number
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    initModels(database)
    const userData = await user.findAndCountAll();
    
    res.status(200).json({count: userData.count})
}
