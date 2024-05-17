export namespace OpenAPIV2 {
  export interface Document<
    TPath extends string = string,
    TTag extends string = string,
    Extensible extends {} = {}
  > {
    basePath?: string;
    consumes?: Consume[] | string[];
    definitions?: DefinitionsObject;
    externalDocs?: ExternalDocumentationObject;
    host?: string;
    info: InfoObject;
    parameters?: ParametersDefinitionsObject;
    paths: PathsObject<TPath, TTag, string, Extensible>;
    produces?: Produce[] | string[];
    responses?: ResponsesDefinitionsObject;
    schemes?: Scheme[] | string[];
    security?: SecurityRequirementObject[];
    securityDefinitions?: SecurityDefinitionsObject;
    swagger: string;
    tags?: TagObject[];
    'x-express-openapi-additional-middleware'?: (
      | ((request: any, response: any, next: any) => Promise<void>)
      | ((request: any, response: any, next: any) => void)
    )[];
    'x-express-openapi-validation-strict'?: boolean;
  }

  export type ResponseCode =
    | '200'
    | '201'
    | '204'
    | '400'
    | '403'
    | '404'
    | '500'
    | 'default'
    | 'success'
    | 'error';
  export type Type = 'string' | 'integer' | 'numeric' | 'boolean' | 'object' | 'array' | 'null' | 'file';
  export type Format = 'date-time' | 'int-32' | 'int-64';

  export type Consume =
    | 'multipart/form-data'
    | 'application/json'
    | 'application/x-www-form-urlencoded'
    | 'application/xml';
  export type Produce = 'application/json' | 'application/xml';
  export type Scheme = 'http' | 'https' | 'ws' | 'wss';
  export type ParameterIn = 'header' | 'body' | 'query' | 'path';

  export interface TagObject<TTag extends string = string> {
    name: TTag;
    description?: string;
    externalDocs?: ExternalDocumentationObject;
  }

  export interface SecuritySchemeObjectBase {
    type: 'basic' | 'apiKey' | 'oauth2';
    description?: string;
  }

  export interface SecuritySchemeBasic extends SecuritySchemeObjectBase {
    type: 'basic';
  }

  export interface SecuritySchemeApiKey<TSecurity extends string = string>
    extends SecuritySchemeObjectBase {
    type: 'apiKey';
    name: TSecurity;
    in: ParameterIn;
  }

  export type SecuritySchemeOauth2 =
    | SecuritySchemeOauth2Implicit
    | SecuritySchemeOauth2AccessCode
    | SecuritySchemeOauth2Password
    | SecuritySchemeOauth2Application;

  export interface ScopesObject {
    [index: string]: any;
  }

  export interface SecuritySchemeOauth2Base extends SecuritySchemeObjectBase {
    type: 'oauth2';
    flow: 'implicit' | 'password' | 'application' | 'accessCode';
    scopes: ScopesObject;
  }

  export interface SecuritySchemeOauth2Implicit extends SecuritySchemeOauth2Base {
    flow: 'implicit';
    authorizationUrl: string;
  }

  export interface SecuritySchemeOauth2AccessCode extends SecuritySchemeOauth2Base {
    flow: 'accessCode';
    authorizationUrl: string;
    tokenUrl: string;
  }

  export interface SecuritySchemeOauth2Password extends SecuritySchemeOauth2Base {
    flow: 'password';
    tokenUrl: string;
  }

  export interface SecuritySchemeOauth2Application extends SecuritySchemeOauth2Base {
    flow: 'application';
    tokenUrl: string;
  }

  export type SecuritySchemeObject =
    | SecuritySchemeBasic
    | SecuritySchemeApiKey
    | SecuritySchemeOauth2;

  export interface SecurityDefinitionsObject {
    [index: string]: SecuritySchemeObject;
  }

  export interface SecurityRequirementObject {
    [index: string]: string[];
  }

  export interface ReferenceObject<TModelName extends string = string> {
    $ref: `#/definitions${TModelName}`;
  }

  export type Response<TModelName extends string = string> =
    | ResponseObject<TModelName>
    | ReferenceObject<TModelName>;

  export interface ResponsesDefinitionsObject {
    [index: string]: ResponseObject;
  }

  export type Schema<TModelName extends string = string> =
    | SchemaObject
    | ReferenceObject<TModelName>;

  export interface ResponseObject<TModelName extends string = string> {
    description: string;
    schema?: Schema<TModelName>;
    headers?: HeadersObject;
    examples?: ExampleObject;
  }

  export interface HeadersObject {
    [index: string]: HeaderObject;
  }

  export interface HeaderObject extends ItemsObject {
    description?: string;
  }

  export interface ExampleObject {
    [index: string]: any;
  }

  export interface ResponseObject<TModelName extends string = string> {
    description: string;
    schema?: Schema<TModelName>;
    headers?: HeadersObject;
    examples?: ExampleObject;
  }

  export type OperationObject<TTag extends string = string, Extensible extends {} = {}> = {
    tags?: TTag[];
    summary?: string;
    description?: string;
    externalDocs?: ExternalDocumentationObject;
    operationId?: string;
    consumes?: Consume[] | string[];
    produces?: Produce[] | string[];
    parameters?: Parameters;
    responses: ResponsesObject;
    schemes?: Scheme[] | string[];
    deprecated?: boolean;
    security?: SecurityRequirementObject[];
  } & Extensible;

  export type ResponsesObject<TModelName extends string = string> = {
    [K in ResponseCode]?: Response<TModelName> | undefined;
  };

  export type Parameters = (ReferenceObject | Parameter)[];

  export type Parameter = InBodyParameterObject | GeneralParameterObject;

  export interface InBodyParameterObject extends ParameterObject {
    schema: Schema;
  }

  export interface GeneralParameterObject extends ParameterObject, ItemsObject {
    allowEmptyValue?: boolean;
  }

  export enum HttpMethods {
    GET = 'get',
    PUT = 'put',
    POST = 'post',
    DELETE = 'delete',
    OPTIONS = 'options',
    HEAD = 'head',
    PATCH = 'patch',
  }

  export type PathItemObject<
    TTag extends string = string,
    TModelName extends string = string,
    Extensible extends {} = {}
  > = {
    $ref?: `#/definitions/${TModelName}`;
    parameters?: Parameters;
  } & {
    [method in HttpMethods]?: OperationObject<TTag, Extensible>;
  };

  export type PathsObject<
    TPath extends string = string,
    TTag extends string = string,
    TModelName extends string = string,
    Extensible extends {} = {}
  > = Partial<Record<TPath, PathItemObject<TTag, TModelName, Extensible>>>;

  export interface ParametersDefinitionsObject {
    [index: string]: ParameterObject;
  }

  export interface ParameterObject {
    name: string;
    in: ParameterIn;
    description?: string;
    required?: boolean;
    [index: string]: any;
  }

  export type DefinitionsObject<
    TModelName extends string = string,
    TModel extends Record<string, any> = Record<string, any>
  > = {
    [P in TModelName]?: SchemaObject<TModel>;
  };

  export interface SchemaObject<TModel extends Record<string, any> = Record<string, any>>
    extends IJsonSchema<TModel> {
    [index: string]: any;
    discriminator?: string;
    readOnly?: boolean;
    xml?: XMLObject;
    externalDocs?: ExternalDocumentationObject;
    example?: any;
    default?: any;
    items?: ItemsObject | ReferenceObject;
    properties?: {
      [P in keyof TModel]: SchemaObject<TModel>;
    };
  }

  export interface ExternalDocumentationObject {
    [index: string]: any;
    description?: string;
    url: string;
  }

  export interface ItemsObject {
    type: Type;
    format?: Format;
    items?: ItemsObject | ReferenceObject;
    collectionFormat?: string;
    default?: any;
    maximum?: number;
    exclusiveMaximum?: boolean;
    minimum?: number;
    exclusiveMinimum?: boolean;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    enum?: any[];
    multipleOf?: number;
    $ref?: string;
  }

  export interface XMLObject {
    [index: string]: any;
    name?: string;
    namespace?: string;
    prefix?: string;
    attribute?: boolean;
    wrapped?: boolean;
  }

  export interface InfoObject {
    title: string;
    description?: string;
    termsOfService?: string;
    contact?: ContactObject;
    license?: LicenseObject;
    version: string;
  }

  export interface ContactObject {
    name?: string;
    url?: string;
    email?: string;
  }

  export interface LicenseObject {
    name: string;
    url?: string;
  }
}

export interface IJsonSchema<TModel extends Record<string, any> = Record<string, any>> {
  id?: string;
  $schema?: string;
  title?: string;
  description?: string;
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: boolean;
  minimum?: number;
  exclusiveMinimum?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  additionalItems?: boolean | IJsonSchema;
  items?: IJsonSchema | IJsonSchema[];
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxProperties?: number;
  minProperties?: number;
  required?: string[];
  additionalProperties?: boolean | IJsonSchema;
  definitions?: {
    [name: string]: IJsonSchema;
  };
  properties?: {
    [P in keyof TModel]: IJsonSchema<TModel>;
  };
  patternProperties?: {
    [name: string]: IJsonSchema;
  };
  dependencies?: {
    [name: string]: IJsonSchema | string[];
  };
  enum?: any[];
  type?: OpenAPIV2.Type | OpenAPIV2.Type[];
  allOf?: IJsonSchema[];
  anyOf?: IJsonSchema[];
  oneOf?: IJsonSchema[];
  not?: IJsonSchema;
  $ref?: string;
}
