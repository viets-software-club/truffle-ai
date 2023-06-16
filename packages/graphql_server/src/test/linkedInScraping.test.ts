import { getCompanyInfosFromLinkedIn } from '../scraping/linkedInScraping'

void getCompanyInfosFromLinkedIn('google').then((r) => console.log(r))
