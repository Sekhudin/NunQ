import { mainContainerClass, containerClass } from 'components/HOCs/container.hoc';
import { cn } from 'packages/utils/cn';
import QuranNavigation from './components/semantic/quran.nav';
import SpecialSurahList from './components/semantic/special-surah.ul';
import SurahList from './components/semantic/surah.ul';
import QuranicCarousel from './components/carousel/quranic.carousel';

const QuranPage = () => {
  return (
    <main>
      <QuranicCarousel className={cn(containerClass)} />
      <QuranNavigation />
      <div className={cn(mainContainerClass, 'py-8')}>
        <SpecialSurahList />
        <SurahList />
      </div>
    </main>
  );
};

export default QuranPage;

// React.useEffect(() => {
//   if (surahNumber === 114 && verse === surah.numberOfVerse) return;

//   const timmer = setInterval(() => {
//     if (verse < surah.numberOfVerse) {
//       setVerse(verse + 1);
//       return;
//     }

//     if (verse === surah.numberOfVerse) {
//       setSurahNumber(surahNumber + 1);
//       setVerse(1);
//       return;
//     }
//   }, 3000);

//   return () => {
//     clearInterval(timmer);
//   };
// }, [verse]);
