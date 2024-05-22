import BaseController, { type ApiHandlerPlain } from 'packages/server/base/controller';
import service from './api.service';

class ApiController extends BaseController {
  public GET_Docs: ApiHandlerPlain<'version' | null> = async (req, { params }) => {
    try {
      const host = req.headers.get('Host') || '$host';
      let docs = service.GET_VersionOne(host);
      return this.sendPlain(docs);
    } catch (error) {
      return this.handleException(error);
    }
  };
}

const controller = new ApiController();
export default controller;
