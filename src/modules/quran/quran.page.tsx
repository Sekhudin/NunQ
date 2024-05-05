import Navigation from './components/navigation/quran.navigation';
import SpecialSurahListLink from './components/link/special-surah-list.link';
import SurahListLink from './components/link/surah-list.link';

const QuranPage = () => {
  return (
    <div className="py-8">
      <Navigation />
      <SpecialSurahListLink />
      <SurahListLink />
    </div>
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
