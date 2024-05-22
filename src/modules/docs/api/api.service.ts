import versionOne from 'modules/docs/version-one';

class ApiService {
  public GET_VersionOne(host: string) {
    return versionOne.host(host).build();
  }
}

const service = new ApiService();
export default service;
