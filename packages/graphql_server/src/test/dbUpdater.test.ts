import { dbUpdater } from '../dbUpdater'

try {
  void dbUpdater()
} catch (error) {
  console.log('error occured')
}
