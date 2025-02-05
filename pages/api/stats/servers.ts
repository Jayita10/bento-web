// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import database from '../../../database/database'
import { guild, initModels } from '../../../database/models/init-models'

export async function getData() {
  initModels(database)
  const serverData = await guild.findAndCountAll();
  return { count: serverData.count }
}