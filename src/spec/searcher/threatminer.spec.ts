import { expect } from "chai";
import "mocha";
import { ThreatMiner } from "../../lib/searcher";

describe("ThreatMiner", () => {
  const subject = new ThreatMiner();

  it("should support IP, Domain & Emal type IOC", () => {
    expect(subject.supportedTypes).to.deep.equal(["ip", "domain", "hash"]);
  });

  describe("#searchByIP", () => {
    it("should return URL", () => {
      expect(subject.supportedTypes.indexOf("ip")).not.equal(-1);
      expect(subject.searchByIP("1.1.1.1")).
        to.equal("https://www.threatminer.org/host.php?q=1.1.1.1");
    });
  });
  describe("#searchByDomain", () => {
    it("should return URL", () => {
      expect(subject.supportedTypes.indexOf("domain")).not.equal(-1);
      expect(subject.searchByDomain("github.com")).
        to.equal("https://www.threatminer.org/domain.php?q=github.com");
    });
  });
  describe("#searchByHash", () => {
    it("should return URL", () => {
      expect(subject.supportedTypes.indexOf("hash")).not.equal(-1);
      expect(subject.searchByHash("44d88612fea8a8f36de82e1278abb02f")).
        to.equal("https://www.threatminer.org/sample.php?q=44d88612fea8a8f36de82e1278abb02f");
    });
  });
});
