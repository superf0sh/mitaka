import { buildURL } from "../url_builder";
import { SearchableType, Searcher } from "./searcher";

export class ThreatMiner implements Searcher {

  public endpoint: string;
  public name: string;
  public supportedTypes: SearchableType[] = ["ip", "domain", "hash"];

  constructor() {
    this.endpoint = "https://www.threatminer.org";
    this.name = "ThreatMiner";
  }

  public searchByIP(query: string) {
    return buildURL(this.endpoint, "/host.php", { q: query });
  }

  public searchByDomain(query: string) {
    return buildURL(this.endpoint, "/domain.php", { q: query });
  }

  public searchByHash(query: string) {
    return buildURL(this.endpoint, "/sample.php", { q: query });
  }
}
