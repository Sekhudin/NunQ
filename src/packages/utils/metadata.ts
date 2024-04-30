import type { Metadata, ResolvingMetadata } from 'next';
import type { NextPageProps } from 'types/global';

type ICallbackGenerateMetadata<T extends string> = (
  props: NextPageProps<T>,
  parent: ResolvingMetadata
) => Promise<Metadata>;

export function withMetadata(metadata: Metadata): Metadata {
  return metadata;
}

export function withGenerateMetadata<T extends string>(cb: ICallbackGenerateMetadata<T>) {
  return (props: NextPageProps<T>, parent: ResolvingMetadata) => cb(props, parent);
}
