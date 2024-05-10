import { cn, Props, WithParams } from 'packages/utils/cn';

const AyahSurahSection = ({ className, params }: Props<WithParams<'surah_number'>>) => {
  return (
    <section className={cn(``, className)}>
      <div>Ayah section</div>
    </section>
  );
};

export default AyahSurahSection;
