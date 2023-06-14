import { getCompanyInfosFromLinkedIn } from '../scraping/linkedInScraping'

void getCompanyInfosFromLinkedIn('huggingface', 15000).then((r) => console.log(r))
