import { getCompanyInfosFromLinkedIn } from '../scraping/linkedInScraping'

void getCompanyInfosFromLinkedIn('google', 25000).then((r) => console.log(r))
