import type { Swagger } from './docs.types';

class SwaggerDocs<
  TPath extends string = string,
  TTag extends string = string,
  TModelName extends string = string,
  Extensible extends {} = {}
> {
  private _type: Swagger.Type = 'swagger';
  private _oas: Swagger.OAS = '2.0';
  private _host: Swagger.Host = '';
  private _basePath: Swagger.Basepath = '/api';
  private _info: Swagger.Info = { title: 'API Documentation', version: '1.0' };
  private _tags: Swagger.Tags<TTag> = [];
  private _schemes: Swagger.Schemes = ['https'];
  private _paths: Swagger.Paths<TPath, TTag, TModelName, Extensible> = {};
  private _definitions: Swagger.Definitions<TModelName> = {};
  private _securityDefinitions: Swagger.SecurityDefinitions = {};
  private _externalDocs?: Swagger.ExternalDocs;

  private temp() {
    return {
      [this._type]: this._oas,
      host: this._host,
      basePath: this._basePath,
      info: this._info,
      tags: this._tags,
      schemes: this._schemes,
      paths: this._paths,
      securityDefinitions: this._securityDefinitions,
      definitions: this._definitions,
      externalDocs: this._externalDocs,
    };
  }

  public host(value: string) {
    this._host = value;
    return this;
  }

  public basePath(value: string) {
    this._basePath = value;
    return this;
  }

  public info(value: Swagger.Info) {
    this._info = value;
    return this;
  }

  public contact(contact: Swagger.Info['contact']) {
    this._info = { ...this._info, contact };
    return this;
  }

  public schemes(...values: Swagger.Schemes) {
    this._schemes = values;
    return this;
  }

  public tags(values: Swagger.Tags<TTag>) {
    this._tags = values;
    return this;
  }

  public tag(value: Swagger.Tag<TTag>) {
    this._tags.push(value);
    return this;
  }

  public paths(values: Swagger.Paths<TPath, TTag, TModelName, Extensible>) {
    this._paths = {
      ...this._paths,
      ...values,
    };
    return this;
  }

  public path(key: TPath, value: Swagger.Path<TTag, TModelName, Extensible>) {
    this._paths[key] = value;
    return this;
  }

  public get(key: TPath, value: Swagger.Path<TTag, TModelName, Extensible>['get']) {
    this._paths[key] = {
      ...this._paths[key],
      get: value,
    };

    return this;
  }

  public put(key: TPath, value: Swagger.Path<TTag, TModelName, Extensible>['put']) {
    this._paths[key] = {
      ...this._paths[key],
      put: value,
    };

    return this;
  }

  public post(key: TPath, value: Swagger.Path<TTag, TModelName, Extensible>['post']) {
    this._paths[key] = {
      ...this._paths[key],
      post: value,
    };

    return this;
  }

  public patch(key: TPath, value: Swagger.Path<TTag, TModelName, Extensible>['patch']) {
    this._paths[key] = {
      ...this._paths[key],
      patch: value,
    };

    return this;
  }

  public delete(key: TPath, value: Swagger.Path<TTag, TModelName, Extensible>['delete']) {
    this._paths[key] = {
      ...this._paths[key],
      delete: value,
    };

    return this;
  }

  public definitions(values: Swagger.Definitions<TModelName>) {
    this._definitions = {
      ...this.definitions,
      ...values,
    };
    return this;
  }

  public define<TModel extends Record<string, any> = Record<string, any>>(
    key: TModelName,
    value: Swagger.Define<TModel>
  ) {
    this._definitions = {
      ...this._definitions,
      [key]: value,
    };
    return this;
  }

  public defineSecurity(key: string, value: Swagger.DefineSecurity) {
    this._securityDefinitions = {
      ...this._securityDefinitions,
      [key]: value,
    };
    return this;
  }

  public externalDocs(value: Swagger.ExternalDocs) {
    this._externalDocs = value;
    return this;
  }

  public build() {
    return this.temp();
  }

  public buildStringify() {
    return JSON.stringify(this.temp());
  }
}

export default SwaggerDocs;
