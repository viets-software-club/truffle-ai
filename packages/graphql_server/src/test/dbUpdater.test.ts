import { dailyDbUpdater } from '../dbUpdater'

try {
  void dailyDbUpdater(false)
} catch (error) {
  console.error(error)
  console.error(error)
}
