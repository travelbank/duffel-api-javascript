/* eslint-disable no-console */

import dotenv from 'dotenv'
import { DuffelAPI } from '../src/index'

dotenv.config()

const duffelAPI = DuffelAPI({ token: process.env.DUFFEL_API_TOKEN || '' })

const example = async () => {
  const aircraft = await duffelAPI.aircraft.get('arc_00009VMF8AhXSSRnQDI6Hi')
  console.log(aircraft.data)
}

example()
