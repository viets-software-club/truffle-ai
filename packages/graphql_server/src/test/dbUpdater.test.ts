import { dailyDbUpdater } from '../dbUpdater'

try {
  void dailyDbUpdater(false)
} catch (error) {
  console.log('error occured')
}
