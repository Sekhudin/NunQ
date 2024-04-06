import type { Metadata, ResolvingMetadata } from 'next';
import type { NextPageProps } from 'src/types/global';

type ICallbackGenerateMetadata<T> = (
  props: NextPageProps<T>,
  parent: ResolvingMetadata
) => Promise<Metadata>;

export function withMetadata(metadata: Metadata): Metadata {
  return metadata;
}

export function withGenerateMetadata<T>(cb: ICallbackGenerateMetadata<T>) {
  return (props: NextPageProps<T>, parent: ResolvingMetadata) => cb(props, parent);
}
