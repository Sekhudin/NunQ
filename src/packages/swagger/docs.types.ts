import type { OpenAPIV2 } from 'types/open-api';

export namespace Swagger {
  export type Type = 'swagger';
  export type OAS = '2.0';
  export type Host = string;
  export type Basepath = string;
  export type Info = OpenAPIV2.InfoObject;
  export type Tags<TTag extends string = string> = OpenAPIV2.TagObject<TTag>[];
  export type Tag<TTag extends string = string> = OpenAPIV2.TagObject<TTag>;
  export type Schemes = OpenAPIV2.Scheme[] | string[];
  export type Paths<
    TPath extends string = string,
    TTag extends string = string,
    TModelName extends string = string,
    Extensible extends {} = {}
  > = OpenAPIV2.PathsObject<TPath, TTag, TModelName, Extensible>;
  export type Path<
    TTag extends string = string,
    TModelName extends string = string,
    Extensible extends {} = {}
  > = OpenAPIV2.PathItemObject<TTag, TModelName, Extensible>;
  export type Definitions<
    TModelName extends string = string,
    TModel extends Record<string, any> = Record<string, any>
  > = OpenAPIV2.DefinitionsObject<TModelName, TModel>;
  export type Define<TModel extends Record<string, any> = Record<string, any>> =
    OpenAPIV2.SchemaObject<TModel>;
  export type SecurityDefinitions = OpenAPIV2.SecurityDefinitionsObject;
  export type DefineSecurity = OpenAPIV2.SecuritySchemeObject;
  export type Consumes = OpenAPIV2.Consume[] | string[];
  export type ExternalDocs = OpenAPIV2.ExternalDocumentationObject;
  export type Security = OpenAPIV2.SecurityRequirementObject[];
  export type Parameters = OpenAPIV2.ParametersDefinitionsObject;
  export type Produces = OpenAPIV2.Produce[] | string[];
  export type Responses = OpenAPIV2.ResponsesDefinitionsObject;
}
