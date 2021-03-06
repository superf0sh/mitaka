import {
  AbuseIPDB,
  BGPView,
  BlockCypher,
  Censys,
  Crtsh,
  Cymon,
  DNSlytics,
  DomainBigData,
  DomainWatch,
  FindSubDomains,
  FOFA,
  FortiGuard,
  HybridAnalysis,
  IntelligenceX,
  Maltiverse,
  ONYPHE,
  OTX,
  Pipl,
  PubDB,
  PublicWWW,
  Pulsedive,
  RiskIQ,
  Searcher,
  SecurityTrails,
  Shodan,
  Sploitus,
  SpyOnWeb,
  Talos,
  ThreatCrowd,
  ThreatMiner,
  Urlscan,
  ViewDNS,
  VirusTotal,
  Vulmon,
  WebAnalyzer,
  XForceExchange,
  ZoomEye,
} from ".";

export const Searchers: Searcher[] = [
  new AbuseIPDB(),
  new BGPView(),
  new BlockCypher(),
  new Censys(),
  new Cymon(),
  new Crtsh(),
  new DNSlytics(),
  new DomainBigData(),
  new DomainWatch(),
  new FindSubDomains(),
  new FOFA(),
  new FortiGuard(),
  new HybridAnalysis(),
  new IntelligenceX(),
  new Maltiverse(),
  new ONYPHE(),
  new OTX(),
  new Pipl(),
  new PubDB(),
  new PublicWWW(),
  new Pulsedive(),
  new RiskIQ(),
  new SecurityTrails(),
  new Shodan(),
  new Sploitus(),
  new SpyOnWeb(),
  new Talos(),
  new ThreatCrowd(),
  new ThreatMiner(),
  new Urlscan(),
  new ViewDNS(),
  new VirusTotal(),
  new Vulmon(),
  new WebAnalyzer(),
  new XForceExchange(),
  new ZoomEye(),
];
